import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import {AuthConsumer} from "../../stateHandlers/authContext";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TranslateIcon from "@material-ui/icons/Translate";
import styles from "./NavbarStyles";

class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
		};
	}

	languageToggler = (lang) => {
		const {setLanguage} = this.props;
		setLanguage(lang, () => {});
	};

	handleClick = (event) => {
		this.setState({anchorEl: event.currentTarget});
	};

	handleClose = (lang) => {
		this.languageToggler(lang);
		this.setState({anchorEl: null});
	};

	render() {
		const {classes} = this.props;
		const {anchorEl} = this.state;

		return (
			<div className={classes.mainBody}>
				<React.Fragment>
					<TranslateIcon className={classes.langBtn} onClick={this.handleClick} />
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={this.handleClose}>
						<MenuItem onClick={() => this.handleClose("bn")}>বাংলা</MenuItem>
						<MenuItem onClick={() => this.handleClose("en")}>English</MenuItem>
					</Menu>
				</React.Fragment>
			</div>
		);
	}
}

Template.propTypes = {
	classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({setLanguage}) => <Template {...props} setLanguage={setLanguage} />}
	</AuthConsumer>
);

export default withStyles(styles)(ConsumerComponent);
