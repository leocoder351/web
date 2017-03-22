import React, { Component } from 'react';
import T from 'i18n-react';
import $ from 'jquery';
import { Link } from 'react-router';
import Avatar from '../../images/avatar.jpg';
import Signature from '../../images/signature_white.png';
import './NavigationBar.css';

class NavigationBar extends Component {

  constructor(props) {
    super(props);

    this.onLinkClicked = this.onLinkClicked.bind(this);

    this.state = {
      navNode:    null
    };

    console.log(document.body.clientWidth);
  }

  onLinkClicked(e) {
    $('.user-links a').removeClass('active');
    $(e.target).addClass('active');
  }

  chooseNav(clientWidth) {
    var navNode;

    if (clientWidth <= 800) {

      navNode = (
        <nav className="user-nav">

            <div className="ui inverted fixed main menu">
              <div className="ui container">
                <a className="lanuch icon item">
                  <i className="content icon"></i>
                </a>

                <div className="item">
                  L e o
                </div>

                <a href="https://github.com/semantic-org/semantic-ui/" target="_blank" className="item label right">
                  <i className="github large icon"></i>
                  star
                </a>



              </div>
            </div>


        </nav>
      );
    } else {

      navNode = (
        <nav className="user-nav">

          <div className="ui inverted vertical left fixed pointing menu">

            <div className="user-info">
              <img className="user-avatar" src={Avatar} width={80} />
              <img className="user-signature" src={Signature} width={70} />
            </div>

            <div className="user-links" onClick={this.onLinkClicked}>
              <Link to="/" className="item active">首页</Link>
              <Link to="/articles" className="item">文章</Link>
              <Link to="/works" className="item">作品</Link>
              <Link to="/about-me" className="item">关于我</Link>
            </div>

            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="circular search link icon"></i>
              </div>
            </div>

            <div className="user-external-links ">
              <div className="item right">
                <a href="https://github.com/leocoder351/web/" target="_blank" className="icon right">
                  <i className="github large icon"></i>
                </a>
                <a href="https://github.com/leocoder351/web/" target="_blank" className="icon right">
                  <i className="github large icon"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
    }

    return navNode;
  }

  componentWillMount() {
    var
      clientWidth,
      navNode;

    clientWidth = document.body.clientWidth;
    navNode = this.chooseNav(clientWidth);

    this.setState({
      navNode:            navNode
    });

    window.onresize = function(){
      clientWidth = document.body.clientWidth;
      navNode = this.chooseNav(clientWidth);

      this.setState({
        navNode:            navNode
      });

      console.log(11111);
      console.log(clientWidth);
    }.bind(this);
  }

  render() {
    var
      clientWidth,
      navNode;

    // i18n
    T.setTexts({

    });

    // clientWidth = document.body.clientWidth;
    // navNode = this.chooseNav(clientWidth);
    //
    // this.setState({
    //   navNode:            navNode
    // });
    //
    //
    // window.onresize = function(){
    //   clientWidth = document.body.clientWidth;
    //   navNode = this.chooseNav(clientWidth);
    //
    //   this.setState({
    //     navNode:            navNode
    //   });
    //
    //   console.log(11111);
    //   console.log(clientWidth);
    // }

    return this.state.navNode;


    // if (clientWidth <= 800) {
    //
    //   return (
    //     <div>
    //
    //     </div>
    //   )
    // } else {
    //
    //   return (
    //     <nav className="user-nav">
    //
    //       <div className="ui inverted vertical left fixed pointing menu">
    //
    //         <div className="user-info">
    //           <img className="user-avatar" src={Avatar} width={80} />
    //           <img className="user-signature" src={Signature} width={70} />
    //         </div>
    //
    //         <div className="user-links" onClick={this.onLinkClicked}>
    //           <Link to="/" className="item active">首页</Link>
    //           <Link to="/articles" className="item">文章</Link>
    //           <Link to="/works" className="item">作品</Link>
    //           <Link to="/about-me" className="item">关于我</Link>
    //         </div>
    //
    //         <div className="item">
    //           <div className="ui icon input">
    //             <input type="text" placeholder="Search..." />
    //             <i className="circular search link icon"></i>
    //           </div>
    //         </div>
    //
    //       </div>
    //     </nav>
    //   )
    // }
  }
}

export default NavigationBar;
