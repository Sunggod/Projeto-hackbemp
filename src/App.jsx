import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Registro from './Pages/Cadastro';

import './styles/global.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
