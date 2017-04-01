import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic
} from 'semantic-ui-react';
import { ArticleItems } from '../../assets/utils/articleItems';
import ListLabel from '../../components/ListLabel/ListLabel';
import './ArticleItem.css';

class ArticleItem extends Component {

  constructor() {
    super();

    this.state = {
      listItems:                    null,
      activeItem:                   '1'
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

          <Item.Content verticalAlign="middle">
            <Item.Header as='a'>{title}</Item.Header>

            <Item.Meta>
              <span className='cinema'>{date}</span>
            </Item.Meta>

            <Item.Description>{summary}</Item.Description>

            <Item.Extra>
              <ListLabel labels={keywords} />
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    });

    this.setState({
      listItems:              listItems
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    T.setTexts({

    });

    const { listItems, activeItem } = this.state;

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
            {listItems}

            <Item>
              <Item.Content verticalAlign="middle">
                <Item.Extra>
                  <Menu pagination floated="right">
                    <Menu.Item name="fp" active={activeItem === 'fp'} onClick={this.handleItemClick}>首页</Menu.Item>
                    <Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick} />
                    <Menu.Item disabled>...</Menu.Item>
                    <Menu.Item name='10' active={activeItem === '10'} onClick={this.handleItemClick} />
                    <Menu.Item name='11' active={activeItem === '11'} onClick={this.handleItemClick} />
                    <Menu.Item name='12' active={activeItem === '12'} onClick={this.handleItemClick} />
                    <Menu.Item name="lp" active={activeItem === 'lp'} onClick={this.handleItemClick}>末页</Menu.Item>
                  </Menu>
                </Item.Extra>
              </Item.Content>
            </Item>

          </Item.Group>


        </Segment>
      </div>
    );
  }
}

export default ArticleItem;
