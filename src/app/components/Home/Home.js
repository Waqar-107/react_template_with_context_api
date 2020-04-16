import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./HomeStyles";

class Home extends React.Component {
	render() {
		const {classes} = this.props;
		return <div className={classes.mainBody}>this is a template</div>;
	}
}

Home.propTypes = {
	classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Home);
