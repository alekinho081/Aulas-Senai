import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './Componentes/layout/Layout';
import { Sobre } from './Componentes/pages/Sobre';
import { Projeto } from './Componentes/pages/Projeto';
import { Contato } from './Componentes/pages/Contato';
import { Home } from './Componentes/pages/Home';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={< Home />} />

            <Route path='/sobre' element={< Sobre />} />
            <Route path='/projeto' element={< Projeto />} />
            <Route path='/contato' element={< Contato />} />
            <Route path='*' element={<h1> 404 Not Found</h1>} />
          
          </Route>
          
          
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
