import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {AuthConsumer} from "../../stateHandlers/authContext";
import * as translationBN from "../../../translations/bn";
import * as translationEN from "../../../translations/en";

import styles from "./signinStyles";
import Navbar from "../../components/Navbar/Navbar";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: {},
			current_lang: "bn",

			email: "",
			password: "",
			showPassword: false,
			errors: {},
		};
	}

	componentDidMount() {
		const {language} = this.props;
		if (language === "bn") this.setState({language: translationBN.signIn, current_lang: "bn"});
		else this.setState({language: translationEN.signIn, current_lang: "en"});
	}

	componentDidUpdate() {
		const {current_lang} = this.state;

		if (this.props.language !== current_lang) {
			if (this.props.language === "bn")
				this.setState({language: translationBN.signIn, current_lang: "bn"});
			else this.setState({language: translationEN.signIn, current_lang: "en"});
		}
	}

	handleChange = (name) => (event) => {
		this.setState({[name]: event.target.value});
	};

	render() {
		const {classes} = this.props;
		const {language, email, password, showPassword, errors} = this.state;

		return (
			<div className={classes.mainBody}>
				<Navbar />
				<TextField
					required
					onChange={this.handleChange("email")}
					value={email}
					name="email"
					label={language.email}
					className={classes.txtField}
					error={errors.email ? true : false}
					helperText={errors.email ? errors.email : ""}
					type="text"
				/>

				<TextField
					required
					className={classes.txtField}
					value={password}
					type={showPassword ? "text" : "password"}
					label={language.password}
					name="password"
					error={errors.password ? true : false}
					helperText={errors.password ? errors.password : ""}
					onChange={this.handleChange("password")}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									edge="end"
									aria-label="Toggle password visibility"
									onClick={() =>
										this.setState({
											showPassword: !showPassword,
										})
									}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<div className={classes.btn}>{language.btn}</div>
			</div>
		);
	}
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired,
};

const ConsumerComponent = (props) => (
	<AuthConsumer>{({language}) => <SignIn {...props} language={language} />}</AuthConsumer>
);

export default withStyles(styles)(ConsumerComponent);
