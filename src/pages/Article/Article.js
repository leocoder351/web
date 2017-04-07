import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import T from 'i18n-react';
import { Link } from 'react-router';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic
} from 'semantic-ui-react';
import { ArticleItems } from '../../assets/utils/articleItems';
import ArticleCollec from '../../assets/utils/articleCollection';
import './Article.css';



class Article extends Component {

  constructor() {
    super();

    const location = window.location.href.split('articles/')[1].split('/').join('-')

    this.state = {
      listItems:                    null,
      location:                     location,
      article:                      ''
    }
  }

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const { location } = this.state;

    for (var key in ArticleCollec) {

      if (location == key) {
        this.setState({
          article:            ArticleCollec[key]
        })

      } else {

      }
    }
  }

  render() {

    T.setTexts({

    });

    const { article } = this.state;

    return (
      <Segment basic color="violet">
        <Segment>
          <Button inverted color='blue'>
            <Link to='/articles'>返回</Link>
          </Button>
          <Button inverted color='violet'>
            <Link to='/'>首页</Link>
          </Button>
        </Segment>

        <Segment basic>
          <ReactMarkdown source={article} />
        </Segment>

      </Segment>
    );
  }
}

export default Article;
