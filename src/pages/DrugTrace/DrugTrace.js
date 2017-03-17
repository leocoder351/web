import React, { Component } from 'react';
import ItemImage from '../../components/ItemImage/ItemImage';
import DrugTrace1 from '../../images/drug_trace_1.jpg';
import DrugTrace2 from '../../images/drug_trace_2.jpg';
import DrugTrace3 from '../../images/drug_trace_3.jpg';
import DrugTrace4 from '../../images/drug_trace_4.png';
import './DrugTrace.css';

class DrugTrace extends Component {

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
          '完全兼容“中国药品电子监管”追溯技术',
          '第三方追溯平台无法兼容 “中国药品电子监管” 追溯技术？',
          '已投入使用的药品电子监管码能上传至知药追溯，继续查询并管理药品信息'
        ]
      },

      'img2': {
        'content': [
          '准确掌握产品购入来源和售出去向',
          '帮助经销商记录或标记购入和售出的产品',
          '协助药厂完善产品追溯体系，实现流向可追，一旦发生产品质量问题，可即时召回'
        ]
      },

      'img3': {
        'content': [
          '国家标准密码算法支持',
          '第三方追溯平台数据不安全？',
          '知药追溯保障用户数据安全性，本产品通过安审和鉴定并获得国家标准密码算法支持'
        ]
      },

      'img4': {
        'content': [
          '专业定制服务',
          '自制追溯的系统成本高，耗时长，太麻烦？',
          '知药追溯提供专业的发码追溯系统，同时可为您提供专业定制服务'
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
        <ItemImage img={DrugTrace1} content={paragraph.img1.content} />
        <ItemImage img={DrugTrace2} content={paragraph.img2.content} />
        <ItemImage img={DrugTrace3} content={paragraph.img3.content} />
        <ItemImage img={DrugTrace4} content={paragraph.img4.content} />
      </div>
    );
  }
}

export default DrugTrace;
