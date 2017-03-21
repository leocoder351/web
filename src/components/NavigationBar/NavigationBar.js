import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import Avatar from '../../images/avatar.jpg';
import Signature from '../../images/signature_black.png';
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
        {/* <section className="user-personal">
          <img className="user-avatar" src={Avatar} width={80} />
          <img className="user-signature" src={Signature} width={80} />
        </section>

        <section className="user-search">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="circular search link icon"></i>
          </div>
        </section> */}

          <div className="ui inverted vertical left fixed pointing menu">
            <Link to="/" className="item active">
              首页
            </Link>
            <Link to="/articles" className="item">
              文章
            </Link>
            <Link to="/works" className="item">
              作品
            </Link>
            <Link to="/about-me" className="item">
              关于我
            </Link>
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="circular search link icon"></i>
              </div>
            </div>
          </div>
      </nav>
    );
  }
}

export default NavigationBar;
