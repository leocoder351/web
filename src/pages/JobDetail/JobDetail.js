import React, { Component } from 'react';
import DivideLine from '../../components/DivideLine/DivideLine';
import BackLink from '../../components/BackLink/BackLink';
import './JobDetail.css';

class JobDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobDetail: null
    };
  }

  componentWillMount() {

    var
      jobId,
      setJobDetail;

    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // get the job id
    jobId = this.props.params.id;

    // all job details
    const jobs = [
      {
        'job-id':               1,

        'title':                'IOS开发工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、负责IOS APP业务功能的研发及代码优化工作',
            '2、负责IOS APP内公用控件及部分基础框架的研发工作'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、3年以上IOS相关工作经验',
            '2、有iOS客户端软件开发工作经验，熟悉objective-c开发语言及Xcode或同类开发工具',
            '3、熟悉iOS系列软件程序的发布、安装、性能调测工作',
            '4、熟悉Xml、json等常用数据结构的解析',
            '5、能独立负责iOS开发的主力任务,有AppStore线上作品为佳',
            '6、善于沟通和逻辑表达，有良好的团队合作精神和积极主动的沟通意识',
            '7、了解HTML5相关知识（加分项）'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'zhaopin@163.com'
        }
      },

      {
        'job-id':               2,

        'title':                '前端开发工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、负责网站业务功能的研发及代码优化工作',
            '2、负责jQuery控件及部分基础框架的研发工作'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、3年以上前端相关工作经验',
            '2、有iOS客户端软件开发工作经验，熟悉objective-c开发语言及Xcode或同类开发工具',
            '3、熟悉iOS系列软件程序的发布、安装、性能调测工作',
            '4、熟悉Xml、json等常用数据结构的解析',
            '5、能独立负责iOS开发的主力任务,有AppStore线上作品为佳',
            '6、善于沟通和逻辑表达，有良好的团队合作精神和积极主动的沟通意识',
            '7、了解HTML5相关知识（加分项）'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'zhaopin@163.com'
        }
      },

      {
        'job-id':               3,

        'title':                'IOS开发工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、负责IOS APP业务功能的研发及代码优化工作',
            '2、负责IOS APP内公用控件及部分基础框架的研发工作'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、3年以上IOS相关工作经验',
            '2、有iOS客户端软件开发工作经验，熟悉objective-c开发语言及Xcode或同类开发工具',
            '3、熟悉iOS系列软件程序的发布、安装、性能调测工作',
            '4、熟悉Xml、json等常用数据结构的解析',
            '5、能独立负责iOS开发的主力任务,有AppStore线上作品为佳',
            '6、善于沟通和逻辑表达，有良好的团队合作精神和积极主动的沟通意识',
            '7、了解HTML5相关知识（加分项）'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'zhaopin@163.com'
        }
      },

      {
        'job-id':               4,

        'title':                '前端开发工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、负责网站业务功能的研发及代码优化工作',
            '2、负责jQuery控件及部分基础框架的研发工作'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、3年以上前端相关工作经验',
            '2、有iOS客户端软件开发工作经验，熟悉objective-c开发语言及Xcode或同类开发工具',
            '3、熟悉iOS系列软件程序的发布、安装、性能调测工作',
            '4、熟悉Xml、json等常用数据结构的解析',
            '5、能独立负责iOS开发的主力任务,有AppStore线上作品为佳',
            '6、善于沟通和逻辑表达，有良好的团队合作精神和积极主动的沟通意识',
            '7、了解HTML5相关知识（加分项）'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'zhaopin@163.com'
        }
      }
    ];

    setJobDetail = jobs[Number(jobId) - 1];

    this.setState({
      jobDetail: setJobDetail
    })

  }

  render() {

    const jobDetail = this.state.jobDetail;

    return (
      <div className="user-job-detail">
        <BackLink backLink="/recruit/job-lists" />

        <div className="user-job-detail-content">
          <h3>{jobDetail.title}</h3>

          <section className="user-job-detail-duty">
            <h4>{jobDetail.duty.name}</h4>
            <DivideLine content={jobDetail.duty.content} />
          </section>

          <section className="user-job-detail-requirement">
            <h4>{jobDetail.requirement.name}</h4>
            <DivideLine content={jobDetail.requirement.content} />
          </section>

          <section className="user-job-detail-delivery">
            <h4>{jobDetail.delivery.name}</h4>
            <DivideLine content={jobDetail.delivery.content} />
            <p className="user-job-detail-delivery-email">{jobDetail.delivery.email}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default JobDetail;
