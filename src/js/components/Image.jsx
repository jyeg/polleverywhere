import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  getDefaultProps() {
    return {
      image: {
        title: '',
        completed: false
      }
    };
  },

  //handleToggle(task) {
  //  if (this.refs.checkbox.getChecked()) {
  //    ActionCreator.completeTask(task);
  //  }
  //},

  render() {
    let {image} = this.props;
    return (
      <ListGroupItem>
        <img src="{image.url}"/>
      </ListGroupItem>
    );
  }
});
