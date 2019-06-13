import React from 'react';
import Hots from '../common/hots.jsx';
import { Link } from "react-router-dom"

function Detail() {
    return (
        <div class="content">
            <div class="article">
                <div class="breadcrumb">
                    <dl>
                        <dt>当前位置：</dt>
                        <dd>
                            <Link to="/">
                                奇趣事
                            </Link>
                        </dd>
                        <dd>变废为宝！将手机旧电池变为充电宝的Better RE移动电源</dd>
                    </dl>
                </div>
                <h2 class="title">
                    <Link to="/">
                        又现酒窝夹笔盖新技能 城里人是不让人活了！
                    </Link>
                </h2>
                <div class="meta">
                    <span>DUX主题小秘 发布于 2015-06-29</span>
                    <span>分类:
                        <Link to="/">
                            奇趣事
                        </Link>
                    </span>
                    <span>阅读: (2421)</span>
                    <span>评论: (143)</span>
                </div>
            </div>
            {/* 热点推荐 */}
            <Hots></Hots>
        </div>
    )
}
export default Detail;