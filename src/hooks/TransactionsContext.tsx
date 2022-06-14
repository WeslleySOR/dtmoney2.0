import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

interface Transactions {
	id: string;
	title: string;
	type: string;
	category: string;
	amount: number;
	// createdAt: Date;
}
// | 'createdAt'
type TransactionInput = Omit<Transactions, "id">;
interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionContextData {
	transactions: Transactions[];
	createTransaction: (transaction: TransactionInput) => void;
	deleteTransaction: (id: string) => void;
}

const TransactionContext = createContext<TransactionContextData>(
	{} as TransactionContextData
);

export const TransactionProvider = ({
	children,
}: TransactionsProviderProps) => {
	const [transactions, setTransactions] = useState<Transactions[]>(() => {
		const storagedTransactions = localStorage.getItem("@AMJoias:transactions");
		if (storagedTransactions) {
			return JSON.parse(storagedTransactions);
		}
		return [];
	});

	function createTransaction(transactionInput: TransactionInput) {
		const newTransaction = {
			...transactionInput,
			id: uuid(),
			// createdAt: new Date()
		};
		const newTransactions = [...transactions, newTransaction];
		setTransactions(newTransactions);
		localStorage.setItem(
			"@AMJoias:transactions",
			JSON.stringify(newTransactions)
		);
	}

	function deleteTransaction(id: string) {
		const transactionIndex = transactions.findIndex(
			(transaction) => transaction.id === id
		);
		const newTransactions = transactions;
		newTransactions.splice(transactionIndex, 1);
		setTransactions(newTransactions);
		localStorage.setItem(
			"@AMJoias:transactions",
			JSON.stringify(newTransactions)
		);
	}

	return (
		<TransactionContext.Provider
			value={{ transactions, createTransaction, deleteTransaction }}
		>
			{children}
		</TransactionContext.Provider>
	);
};

export const useTransactions = () => {
	const contex = useContext(TransactionContext);
	return contex;
};
