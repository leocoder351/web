import React, { Component } from 'react';
import { Link } from 'react-router';
import T from 'i18n-react';
import Logo from '../../images/logo.png';
import './Footer.css';

class Footer extends Component {

  render() {

    T.setTexts({
      'about-us':               '关于我们',
      'contact-us':             '联系我们',
      'links': {
        'title':                '友情链接',

        'doctors':              '道特斯',
        'anwell':               '艾尼维尔'
      },
      'copyright':              '2016 @anywell.com welcome to china thank you very much'
    });

    return (
      <div className="user-footer">
        <section className="user-footer-info">
          <img className="user-footer-logo" src={Logo} width={86} alt="logo" />
          <p>
            <Link to="/about-us" className="user-footer-link">{T.translate('about-us')}</Link>
            <Link to="/contact-us" className="user-footer-link">{T.translate('contact-us')}</Link>
          </p>
          <p><span>{T.translate('links.title')}</span></p>
          <p >
            <a className="user-footer-link" href="http://www.doctorfm.com/" target="view_window">{T.translate('links.doctors')}</a>
            <a className="user-footer-link" href="http://anywell.cc/" target="view_window">{T.translate('links.anwell')}</a>
          </p>
        </section>

        <section className="user-footer-copyright">
          <p>{T.translate('copyright')}</p>
        </section>
      </div>
    );
  }
}

export default Footer;
