import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HiveLogo from '../images/beehive.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  logout: {
    justifyContent: 'right'
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



function ElevateAppBar(props) {
  const classes = useStyles();
  
  const logout = () => {
    props.dispatch({type: 'LOGOUT', payload: false})
  }
  
  return (
      
    <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
            <AppBar>
            <Toolbar>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <img src={HiveLogo} alt={'worker bee logo'} style={{height: '50px', paddingRight: '25px'}}/>
                  <Typography variant="h6">WorkerBee</Typography>
                </div>
                {props.logged ? <Typography onClick={logout} variant="h6" className={classes.logout} id='logout'>Logout</Typography> 
                : <Typography variant="h6" className={classes.logout} id='logout'></Typography>
                }
            </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
    </React.Fragment>
  );
}

const mapStateToProps = (state) =>({
  logged: state.logged
});

export default connect(mapStateToProps)(ElevateAppBar);