import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./component/contexProvider/Context.jsx";
import Loginform from "./component/Loginform";
import SignUp from "./component/SignUp";
import Profile from "./component/Userprofile";
import Error from "./pages/Error.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Activationpage from "./pages/Activationpage.jsx";
import Selleractivationpage from "./pages/Selleractivationpage.jsx";
import Card1 from "./component/Card1";
import Dashboard from "./component/Dashboard.jsx";
import Userdashboard from "./pages/seller/Sellerdashboard.jsx";
import Sellerprofile from "./component/Sellerprofile";
import Sellerloginform from "./component/Sellerloginform.jsx";
import Paymentdetail from "./component/Paymentdetail";
import { RiLoader4Line } from "react-icons/ri";
import Addproduct from "./component/Addproduct.jsx";
import SellerAddProduct from "./component/SellerAddProduct.jsx";
import TrackOrder from './component/TrackOrder.jsx';
import Rating from "./component/Rating.jsx";




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
              <Route path='/userdashboard' element={<Userdashboard />} />
              {/* <Route path="/dash" element={<Dashboard />} /> */}
              <Route path="/register" element={<SignUp />} />
              <Route path="/userprofile" element={<Profile />} />
              <Route path="/product_card" element={<Card1 />} />
              <Route path="/sellersignupform" element={<Sellerprofile />} />
              <Route path="/sellerloginform" element={<Sellerloginform />} />
              <Route
                path="/seller/activation/:activation_token"
                element={<Selleractivationpage />}
              />
              <Route path="/paymentdetail" element={<Paymentdetail />} />
              <Route path="/addproduct" element={<Addproduct />} />
              <Route path='/trackOrder' element={<TrackOrder />} />
              <Route path='/rating' element={<Rating/>} />
              <Route
                path="/activation/:activation_token"
                element={<Activationpage />}
              />
              <Route path="/sellerAddProduct" element={<SellerAddProduct />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center flex">
            <RiLoader4Line className="animate-spin text-blue-500 text-4xl m-2" />
            <h1 className="text-xl m-2">Loading...</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
