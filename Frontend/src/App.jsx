import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './component/Loginform';
import SignUp from './component/SignUp';
import Profile from './component/ProfileUp'

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  // const history = useNavigate();

  const DashboardValid = async () => {
    //getting value of token
    let token = localStorage.getItem("usersdatatoken");

    //calling validate API
    const res = await fetch("/validuser", {
      method: "GET",
      headers:
      {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("User not loggedIn");
    } else {
      console.log("user verify");
      setLoginData(data);
      // history("/dash");
      window.location.href = '/dash';
    }
  }

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000)
  }, []);

  return (
    <>
     {
      data ? (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/login" element={<Loginform />} />
                <Route path="/dash" element={<Dashboard />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/ProfileUp" element={<Profile/>} />
                <Route path='*' element={<Error />} />
              </Routes>
            </BrowserRouter>
          </>
        ) : <div><h1>Loading...</h1></div>
     }
    </>
  )
}

export default App;
