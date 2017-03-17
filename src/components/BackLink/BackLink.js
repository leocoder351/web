import React, { Component } from 'react';
import { Link } from 'react-router';
import T from 'i18n-react';
import './BackLink.css';

class BackLink extends Component {

  render() {

    T.setTexts({
      'back':               '返回'
    });

    return (
      <div className="user-back-link">
        <Link to={this.props.backLink}>&lt; {T.translate('back')}</Link>
      </div>
    );
  }
}

export default BackLink;
