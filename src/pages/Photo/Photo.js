import React, { Component } from 'react';
import T from 'i18n-react';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic
} from 'semantic-ui-react';
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
      <div className="user-photo">
        <Segment basic color="violet">
          <h1>相册</h1>
        </Segment>

      </div>
    );
  }
}

export default Photo;
