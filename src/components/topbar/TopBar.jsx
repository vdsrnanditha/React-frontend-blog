import "./topbar.css"
import { Link } from "react-router-dom"
export default function TopBar() {
  const user=true;
    return (
    <div className="top">
        <div className="topLeft">
            <div>
                
            <a href="https://www.facebook.com/rihanna/about/"><i className="TopIcon fa-brands fa-square-facebook"></i></a>
            <a href="https://twitter.com/rihanna"><i className="TopIcon fa-brands fa-square-twitter"></i></a>
            <a href="https://www.instagram.com/badgalriri/?hl=en"><i className="TopIcon fa-brands fa-square-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw"><i className="TopIcon fa-brands fa-square-youtube"></i></a>
            
            </div>
        </div>
        <div className="topCenter">
        <ul className="topList">
                <li className="topListItem">
                    <Link to="/">HOME</Link>
                </li>  
                <li className="topListItem">
                    <Link className="link" to="/login">LOGIN/REGISTER</Link>
                </li>         
                <li className="topListItem">CONTACT</li>     
                <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                {user && <li className="topListItem">
                <Link className="link" to="/logout">LOGOUT</Link>
                </li>}   
            </ul>
        </div>

        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://qph.cf2.quoracdn.net/main-qimg-6577fc00a222265339caf095f50f76a6-lq"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}