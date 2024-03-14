import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './component/Loginform';
import SignUp from './component/SignUp';
import Profile from './component/UserProfile';
import Card1 from "./component/Card1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/ProfileUp" element={<Profile />} />
        <Route path="/product_card" element={<Card1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
