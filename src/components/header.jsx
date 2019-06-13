import React from 'react';
import { Link } from 'react-router-dom';

let logo = require("../assets/img/logo.png");
function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </h1>
      <ul className="nav">
        <li><Link to="/list/qiqu"><i className="fa fa-glass"></i>奇趣事</Link></li>
        <li><Link to="/list/keji"><i className="fa fa-phone"></i>潮科技</Link></li>
        <li><Link to="/list/life"><i className="fa fa-fire"></i>会生活</Link></li>
        <li><Link to="/list/qiji"><i className="fa fa-gift"></i>美奇迹</Link></li>
      </ul>
      <div className="search">
        <form>
          <input type="text" className="keys" placeholder="输入关键字" />
          <input type="submit" className="btn" value="搜索" />
        </form>
      </div>
      <div className="slink">
        <Link to={"/"}>链接01</Link> | <Link to={"/"}>链接02</Link>
      </div>
    </div>

  )
}
export default Header;