import React from "react";
import {Link} from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import memories from '../../images/memories.png';
import useStyles from './styles.js'
const Navbar=()=>{
    const classes= useStyles();

    return(
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">FOOD ADVISOR</Typography>
            <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        </Toolbar>
    </AppBar>
    )
}
export default Navbar;
