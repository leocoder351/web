import React, { Component } from 'react';
import T from 'i18n-react';
import Address from '../../images/contact_address.png';
import Email from '../../images/contact_email.png';
import Phone from '../../images/contact_phone.png';
import Qq from '../../images/contact_qq.png';
import './ContactUs.css';

class ContactUs extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  componentDidMount() {

    initialize();

    function initialize() {
      var
        map,
        point,
        marker,
        geolocationControl;

      // 创建地图实例
      map = new window.BMap.Map("map");

      // 创建点坐标
      point = new window.BMap.Point(117.205301, 39.145229);
      // 创建标注
      marker = new window.BMap.Marker(point);
      // 创建定位按钮
      geolocationControl = new window.BMap.GeolocationControl();

      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 20);
      // 设置带定位的导航
      map.addControl(new window.BMap.NavigationControl({
        // 靠左上角位置
        anchor: window.BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: window.BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
      }));
      // 显示定位按钮
      map.addControl(geolocationControl);
      // 将红色位置标注添加到地图中
      map.addOverlay(marker);
    }

  }

  render() {

    T.setTexts({
      'label': {
        'phone':                    '联系方式:',
        'qq':                       'QQ:',
        'email':                    'Email:',
        'address':                  '地址:'
      },

      'content': {
        'address':                  '天津市河北区寿安街悦海大厦2栋B座-2704'
      }
    });

    return (
      <div className="user-contact">
        <div id="map"></div>
        <div className="user-contact-info">
          <section>
            <img alt="phone" src={Phone} />
            <span>{T.translate('label.phone')}</span>
            <p>022-26116727</p>
          </section>
          <section>
            <img alt="qq" src={Qq} />
            <span>{T.translate('label.qq')}</span>
            <p>3431964052</p>
          </section>
          <section>
            <img alt="email" src={Email} />
            <span>{T.translate('label.email')}</span>
            <p>022-mdfmscan@163.com</p>
          </section>
          <section>
            <img alt="address" src={Address} />
            <span>{T.translate('label.address')}</span>
            <p>{T.translate('content.address')}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default ContactUs;
