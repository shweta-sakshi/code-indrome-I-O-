import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import { LoginContext } from './component/contexProvider/Context.jsx';
import Loginform from './component/Loginform';
import SignUp from './component/SignUp';
import Error from "./pages/Error.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Card1 from "./component/Card1";
import Dash from "./component/Dashboard.jsx";
import Profile from './component/Userprofile';
import Sellerprofile from './component/Sellerprofile';
import Paymentdetail from './component/Paymentdetail';
import Addproduct from './component/Addproduct.jsx';

function App() {
  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  // const history = useNavigate();

  // Function to check if the user is logged in
  const DashboardValid = async () => {
    //getting value of token
    let token = localStorage.getItem("usersdatatoken");

    //calling validate API
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("User not loggedIn");
    } else {
      console.log("user verify");
      setLoginData(data);
      // history("/dash");
      window.location.href = "/dash";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/login" element={<Loginform />} />
              <Route path="/dash" element={<Dash />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/userprofile" element={<Profile />} />
              <Route path="/product_card" element={<Card1 />} />
              <Route path="/sellerprofile" element={<Sellerprofile />} />
              <Route path="/Paymentdetail" element={<Paymentdetail />} />
              <Route path="/Addproduct" element={<Addproduct />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}

export default App;
