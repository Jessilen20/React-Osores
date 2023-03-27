import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Escoger from './pages/Escoger';
import Index from './pages/Index';
import Estilo from './pages/Estilo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/:item' element={<Escoger />} />
          <Route path='/:item/:color1/:color2' element={<Estilo />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
