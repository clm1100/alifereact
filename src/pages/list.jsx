import React,{Component} from 'react';
import {Link} from 'react-router-dom'
let a = 123;
class List extends Component{
    constructor(props){
        super(props);
        
        this.state ={
            t:200
        }
    }
    componentWillMount(a,b){
    }
    render(){
        return (
            <div className="content">
                <div className="panel new">
                    <h3>{this.state.t}11111</h3>
                    <div className="entry">
                        <div className="head">
                            <span className="sort">会生活</span>
                            <Link to="/detail/category/12">
                                星球大战：原力觉醒视频演示 电影票68
                            </Link>
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
export default List;