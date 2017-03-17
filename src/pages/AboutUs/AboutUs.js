import React, { Component } from 'react';
import T from 'i18n-react';
import AboutUsImg from '../../images/about_us_img.jpg';
import './AboutUs.css';

class AboutUs extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    T.setTexts({
      'into': {
        'line1': '迈帝法马扫一扫（天津）网络技术有限公司（以下简称“迈帝法马扫一扫”），创建' +
                 '于2015年，注册资金为700万元人民币。',
        'line2': '我司致力于通过互联网服务来推动医疗行业的发展与变革，以技术为中心提供满足' +
                 '医疗行业的智慧发展与管理的解决方案、产品和服务。',
        'line3': '迈帝法马扫一扫拥有一支由优秀、资深的IT专家组成的技术团队，他们在产品开发、' +
                 '推广和维护方面默契合作，本着”以客户为中心“的宗旨，获得客户广泛的信任和支持。'
      }

    });

    return (
      <div className="user-about">
        <img src={AboutUsImg} width="100%" alt="about-us" />
        <section className="user-about-into">
          <p>{T.translate('into.line1')}</p>
          <p>{T.translate('into.line2')}</p>
          <p>{T.translate('into.line3')}</p>
        </section>
      </div>
    );
  }
}

export default AboutUs;
