import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './AppBar.module.css';



 function DenseAppBar() {


  return (
    <div className={styles.container}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h4" color="inherit">
            Covid-19 Tracker by Muhammad Haroon
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default DenseAppBar;
