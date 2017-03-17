import React, { Component } from 'react';
import { Link } from 'react-router';
import T from 'i18n-react';
import { Table } from 'react-bootstrap';
import BackLink from '../../components/BackLink/BackLink';
import './JobList.css';

class JobList extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    var
      listJobs,
      jobDetail,
      totalJobs;

    // job lists data
    const jobs = [
      {
        'id':                 1,
        'title':              'IOS开发工程师',
        'category':           '设计',
        'place':              '天津'
      },

      {
        'id':                 2,
        'title':              '前端开发工程师',
        'category':           '技术',
        'place':              '天津'
      },

      {
        'id':                 3,
        'title':              'Android中级开发工程师',
        'category':           '技术',
        'place':              '天津'
      },

      {
        'id':                 4,
        'title':              '前端开发工程师',
        'category':           '技术',
        'place':              '天津'
      }
    ];

    listJobs = jobs.map((jobs) => {
      jobDetail = '/recruit/job-lists/' + jobs.id;

      return (
        <tr key={jobs.id}>
          <td>
            <Link to={jobDetail}>{jobs.title}</Link>
          </td>
          <td>{jobs.category}</td>
          <td>{jobs.place}</td>
        </tr>
      );
    });

    totalJobs = (function () {
      return jobs.length;
    }());

    T.setTexts({
      'total-jobs':               '个正在招聘的职位',

      'job': {
        'title':                  '工作名称',
        'category':               '工作类别',
        'place':                  '工作地点'
      }
    });

    return (
      <div className="user-job">
        <BackLink backLink="/recruit" />

        <p className="user-total-jobs">{totalJobs}{T.translate('total-jobs')}</p>

        <Table responsive className="user-job-table">
          <thead>
            <tr>
              <th>{T.translate('job.title')}</th>
              <th>{T.translate('job.category')}</th>
              <th>{T.translate('job.place')}</th>
            </tr>
          </thead>
          <tbody>
            {listJobs}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default JobList;
