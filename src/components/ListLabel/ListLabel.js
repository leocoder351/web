import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import './ListLabel.css';

class ListLabel extends Component {

  render() {
    const listLabels = this.props.labels.map(function (value) {
      return (
        <Label key={value}>{value}</Label>
      )
    })

    return (
      <div>{listLabels}</div>
    )
  }
}

export default ListLabel;
