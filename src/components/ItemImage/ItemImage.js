import React, { Component } from 'react';
import DivideLine from '../DivideLine/DivideLine';
import './ItemImage.css';

class ItemImage extends Component {

  render() {
    const img = this.props.img;
    const content = this.props.content;

    return (
      <div className="item-img">
        <section>
          <DivideLine content={content} />
        </section>
        <img width="100%" alt="drug-trace-1" src={img}/>
      </div>
    );
  }
}

export default ItemImage;
