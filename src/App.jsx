import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Titulo } from './components/Inicio';
import { NavBar } from './components/NavBar';
import { Products } from './components/Productos';
import { Nosotros } from './components/Nosotros';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Titulo />
        <Routes>
          <Route path='/' exact component={Titulo} />
          <Route path='/Productos' exact component={Products} />
          <Route path='/Nosotros' exact component={Nosotros} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;