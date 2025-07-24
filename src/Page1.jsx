
import { useNavigate } from 'react-router-dom';
import SimpleTable from './components/SimpleTable.jsx';

function Page1() {
  const navigate = useNavigate();

  return (
    <div className="App"> 
        <p>
          Pagina1
        </p>
        <SimpleTable data={[]} />
        <button onClick={() => navigate('/')}>Go to Main</button>
        <button onClick={() => navigate('/page1')}>Go to Page 1</button>
        <button onClick={() => navigate('/page2')}>Go to Page 2</button>
    </div>
  );
}

export default Page1;