import  logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';
import { useState } from 'react';

export function Header () {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal () {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal () {
        setIsNewTransactionModalOpen(false);
    }
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money"/>
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>

                <Modal 
                    isOpen={isNewTransactionModalOpen} 
                    ariaHideApp={false}
                    onRequestClose={handleCloseNewTransactionModal}>
                        <h2>Cadastrar Transaçao</h2>   
                </Modal>
            </Content>
        </Container>
    )
}