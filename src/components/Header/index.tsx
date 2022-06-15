import logoImg from "../../assets/logo.svg";
import { AiOutlinePlus } from "react-icons/ai";

import { Container, Content } from "./styles";

interface HeaderProps {
	onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => (
	<Container>
		<Content>
			<img src={logoImg} alt="dt money" />
			<button type="button" onClick={onOpenNewTransactionModal}>
				Nova Transação <AiOutlinePlus />
			</button>
		</Content>
	</Container>
);
