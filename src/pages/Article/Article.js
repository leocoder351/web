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

    // console.log(this.props.params.date + this.props.params.name);
    console.log(ArticleCollec);
    // console.log(article);

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
      console.log(this.state.location);

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

    console.log(1111111);
    console.log(article)

    return (
      <div>
        <Segment basic color="violet">
          <ReactMarkdown source={article} />
        </Segment>

      </div>
    );
  }
}

export default Article;
