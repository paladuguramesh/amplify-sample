import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>

     </div>
  );
}

export default App;
