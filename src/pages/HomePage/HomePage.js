import React, { Component } from 'react';
import T from 'i18n-react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed } from 'semantic-ui-react'
import './HomePage.css';

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      active:          false
    }
  }

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {

    T.setTexts({

    });

    const { active } = this.state

    return (
      <div>
        <Segment basic>
          <Header as='h3' color="violet">
            <Icon name='plug' />
            <Header.Content>
              Application Content
            </Header.Content>
          </Header>

          <Segment color="violet">
            <p>
              你好是大家都爱神的箭卡拉斯科了按时
            </p>
            <p>
              持续健康从细节考虑参加昆仑雪菊看来下次考虑尽快了重新
            </p>
            <p>
              你好是大家都爱神的箭卡拉斯科了按时
            </p>
            <p>
              持续健康从细节考虑参加昆仑雪菊看来下次考虑尽快了重新
            </p>
            <p>
              你好是大家都爱神的箭卡拉斯科了按时
            </p>
            <p>
              持续健康从细节考虑参加昆仑雪菊看来下次考虑尽快了重新
            </p>
            <p>
              你好是大家都爱神的箭卡拉斯科了按时
            </p>
            <p>
              持续健康从细节考虑参加昆仑雪菊看来下次考虑尽快了重新
            </p>
            <p>
              你好是大家都爱神的箭卡拉斯科了按时
            </p>
            <p>
              持续健康从细节考虑参加昆仑雪菊看来下次考虑尽快了重新
            </p>
            <p>
              你好是大家都爱神的箭卡拉斯科了按时
            </p>
            <p>
              持续健康从细节考虑参加昆仑雪菊看来下次考虑尽快了重新
            </p>


          </Segment>


        </Segment>

        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>

        <Dimmer active={active} inverted>
          <Loader size="huge" >Loading</Loader>
        </Dimmer>
      </div>
    );
  }
}

export default HomePage;
