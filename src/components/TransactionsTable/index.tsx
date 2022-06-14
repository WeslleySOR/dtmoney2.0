import { useTransactions } from '../../hooks/TransactionsContext';
import { Container } from './styles';
import { FaTrashAlt } from "react-icons/fa"

export const TransactionsTable = () => {
  const { transactions, deleteTransaction } = useTransactions();

  const handleDeleteItem = (id: string) => {
    if (window.confirm("Deseja realmente apagar essa transação?")) {
      deleteTransaction(id);
    }
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            {/* <th>Data</th> */}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions && transactions.map(transaction => 
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              {/* <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  transaction.createdAt
                )}
              </td> */}
              <td>
                <button onClick={() => handleDeleteItem(transaction.id)}>
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}