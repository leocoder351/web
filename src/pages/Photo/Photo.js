import React, { Component } from 'react';
import { Link } from 'react-router';
import T from 'i18n-react';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic, Card
} from 'semantic-ui-react';
import CovArt from '../../assets/images/photos/articleItem/cover_article.jpg';
import CovCity from '../../assets/images/photos/city/cover_city.jpg';
import CovMoun from '../../assets/images/photos/mountain/cover_mountain.jpg';
import './Photo.css';

class Photo extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    T.setTexts({

    });

    return (
      <Segment basic color="violet" className="user-photo">
        <Segment>
          <Link to='/'>
            <Button inverted color='violet'>首页</Button>
          </Link>
        </Segment>

        <Card.Group className="user-photo-item">
          <Card color='orange' as='a' >
            <Link to="/photos/article">
              <Image src={CovArt} />
            </Link>
            <Card.Content>
              <Card.Header>文章配图</Card.Header>
              <br />
              <Card.Meta>创建于2017-04-03</Card.Meta>
              <Card.Description>一张美图，一篇好文。</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='image' />
              共 3 张
            </Card.Content>
          </Card>

          <Card color='red' as='a'>
            <Link to="/photos/city">
              <Image src={CovCity} />
            </Link>
            <Card.Content>
              <Card.Header>城市</Card.Header>
              <br />
              <Card.Meta>创建于2017-04-02</Card.Meta>
              <Card.Description>一个城，一幅景。</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='image' />
              共 7 张
            </Card.Content>
          </Card>

          <Card color='yellow' as='a'>
            <Link to="/photos/mountain">
              <Image src={CovMoun} />
            </Link>
            <Card.Content>
              <Card.Header>山峰</Card.Header>
              <br />
              <Card.Meta>创建于2017-04-02</Card.Meta>
              <Card.Description>一座高山，一曲南山南。</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='image' />
              共 6 张
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    );
  }
}

export default Photo;
