import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';


Modal.setAppElement('#root');
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            ariaHideApp={false}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close">
          <img src={closeImg} alt="Fechar modal"/>
        </button>    
            <Container>
                <h2>Cadastrar Transaçao</h2>

                <input 
                    placeholder="Titulo"
                />

                <input 
                    type="number"
                    placeholder="Valor"
                />

                <input 
                    placeholder="Categoria"
                />
                
                <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    // className={type === 'deposit' ? 'active' : ''}
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    type="button"
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}>
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
                </TransactionTypeContainer>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
      </Modal>
    );
}