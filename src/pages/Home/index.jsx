import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>

      <Card name="Will" time="10:29:43" />
      <Card name="Bia" time="15:19:33" />
    </div>
  );
}
