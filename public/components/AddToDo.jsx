
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from 'actions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    width: 500,
    marginBottom: theme.spacing.unit,
  },

  btn: {
    marginBottom: 10,
  }
});

class AddToDo extends React.Component {
 constructor() {
  super();
  this.onAddItem = this.onAddItem.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.state = {value: ''};
  }

 handleChange(e) {
  this.setState({
    value: e.target.value
  })
 }

 onAddItem() {
  // Create tasks only with title
  if(this.state.value) {
    this.props.addItem(this.state.value);
    this.setState({value: ''});
  }
}

render() {
  const { classes } = this.props;
    return (
     <div>
       <TextField
         className={classes.textField}
         id='item'
         placeholder="Add Item"
         value={this.state.value}
         onChange={this.handleChange}
       />
       <Button
         variant="contained"
         color="primary"
         className={classes.btn}
         onClick={() => { this.onAddItem(); }}
       >
         Add Task
       </Button>
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

export default compose(
withStyles(styles),
connect(null,mapDispatchToProps)
)(AddToDo);
