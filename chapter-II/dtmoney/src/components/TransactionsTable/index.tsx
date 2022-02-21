import { Container } from "./styles";
import { useEffect } from 'react';
import { api } from "../../services/api";

export function TransactionsTable() {

    useEffect(() =>{
        api.get('transactions')
            .then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>    
                    <tr>
                        <td>Varejão</td>
                        <td>R$ 80,00</td>
                        <td>Comida</td>
                        <td>17/02/202</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}