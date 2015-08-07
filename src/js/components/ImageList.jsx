import React from 'react';
import Image from './Image.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';

export default React.createClass({
  getDefaultProps() {
    return {
      images: []
    };
  },

  render() {
    let {images} = this.props;

    if (images.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {images.map((image, idx) =>
            <Image image={image} key={idx}  />
          )}
        </ListGroup>
      </form>
    );
  }
});
