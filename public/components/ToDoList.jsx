
import React from 'react';
import { removeTodo, showCompleted } from 'actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ToDoList extends React.Component {

render() {
  const items = this.props.todos.map((item, index) => {
   return (
     <div  key={index}>
       <div className={item.completed ? 'complete' : 'pending'}>
        <div style={item.completed ? {textDecoration: 'line-through'}: {}} className='items'>
        <span>{item.title}</span>
        </div>
        <button
          id={item.id}
          disabled={item.completed || false}
          className='btncolor'
          onClick= {() => {
            this.props.completedItem(item.id);
          }}
        >
          Complete
        </button>
        <button className='close' onClick={() => {this.props.removeItem(item.id)}}> X </button>
       </div>
     </div>
    )
  })

    return (
      <div>
       {this.props.todos.length ? items : ''}
      </div>

    )
 }
}

function mapDispatchToProps(dispatch) {
  return {
   removeItem: (id) => {dispatch(removeTodo(id))},
   completedItem: (id) => {dispatch(showCompleted(id))}
 }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

ToDoList.propTypes = {
  todos: PropTypes.array,
  removeItem: PropTypes.func,
  completedItem: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
