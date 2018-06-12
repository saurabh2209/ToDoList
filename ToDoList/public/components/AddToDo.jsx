
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actions';
import PropTypes from 'prop-types';

class AddToDo extends React.Component {
 constructor() {
  super()
  this.onAddItem = this.onAddItem.bind(this);
 }

 onAddItem() {
  const item = this.item.value;
  this.item.value = '';
  // Create tasks only with title
  if(item) {
    this.props.addItem(item);
  }
}

render() {
    return (
     <div>
       <input type="text" ref={(input) => {this.item = input}} placeholder="Add Item"/>
       <button className="button expanded" onClick={() => { this.onAddItem(); }}>Add Task</button>
     </div>
    )
 }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => {dispatch(addTodo(item))}
  }
}

AddToDo.propTypes = {
  addItem: PropTypes.func,
}

export default connect(null,mapDispatchToProps)(AddToDo);
