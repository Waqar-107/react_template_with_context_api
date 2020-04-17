import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import {AuthConsumer} from "../../stateHandlers/authContext";

import styles from "./TemplateStyles";

class Template extends React.Component {
	render() {
		const {classes, testVariable} = this.props;
		return <div className={classes.mainBody}>this is a template {testVariable}</div>;
	}
}

Template.propTypes = {
	classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({testVariable}) => <Template {...props} testVariable={testVariable} />}
	</AuthConsumer>
);

export default withStyles(styles)(ConsumerComponent);
