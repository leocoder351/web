import React, { Component } from 'react';
import { Link } from 'react-router';
import T from 'i18n-react';
import RecruitBk from '../../images/recruit_bk.jpg';
import './Recruit.css';

class Recruit extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    T.setTexts({
      'show-all-jobs':                   '查看所有职位',

    });

    return (
      <div className="user-recruit">
        <img src={RecruitBk} width="100%" alt="about-us" />
        <Link to="/recruit/job-lists" className="user-footer-link">{T.translate('show-all-jobs')}</Link>
        {/* <a>查看所有职位 ></a> */}
      </div>
    );
  }
}

export default Recruit;
