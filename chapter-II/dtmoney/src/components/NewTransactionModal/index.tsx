import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen, 
    onRequestClose,
}:NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        console.log('event', event);
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setCategory('');
        setAmount(0);
        setType('deposit');
        onRequestClose();
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
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transaçao</h2>

                <input 
                    value ={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Titulo"
                />

                <input 
                    type="number"
                    onChange={event => setAmount(Number(event.target.value))}
                    value={amount}
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