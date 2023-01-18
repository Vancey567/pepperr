import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Home from './Components/Home/Home';
import AdminPanel from './Components/AdminPanel/AdminPanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<AdminPanel />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
