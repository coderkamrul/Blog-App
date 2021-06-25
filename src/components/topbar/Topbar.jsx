import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context';
import "./topbar.css";

const PF = "http://localhost:5000/images/";

const Topbar = () => {
  const {user, dispatch} = useContext(Context);

  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"});
  }
    return (
      <div className="topbar">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">HOME</Link>
            </li>
            <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
            <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
            <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
            <li className="topListItem" onClick={handleLogout}><Link to="/login" className="link">{user && "LOGOUT"}</Link></li>
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <Link to="/setting" className="link">
              <img
              className="topImg"
                src={PF + user.profilePic}
                alt=""
              />
              </Link>
            ) : (
              <ul className="topList">
              <li className="topListItem">
              <Link to="/login" className="link">LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link to="/register" className="link">REGISTER</Link>
              </li>
              </ul>
            )
          }
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    );
}

export default Topbar
