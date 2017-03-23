import React, { Component } from 'react';
import T from 'i18n-react';
import $ from 'jquery';
import { Link } from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer } from 'semantic-ui-react'
import Avatar from '../../images/avatar.jpg';
import Signature from '../../images/signature_white.png';
import './NavigationBar.css';

class NavigationBar extends Component {

  constructor() {
    super();

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = {
      visible:                    true,
      activeItem:                 null
    }
  }

  toggleVisibility() {

    this.setState({
      visible:                    !this.state.visible
    })
  }

  handleItemClick(e, {name}) {

    this.setState({
      activeItem:                 name
    })
  }

  render() {
    const { visible, active, activeItem } = this.state;
    return (
      <div className="user-nav">

        <div className="user-info">
          <img className="user-avatar" src={Avatar} width={80} onClick={this.toggleVisibility} />
        </div>

        <Sidebar.Pushable as={Segment} className="user-content">
          <Sidebar className="user-links" as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Link to="/" className="item">
                <Icon name='home' />
                首页
              </Link>
            </Menu.Item>

            <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>
              <Link to="/articles" className="item">
                <Icon name='home' />
                文章
              </Link>
            </Menu.Item>

            <Menu.Item name='works' active={activeItem === 'works'} onClick={this.handleItemClick}>
              <Link to="/works" className="item">
                <Icon name='home' />
                作品
              </Link>
            </Menu.Item>

            <Menu.Item name='about-me' active={activeItem === 'about-me'} onClick={this.handleItemClick}>
              <Link to="/about-me" className="item">
                <Icon name='home' />
                关于我
              </Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default NavigationBar;
