import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ImageList from './ImageList.jsx';
import ActionCreator from '../actions/TodoActionCreators';

export default React.createClass({
  //propTypes: {
    //tasks: PropTypes.array.isRequired,
    //onAddTask: PropTypes.func.isRequired,
    //onClear: PropTypes.func.isRequired
  //},

  getDefaultProps() {
    return {
      images: []
    }
  },

  render() {
    let {onAddTask, onClear, images} = this.props;
    return (
      <div className="container">
        <Jumbotron>
          <h1>Poll Everywhere</h1>

        </Jumbotron>
				<input type="search" placeholder="type search" onBlur={this.searchImage} />
        <ImageList images={images} />
      </div>
    );
  },

        //<Button onClick={onAddTask} bsStyle="primary">Add New</Button>
        //<Button onClick={onClear} bsStyle="danger">Clear List</Button>

	searchImage(e) {
			console.log(e);
			ActionCreator.fetchImages(e.target.value);

	}
});
