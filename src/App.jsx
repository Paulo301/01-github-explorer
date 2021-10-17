import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';

import './styles/global.scss';

export function App() {
  // throw new Error("Erro");

  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}