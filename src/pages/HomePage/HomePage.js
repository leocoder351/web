import React, { Component } from 'react';
import T from 'i18n-react';
import Swipe from '../../components/Swipe/Swipe';
import ItemList from '../../components/ItemList/ItemList';
import './HomePage.css';

class HomePage extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    T.setTexts({
      'company-name':                   '迈帝法马扫一扫',

      'index':                          '首页',

      'service': {
        'title':                        '服务项目',

        // items
        'drug-trace':                   '知药追溯',
        'drug-app':                     '知药APP',
        'palm-pharmacy':                '掌上药店'
      },

      'about-us':                       '关于我们',
      'recruit':                        '招贤纳士',

      'contact-us':                     '联系我们',
      'telphone':                       '022-87520123'
    });

    return (
      <div>
        <Swipe />
        <ItemList />
      </div>
    );
  }
}

export default HomePage;
