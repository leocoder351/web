import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic
} from 'semantic-ui-react'
import Avatar from '../../assets/images/others/avatar.jpg';
import Articles from '../../assets/utils/article';
import './Article.css';

class Article extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const items = Articles.items;
    const listItems = items.map((items) =>
      <li>{number}</li>
    );

    console.log(11111);
    console.log(Articles);
  }

  render() {

    T.setTexts({

    });

    const paragraph = <ImageComponent src={Avatar} />

    return (
      <div className="user-article">
        <Segment basic color="violet">
          <Segment className="user-label">
            <Label as='a' color='purple' tag>全部</Label>
            <Label as='a' color='red' tag>Javascript</Label>
            <Label as='a' color='teal' tag>Html</Label>
            <Label as='a' color='purple' tag>网络</Label>
            <Label as='a' color='red' tag>Nginx</Label>
            <Label as='a' color='teal' tag>Docker</Label>
            <Statistic size="tiny" color="pink" className="user-count">
              <Statistic.Value>5,550</Statistic.Value>
              <Statistic.Label>篇</Statistic.Label>
            </Statistic>
          </Segment>

          <Item.Group divided relaxed>
            <Item>
              <Item.Image src={Avatar} />

              <Item.Content verticalAlign="middle">
                <Item.Header>12 Years a Slave</Item.Header>
                <Item.Meta>
                  <span className='cinema'>
                    {new Date().toLocaleString()}
                  </span>
                </Item.Meta>
                <Item.Description>
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                </Item.Description>
                <Item.Extra>
                  <Label>IMAX</Label>
                  <Label icon='globe' content='Additional Languages' />
                  <Button primary className="user-open-btn">
                    Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>

            <Item>
              <Item.Image src={Avatar} />

              <Item.Content>
                <Item.Header>My Neighbor Totoro</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC Cinema</span>
                </Item.Meta>
                <Item.Description>
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                </Item.Description>
                <Item.Extra>
                  <Label>Limited</Label>
                  <Button primary className="user-open-btn">
                    Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>

            <Item>
              <Item.Image src={Avatar} />

              <Item.Content>
                <Item.Header>Watchmen</Item.Header>
                <Item.Meta>
                  <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                  这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客这是一篇博客
                </Item.Description>
                <Item.Extra>
                  <Button primary className="user-open-btn">
                    Buy tickets
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>


        </Segment>


      </div>
    );
  }
}

export default Article;
