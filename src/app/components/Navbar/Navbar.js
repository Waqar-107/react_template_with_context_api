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
			showDropdown: false,
		};
	}

	languageToggler = (lang) => {
		const {setLanguage} = this.props;
		setLanguage(lang, () => {});
		this.handleClose();
	};

	handleClick = (event) => {
		this.setState({anchorEl: event.currentTarget});
	};

	handleClose = (lang) => {
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
						id="languageMenu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={this.handleClose}>
						<MenuItem onClick={() => this.languageToggler("bn")} className={classes.langMenuItem}>
							বাংলা
						</MenuItem>
						<MenuItem onClick={() => this.languageToggler("en")} className={classes.langMenuItem}>
							English
						</MenuItem>
					</Menu>
				</React.Fragment>
			</div>
		);
	}
}

Template.propTypes = {
	classes: PropTypes.object.isRequired,
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({setLanguage}) => <Template {...props} setLanguage={setLanguage} />}
	</AuthConsumer>
);

export default withStyles(styles)(ConsumerComponent);
