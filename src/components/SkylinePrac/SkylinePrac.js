import React, { Component } from 'react';
import ItemImage from '../ItemImage/ItemImage';
import PalmPhar1 from '../../images/palm_phar_1.jpg';
import PalmPhar2 from '../../images/palm_phar_2.jpg';
import PalmPhar3 from '../../images/palm_phar_3.png';
import './SkylinePrac.css';

class SkylinePrac extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paragraph: null
    };
  }

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const paragraph = {
      'img1': {
        'content': [
          '线上药店定制专家，打造属于您的专属药店'
        ]
      },

      'img2': {
        'content': [
          '渠道不单单是线下，线上资源更加广阔'
        ]
      },

      'img3': {
        'content': [
          '最专业的为连锁药店提供移动端战略解决方案'
        ]
      }
    }

    this.setState({
      paragraph: paragraph
    })
  }

  render() {
    const paragraph = this.state.paragraph;

    return (
      <div>
        <h1>天涯医生</h1>
      </div>
    );
  }
}

export default SkylinePrac;
