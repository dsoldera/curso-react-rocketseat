import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';

import { api } from '../../services/api';

Modal.setAppElement('#root');
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransation(event:FormEvent) {
        event.preventDefault();

        const data = {
            title, value, category, type,
        }

        return api.post('/transactions', data)

    }

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
            <Container onSubmit={handleCreateNewTransation}>
                <h2>Cadastrar Transaçao</h2>

                <input 
                    value ={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Titulo"
                />

                <input 
                    type="number"
                    onChange={event => setValue(Number(event.target.value))}
                    value={value}
                    placeholder="Valor"
                />

                <input 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    placeholder="Categoria"
                />
                
                <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor='green'
                    >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox 
                    type="button"
                    onClick={() => {setType('withdraw')}}
                    activeColor='red'
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