import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import Avatar from '../../images/avatar.jpg'
import './NavigationBar.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    // i18n
    T.setTexts({

    });

    return (
      <nav className="user-nav">

          <div className="ui left fixed inverted vertical menu">
            <img className="ui tiny  image" src={Avatar} width={20} />


              <Link to="/" className="item active">首页</Link>



              <Link to="/articles" className="item">文章</Link>



              <Link to="/works" className="item">作品</Link>



              <Link to="/about-me" className="item">关于我</Link>


            {/* <a className="item active">
              Home
            </a>
            <a className="item">
              Messages
            </a>
            <a className="item">
              Friends
            </a> */}
            <div className="item">

              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="circular search link icon"></i>
              </div>

            </div>
          </div>

          {/* <div className="ui left fixed vertical pointing menu user-link">
            <Link to="/" className="active item">首页</Link>
            <Link to="/articles" className="item">文章</Link>
            <Link to="/works" className="item">作品</Link>
            <Link to="/about-me" className="item">关于我</Link>
          </div> */}
      </nav>
    );
  }
}

export default NavigationBar;
