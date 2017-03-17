import React, { Component } from 'react';
import './DivideLine.css';

class DivideLine extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listContent: null
    }
  }

  componentWillMount() {
    var setListContent;
    const content = this.props.content;

    if (content instanceof Array) {

      setListContent = content.map((content) => {
        return (
          <p key={content}>{content}</p>
        )
      });

      this.setState({
        listContent: setListContent
      });

    } else {

      setListContent = <p>{content}</p>;

      this.setState({
        listContent: setListContent
      });

    }
  }

  render() {

    return (
      <div>
        {this.state.listContent}
      </div>
    );
  }
}

export default DivideLine;
