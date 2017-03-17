import React, { Component } from 'react';
import GeneralPrac1 from '../../images/general_prac_1.jpg';
import GeneralPrac2 from '../../images/general_prac_2.png';
import GeneralPrac3 from '../../images/general_prac_3.png';
import GeneralPrac4 from '../../images/general_prac_4.png';
import GeneralPrac5 from '../../images/general_prac_5.png';
import './GeneralPrac.css';

class GeneralPrac extends Component {

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
        <h1>社区医生</h1>
      </div>
    );
  }
}

export default GeneralPrac;
