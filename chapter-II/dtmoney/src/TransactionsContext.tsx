import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string
}

// interface TransactionInput {
//   title: string; 
//   amount: number;
//   category: string;
//   type: string;
// }
//type TransactionInput2 = Pick<Transaction, 'title' | 'amount', 'type', 'category'>; //pick recebe o tipo e seleciona os valores

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; //Omit recebe todos os campos e retira alguns

interface TransactionsProviderPros {
  children: ReactNode
}
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider ({ children}: TransactionsProviderPros) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() =>{
      api.get('transactions')
          .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
     const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
     })
     const { transaction } = response.data;

     setTransactions([
      ...transactions,
      transaction
     ])
  } 

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
} 