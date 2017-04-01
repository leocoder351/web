import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic
} from 'semantic-ui-react';
import { ArticleItems } from '../../assets/utils/articleItems';
import ListLabel from '../../components/ListLabel/ListLabel';
import './Article.css';

class Article extends Component {

  constructor() {
    super();

    this.state = {
      listItems:                    null
    }
  }

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const listItems = ArticleItems.map(function (value, index) {

      const { id, title, date, summary, image, keywords } = value;

      return (
        <Item key={id}>
          <Item.Image src={image} />

          <Item.Content verticalAlign="bottom">
            <Item.Header>{title}</Item.Header>

            <Item.Meta>
              <span className='cinema'>{date}</span>
            </Item.Meta>

            <Item.Description>{summary}</Item.Description>

            <Item.Extra>
              <ListLabel labels={keywords} />
              <Button inverted color="green" className="user-open-btn">
                查看详情
                <Icon name='right chevron' />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    });

    this.setState({
      listItems:              listItems
    });
  }

  render() {

    T.setTexts({

    });

    const { listItems } = this.state;

    const input = `
      # This is a 1 level header\n
      ## This is a 4 level header\n
      我在马路边捡到第三空间健康的方式即可四大皆空加快速度附近可适当健康的说法讲课费加快速
      cxvvkmxdsfodsfi独守空房考虑速度快吉林省的科技
    `

    // const input = [
    //   '# This is a 1 level header\n',
    //   '## This is a 4 level header\n',
    //   '我在马路边捡到第三空间健康的方式即可四大皆空加快速度附近可适当健康的说法讲课费加快速',
    //   'cxvvkmxdsfodsfi独守空房考虑速度快吉林省的科技'
    // ].join('');

    return (
      <div>
        <Segment basic color="violet">
          <ReactMarkdown source={input} />
        </Segment>

      </div>
    );
  }
}

export default Article;
