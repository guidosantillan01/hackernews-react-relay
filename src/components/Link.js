import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Link extends Component {
  render() {
    const { description, url } = this.props.link;

    return (
      <div>
        <div>
          {description} {url}
        </div>
      </div>
    );
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  };
}

export default createFragmentContainer(
  Link,
  graphql`
    fragment Link_link on Link {
      id
      description
      url
    }
  `
);
