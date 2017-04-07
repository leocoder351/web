import React, { Component } from 'react';
import { Link } from 'react-router';
import Lightbox from 'react-images';
import T from 'i18n-react';
import {
  Sidebar, Segment, Button, Menu, Image, Icon, Header, Loader, Dimmer, Embed,
  Label, Breadcrumb, Item, Image as ImageComponent, Rail, Statistic, Card, Modal
} from 'semantic-ui-react';
import CovArt from '../../assets/images/photos/articleItem/cover_article.jpg';
import ArticlePhotos from '../../assets/utils/photoImport/article';
import CityPhotos from '../../assets/utils/photoImport/city';
import MounPhotos from '../../assets/utils/photoImport/mountain';
import './PhotoType.css';

class PhotoType extends Component {

  constructor() {
    super();

    this.checkClientWidth = this.checkClientWidth.bind(this);
    this.show = this.show.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoImage = this.gotoImage.bind(this);

    this.state = {
      images:                 [],
      itemsPerRow:            4,
      open:                   false,
      lightboxIsOpen:         false,
      currentImage:           0,
    }
  }

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.checkClientWidth();

    window.onresize = this.checkClientWidth;

    const category = this.props.params.category.toLowerCase();

    if (category.match(/article/)) {
      this.setState({
        images:               ArticlePhotos
      })

    } else if (category.match(/city/)) {
      this.setState({
        images:               CityPhotos
      })

    } else if (category.match(/mountain/)) {
      this.setState({
        images:               MounPhotos
      })

    } else {

    }

  }

  checkClientWidth() {
    const clientWidth = window.document.body.clientWidth;

    if (clientWidth < 600) {
      this.setState({
        itemsPerRow:                  1
      });
    } else if (clientWidth < 800) {
      this.setState({
        itemsPerRow:                  2
      });
    } else if (clientWidth < 1200) {
      this.setState({
        itemsPerRow:                  3
      });
    } else {
      this.setState({
        itemsPerRow:                  4
      });
    }
  }

  show(e, {name}) {
    this.setState({
      currentImage: name,
      lightboxIsOpen: true,
    });

  }

  closeLightbox() {
    this.setState({
			currentImage:            0,
			lightboxIsOpen:          false,
		});
  }

  gotoPrevious() {
    this.setState({
			currentImage: this.state.currentImage - 1,
		});
  }

  gotoNext() {
    this.setState({
			currentImage: this.state.currentImage + 1,
		});
  }

  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  render() {

    T.setTexts({

    });

    const { images, itemsPerRow, open, lightboxIsOpen, currentImage } = this.state;
    const _this = this;
    const ImageCard = images.map(function (value, index) {
      return (
        <Card color='purple' as='a' image={value.src} key={index} name={index} onClick={_this.show} />
      )
    })

    return (
      <Segment basic color="violet" className="user-photo-type">
        <Segment>
          <Link to='/photos'>
            <Button inverted color='blue'>返回</Button>
          </Link>
          <Link to='/'>
            <Button inverted color='violet'>首页</Button>
          </Link>
        </Segment>

        <Card.Group itemsPerRow={itemsPerRow}>
          {ImageCard}
        </Card.Group>

        <Lightbox
          images={images}
          isOpen={lightboxIsOpen}
          showThumbnails={true}
          currentImage={currentImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </Segment>
    );
  }
}

export default PhotoType;
