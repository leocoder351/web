import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../images/banner1.jpg';
import Banner2 from '../../images/banner2.jpg';
import Banner3 from '../../images/banner3.jpg';
import './Swipe.css';

class Swipe extends Component {

  render() {

    return (
      <Carousel interval={4000} className="user-swipe">
        <Carousel.Item>
          <img width="100%" alt="banner1" src={Banner1}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" alt="banner2" src={Banner2}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" alt="banner3" src={Banner3}/>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Swipe;
