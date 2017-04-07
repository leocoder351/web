import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic, Card, Modal
} from 'semantic-ui-react';
import './About.css';

class About extends Component {

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
          <Button inverted color='violet'>
            <Link to='/'>首页</Link>
          </Button>
        </Segment>

        <Segment basic>
          <h1>关于我</h1>
        </Segment>
      </Segment>
    );
  }
}

export default About;
