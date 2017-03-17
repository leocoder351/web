import React, { Component } from 'react';
import T from 'i18n-react';
import $ from 'jquery';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Logo from '../../images/logo.png';
import './NavigationBar.css';

class NavigationBar extends Component {

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

    // actions
    function onRemoveActive () {
      console.log(1111);
      console.log($('nav .active'));
      $('nav .active').removeClass('active');
    }

    return (
      <div>
        <Navbar collapseOnSelect fixedTop className="user-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                 <img className="user-navbar-logo" width={50} alt="logo" src={Logo}/>
                 <span className="user-navbar-name">{T.translate('company-name')}</span>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem>{T.translate('index-page')}</NavItem>
              </IndexLinkContainer>

              <NavDropdown onClick={onRemoveActive} eventKey={2} title={T.translate('service-items')} id="basic-nav-dropdown">
                <LinkContainer to="/service/drug-trace">
                  <MenuItem>{T.translate('service-items.drug-trace')}</MenuItem>
                </LinkContainer>
                <LinkContainer to="/service/drug-app">
                  <MenuItem>{T.translate('service-items.drug-app')}</MenuItem>
                </LinkContainer>
                <LinkContainer to="/service/palm-pharmacy">
                  <MenuItem>{T.translate('service-items.palm-pharmacy')}</MenuItem>
                </LinkContainer>
                <LinkContainer to="/service/general-practitioner">
                  <MenuItem>{T.translate('service-items.general-practitioner')}</MenuItem>
                </LinkContainer>
                <LinkContainer to="/service/skyline-practitioner">
                  <MenuItem>{T.translate('service-items.skyline-practitioner')}</MenuItem>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/about-us">
                <NavItem>{T.translate('about-us')}</NavItem>
              </LinkContainer>
              <LinkContainer to="/recruit">
                <NavItem>{T.translate('recruit')}</NavItem>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <NavItem>{T.translate('contact-us')}</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}

        <Footer />
      </div>
    );
  }
}

export default NavigationBar;
