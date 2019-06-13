import React from 'react';
import ReactSwipe from 'react-swipe';
import './swipe.css';
let a =123;
const Swipe = () => {
  let reactSwipeEl;

  return (
    <div className="swipe">
      <ReactSwipe
        className="carousel swipe-wrapper"
        swipeOptions={{ 
          continuous: true,
          auto:2000,
          speed:1000
         }}
        ref={el => (reactSwipeEl = el)}
      >
          <div>
              <a href={a}>
                <img alt="图片" src="uploads/slide_1.jpg" />
                <span>1</span>
              </a>
            </div>
            <div>
              <a href={a}>
                <img alt="图片" src="uploads/slide_2.jpg" />
                <span>2</span>
              </a>
            </div>
            <div>
              <a href={a}>
                <img alt="图片" src="uploads/slide_1.jpg" />
                <span>3</span>
              </a>
            </div>
            <div>
              <a href={a}>
                <img alt="图片" src="uploads/slide_2.jpg" />
                <span>XIU主题演示</span>
              </a>
            </div>
      </ReactSwipe>
      <span className="arrow prev" onClick={() => reactSwipeEl.next()}>
        <i className="fa fa-chevron-left"></i>
      </span>
      <span className="arrow next" onClick={() => reactSwipeEl.prev()}>
        <i className="fa fa-chevron-right"></i>
      </span>
    </div>
  );
};


export default Swipe;