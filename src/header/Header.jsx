import React from 'react'
import "./header.css";

const Header = () => {
    return (
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://thumbs.dreamstime.com/b/purple-petunia-flowers-bed-beautiful-blurred-nature-background-banner-website-garden-concept-toned-54798543.jpg"
          alt=""
        />
      </div>
    );
}

export default Header
