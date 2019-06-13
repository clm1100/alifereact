import React, { Component } from "react";
import Swipe from "../common/swipe.jsx";
let a = 123;

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Swipe></Swipe>
        <div className="panel focus">
          <h3>焦点关注</h3>
          <ul>
            <li className="large">
              <a href={a}>
                <img src="uploads/hots_1.jpg" alt="" />
                <span>XIU主题演示</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_2.jpg" alt="" />
                <span>星球大战：原力觉醒视频演示 电影票68</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_3.jpg" alt="" />
                <span>你敢骑吗？全球第一辆全功能3D打印摩托车亮相</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_4.jpg" alt="" />
                <span>又现酒窝夹笔盖新技能 城里人是不让人活了！</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_5.jpg" alt="" />
                <span>又现酒窝夹笔盖新技能 城里人是不让人活了！</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="panel top">
          <h3>一周热门排行</h3>
          <ol>
            <li>
              <i>1</i>
              <a href={a}>你敢骑吗？全球第一辆全功能3D打印摩托车亮相</a>
              <a href={a} className="like">赞(964)</a>
              <span>阅读 (18206)</span>
            </li>
            <li>
              <i>2</i>
              <a href={a}>又现酒窝夹笔盖新技能 城里人是不让人活了！</a>
              <a href={a} className="like">赞(964)</a>
              <span className="">阅读 (18206)</span>
            </li>
            <li>
              <i>3</i>
              <a href={a}>实在太邪恶！照亮妹纸绝对领域与私处</a>
              <a href={a} className="like">赞(964)</a>
              <span>阅读 (18206)</span>
            </li>
            <li>
              <i>4</i>
              <a href={a}>没有任何防护措施的摄影师在水下拍到了这些画面</a>
              <a href={a} className="like">赞(964)</a>
              <span>阅读 (18206)</span>
            </li>
            <li>
              <i>5</i>
              <a href={a}>废灯泡的14种玩法 妹子见了都会心动</a>
              <a href={a} className="like">赞(964)</a>
              <span>阅读 (18206)</span>
            </li>
          </ol>
        </div>
        <div className="panel hots">
          <h3>热门推荐</h3>
          <ul>
            <li>
              <a href={a}>
                <img src="uploads/hots_2.jpg" alt="" />
                <span>星球大战:原力觉醒视频演示 电影票68</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_3.jpg" alt="" />
                <span>你敢骑吗？全球第一辆全功能3D打印摩托车亮相</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_4.jpg" alt="" />
                <span>又现酒窝夹笔盖新技能 城里人是不让人活了！</span>
              </a>
            </li>
            <li>
              <a href={a}>
                <img src="uploads/hots_5.jpg" alt="" />
                <span>实在太邪恶！照亮妹纸绝对领域与私处</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="panel new">
          <h3>最新发布</h3>
          <div className="entry">
            <div className="head">
              <span className="sort">会生活</span>
              <a href={a}>星球大战：原力觉醒视频演示 电影票68</a>
            </div>
            <div className="main">
              <p className="info">admin 发表于 2015-06-29</p>
              <p className="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
              <p className="extra">
                <span className="reading">阅读(3406)</span>
                <span className="comment">评论(0)</span>
                <a href={a} className="like">
                  <i className="fa fa-thumbs-up"></i>
                  <span>赞(167)</span>
                </a>
                <a href={a} className="tags">
                  分类：<span>星球大战</span>
                </a>
              </p>
              <a href={a} className="thumb">
                <img src="uploads/hots_2.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="entry">
            <div className="head">
              <span className="sort">会生活</span>
              <a href={a}>星球大战：原力觉醒视频演示 电影票68</a>
            </div>
            <div className="main">
              <p className="info">admin 发表于 2015-06-29</p>
              <p className="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
              <p className="extra">
                <span className="reading">阅读(3406)</span>
                <span className="comment">评论(0)</span>
                <a href={a} className="like">
                  <i className="fa fa-thumbs-up"></i>
                  <span>赞(167)</span>
                </a>
                <a href={a} className="tags">
                  分类：<span>星球大战</span>
                </a>
              </p>
              <a href={a} className="thumb">
                <img src="uploads/hots_2.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="entry">
            <div className="head">
              <span className="sort">会生活</span>
              <a href={a}>星球大战：原力觉醒视频演示 电影票68</a>
            </div>
            <div className="main">
              <p className="info">admin 发表于 2015-06-29</p>
              <p className="brief">星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯</p>
              <p className="extra">
                <span className="reading">阅读(3406)</span>
                <span className="comment">评论(0)</span>
                <a href={a} className="like">
                  <i className="fa fa-thumbs-up"></i>
                  <span>赞(167)</span>
                </a>
                <a href={a} className="tags">
                  分类：<span>星球大战</span>
                </a>
              </p>
              <a href={a} className="thumb">
                <img src="uploads/hots_2.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Content;