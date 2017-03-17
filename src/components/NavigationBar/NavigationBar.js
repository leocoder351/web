import React, { Component } from 'react';
import T from 'i18n-react';
import $ from 'jquery';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import './NavigationBar.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem:           'home'
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, name) {
    this.setState({
      activeItem:       name
    })
  }

  render() {

    // i18n
    T.setTexts({
      'company-name':                   '迈帝法马扫一扫',

      'index-page':                     '首页',

      'service-items': {
        'title':                        '服务项目',

        // items
        'drug-trace':                   '知药追溯',
        'drug-app':                     '知药APP',
        'palm-pharmacy':                '掌上药店',
        'general-practitioner':         '社区医生',
        'skyline-practitioner':         '天涯医生'
      },

      'about-us':                       '关于我们',
      'recruit':                        '招贤纳士',

      'contact-us':                     '联系我们',
    });

    return (
      <Menu vertical>
        <Menu.Item name='profile' as={Link} to='profile'>
          profile
        </Menu.Item>
        <Menu.Item name='user' as={Link} to='user'>
          user
        </Menu.Item>
        <Menu.Item name='contact' as={Link} to='contact'>
          contact
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavigationBar;
