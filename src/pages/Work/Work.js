import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic, Card, Modal
} from 'semantic-ui-react';
import './Work.css';

class Work extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    T.setTexts({

    });

    return (
      <Segment basic color="violet" className="user-photo-type">
        <Segment>
          <Link to='/'>
            <Button inverted color='violet'>首页</Button>
          </Link>
        </Segment>

        <Segment basic>
          <h1>作品</h1>
        </Segment>
      </Segment>
    );
  }
}

export default Work;
