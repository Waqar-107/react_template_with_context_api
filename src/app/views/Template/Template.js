import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import {AuthConsumer} from "../../stateHandlers/authContext";
import * as translationBN from "../../../translations/bn";
import * as translationEN from "../../../translations/en";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./TemplateStyles";

class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: {},
			current_lang: "bn",
		};
	}

	componentDidMount() {
		const {language} = this.props;
		if (language === "bn") this.setState({language: translationBN.template, current_lang: "bn"});
		else this.setState({language: translationEN.template, current_lang: "en"});
	}

	componentDidUpdate() {
		const {current_lang} = this.state;

		if (this.props.language !== current_lang) {
			if (this.props.language === "bn")
				this.setState({language: translationBN.template, current_lang: "bn"});
			else this.setState({language: translationEN.template, current_lang: "en"});
		}
	}

	render() {
		const {classes} = this.props;
		const {language} = this.state;

		return (
			<div className={classes.mainBody}>
				<Navbar />
				<div>{language.title}</div>
			</div>
		);
	}
}

Template.propTypes = {
	classes: PropTypes.object.isRequired,
};

const ConsumerComponent = (props) => (
	<AuthConsumer>{({language}) => <Template {...props} language={language} />}</AuthConsumer>
);

export default withStyles(styles)(ConsumerComponent);
