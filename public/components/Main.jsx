
import React from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    position: 'absolute',
    left: '50%',
    top: '20%',
    transform: 'translateX(-50%)',
    width: 500,
    height: 'auto',
  }
});

const Main = (props) => {
  const { classes } = props
  return (
   <div className={classes.container}>
     <AddToDo/>
     <ToDoList/>
   </div>
   )
 }

export default withStyles(styles)(Main);
