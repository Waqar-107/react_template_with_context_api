import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './HomeStyles';

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.mainBody}>
      this is a template
		</div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);