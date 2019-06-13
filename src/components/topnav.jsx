import React from 'react';
let a = "123"
function Topnav() {
    return (
        <div className="topnav">
        <ul>
          <li><a href={a}><i className="fa fa-glass"></i>奇趣事</a></li>
          <li><a href={a}><i className="fa fa-phone"></i>潮科技</a></li>
          <li><a href={a}><i className="fa fa-fire"></i>会生活</a></li>
          <li><a href={a}><i className="fa fa-gift"></i>美奇迹</a></li>
        </ul>
      </div>
      
    )
}
export default Topnav;