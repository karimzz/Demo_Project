import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Component/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';

function App() {
  return (
    <div >
      
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
