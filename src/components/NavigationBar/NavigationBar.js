import React, { Component } from 'react';
import T from 'i18n-react';
import $ from 'jquery';
import { Link } from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Popup } from 'semantic-ui-react'
import Avatar from '../../images/avatar.jpg';
import Signature from '../../images/signature_white.png';
import './NavigationBar.css';

class NavigationBar extends Component {

  constructor() {
    super();

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.checkClientWidth = this.checkClientWidth.bind(this);

    this.state = {
      visible:                    true,
      activeItem:                 null,
      direction:                  'left'
    }
  }

  componentWillMount() {
    this.checkClientWidth();

    window.onresize = this.checkClientWidth;
  }

  checkClientWidth() {
    const clientWidth = window.document.body.clientWidth;

    if (clientWidth < 800) {
      this.setState({
        direction:                  'top',
        visible:                    false
      });
    } else {
      this.setState({
        direction:                  'left',
        visible:                    true
      });
    }
  }

  toggleVisibility() {

    this.setState({
      visible:                    !this.state.visible
    });
  }

  handleItemClick(e, {name}) {

    this.setState({
      activeItem:                 name
    });

    this.checkClientWidth();
  }

  render() {
    const { visible, activeItem, direction } = this.state;

    return (
      <div className="user-nav">

        <div className="user-info">
          <Segment basic>
            <Popup
              position="right center"
              trigger={<img className="user-avatar" src={Avatar} width={80} onClick={this.toggleVisibility} />}
              content="点我试试"
            />
          </Segment>
        </div>

        <Sidebar.Pushable as={Segment} className="user-content">
          <Sidebar className="user-links" as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted direction={direction}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Link to="/" className="item">
                <Icon name="home" />
                首页
              </Link>
            </Menu.Item>

            <Menu.Item name='articles' active={activeItem === 'articles'} onClick={this.handleItemClick}>
              <Link to="/articles" className="item">
                <Icon name="write" />
                文章
              </Link>
            </Menu.Item>

            <Menu.Item name='works' active={activeItem === 'works'} onClick={this.handleItemClick}>
              <Link to="/works" className="item">
                <Icon name="address book" />
                作品
              </Link>
            </Menu.Item>

            <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick}>
              <Link to="/photos" className="item">
                <Icon name="image" />
                相册
              </Link>
            </Menu.Item>

            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
              <Link to="/about" className="item">
                <Icon name="user" />
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
