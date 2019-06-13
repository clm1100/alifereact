import React, { Component } from "react";
import { Link } from "react-router-dom"
class Hots extends Component{
    render(){
        return (
        <div className="panel hots">
          <h3>热门推荐</h3>
          <ul>
            <li>
              <Link to="/">
                <img src="uploads/hots_2.jpg" alt="" />
                <span>星球大战:原力觉醒视频演示 电影票68</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="uploads/hots_3.jpg" alt="" />
                <span>你敢骑吗？全球第一辆全功能3D打印摩托车亮相</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="uploads/hots_4.jpg" alt="" />
                <span>又现酒窝夹笔盖新技能 城里人是不让人活了！</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="uploads/hots_5.jpg" alt="" />
                <span>实在太邪恶！照亮妹纸绝对领域与私处</span>
              </Link>
            </li>
          </ul>
        </div>
      
        )
    }
}

export default Hots;