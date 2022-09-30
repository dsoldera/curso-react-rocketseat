import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from 'react';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log('transactions', transactions);
  
     return (
    <Container>
      

      {/* using this no more */}
      {/* <TransactionsContext.Consumer>
        {(data) => {
          console.log('data', data);

          return <p>ok</p>
        }}
      </TransactionsContext.Consumer> */}

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>- R$ 1050,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$ -50,00</strong>
      </div>
      
    </Container>
  )
}