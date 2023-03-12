import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Logout from "./pages/logout/Logout";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
function App() {
  const user=false;
  return (
    <Router> 
    <TopBar />
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
          <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
          <Route path="/write" element={user ? <Home /> : <Write />} ></Route>
          <Route path="/settings" element={user ? <Home /> : <Settings/>} ></Route>
          <Route path="/logout" element={user ? <Home /> : <Logout/>} ></Route>
          <Route path="/post/:postId" element={user ? <Single />:<SinglePost/>} ></Route> 
        </Routes>
    </Router>
  );
}

export default App;
