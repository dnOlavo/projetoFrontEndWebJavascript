import Titulo from './Titulo.jsx';
import ListaLinks from './ListaLinks.jsx';
import Descricao from './Descricao.jsx';
import '../css/styles.css';

function BoxSecao() {
  return (
    <>
    <div className="box-secao">
      <Titulo />
      <Descricao />
      <ListaLinks />
    </div>
    </>
  );
}

export default BoxSecao;
