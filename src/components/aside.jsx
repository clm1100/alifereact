import React from 'react';
import { Link} from 'react-router-dom'
let a = 123
function Aside() {
    return (
        <div className="aside">
         <div className="widgets">
         <div className="body">
          <div className="slink" style={{"textAlign":"center"}}>
            <Link to="/login" >登录</Link> | 
            <Link to="/register" >注册</Link>
          </div>
          </div>
        </div> 
        <div className="widgets">
          <h4>搜索</h4>
          <div className="body search">
            <form>
              <input type="text" className="keys" placeholder="输入关键字" />
              <input type="submit" className="btn" value="搜索" />
            </form>
          </div>
        </div>
        <div className="widgets">
          <h4>随机推荐</h4>
          <ul className="body random">
            <li>
              <a href={a}>
                <p className="title">废灯泡的14种玩法 妹子见了都会心动</p>
                <p className="reading">阅读(819)</p>
                <div className="pic">
                  <img src="uploads/widget_1.jpg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <p className="title">可爱卡通造型 iPhone 6防水手机套</p>
                <p className="reading">阅读(819)</p>
                <div className="pic">
                  <img src="uploads/widget_2.jpg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <p className="title">变废为宝！将手机旧电池变为充电宝的Better</p>
                <p className="reading">阅读(819)</p>
                <div className="pic">
                  <img src="uploads/widget_3.jpg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <p className="title">老外偷拍桂林芦笛岩洞 美如“地下彩虹”</p>
                <p className="reading">阅读(819)</p>
                <div className="pic">
                  <img src="uploads/widget_4.jpg" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <p className="title">doge神烦狗打底南瓜裤 就是如此魔性</p>
                <p className="reading">阅读(819)</p>
                <div className="pic">
                  <img src="uploads/widget_5.jpg" alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="widgets">
          <h4>最新评论</h4>
          <ul className="body discuz">
            <li>
              <a href={a}>
                <div className="avatar">
                  <img src="uploads/avatar_1.jpg" alt="" />
                </div>
                <div className="txt">
                  <p>
                    <span>鲜活</span>9个月前(08-14)说:
                </p>
                  <p>挺会玩的</p>
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <div className="avatar">
                  <img src="uploads/avatar_1.jpg" alt="" />
                </div>
                <div className="txt">
                  <p>
                    <span>鲜活</span>9个月前(08-14)说:
                </p>
                  <p>挺会玩的</p>
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <div className="avatar">
                  <img src="uploads/avatar_2.jpg" alt="" />
                </div>
                <div className="txt">
                  <p>
                    <span>鲜活</span>9个月前(08-14)说:
                </p>
                  <p>挺会玩的</p>
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <div className="avatar">
                  <img src="uploads/avatar_1.jpg" alt="" />
                </div>
                <div className="txt">
                  <p>
                    <span>鲜活</span>9个月前(08-14)说:
                </p>
                  <p>挺会玩的</p>
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <div className="avatar">
                  <img src="uploads/avatar_2.jpg" alt="" />
                </div>
                <div className="txt">
                  <p>
                    <span>鲜活</span>9个月前(08-14)说:
                </p>
                  <p>挺会玩的</p>
                </div>
              </a>
            </li>
            <li>
              <a href={a}>
                <div className="avatar">
                  <img src="uploads/avatar_1.jpg" alt="" />
                </div>
                <div className="txt">
                  <p>
                    <span>鲜活</span>9个月前(08-14)说:
                </p>
                  <p>挺会玩的</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    )
}
export default Aside;