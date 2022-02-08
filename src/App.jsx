import { Counter } from './components/Counter';
import React from 'react';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}