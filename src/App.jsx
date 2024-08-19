import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './styles/global.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
