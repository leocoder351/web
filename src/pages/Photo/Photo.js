import React, { Component } from 'react';
import T from 'i18n-react';
import './Photo.css';

class Photo extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    T.setTexts({

    });

    return (
      <div>
        <h1>相册</h1>
      </div>
    );
  }
}

export default Photo;
