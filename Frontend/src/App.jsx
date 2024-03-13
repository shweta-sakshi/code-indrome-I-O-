import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './component/Loginform/Loginform';
import SignUp from './component/SignUp/SignUp';
import Profile from './component/ProfileUp/ProfileUp'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/ProfileUp" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
