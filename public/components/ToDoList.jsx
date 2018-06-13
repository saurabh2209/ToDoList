
import React from 'react';
import { removeTodo, showCompleted } from 'actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  items: {
    marginLeft: 10,
    marginRight: 10,
    display: 'inline-block',
    maxWidth: '60%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  close: {
    display: 'inline-block',
    position: 'absolute',
    minHeight: 22,
    minWidth: 22,
    right: 2,
    padding: 0,
  },

  btncolor: {
    padding: 0,
    display: 'inline-block',
    position: 'absolute',
    right: 50,
    minHeight: 22,
    fontSize: 10,
  },

  pending: {
    position: 'relative',
    marginBottom: 20,
    width: 500,
  },

  complete: {
    position: 'relative',
    width: 500,
    backgroundColor: '#ADD8E6',
    marginBottom: 20,
  }
});

class ToDoList extends React.Component {

render() {
  const { classes } = this.props;
  const items = this.props.todos.map((item, index) => {
   return (
     <div  key={index}>
       <div className={item.completed ? classes.complete : classes.pending}>
        <div style={item.completed ? {textDecoration: 'line-through'}: {}} className={classes.items}>
        <span>{item.title}</span>
        </div>
        <Button
          size='small'
          color='primary'
          variant='contained'
          id={item.id}
          disabled={item.completed || false}
          className={classes.btncolor}
          onClick= {() => {
            this.props.completedItem(item.id);
          }}
        >
          Complete
        </Button>
        <Button
          size='small'
          className={classes.close}
          onClick={() => {this.props.removeItem(item.id)}}
        >
         X
        </Button>
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

export default compose(
 withStyles(styles),
 connect(mapStateToProps,mapDispatchToProps)
)(ToDoList);
