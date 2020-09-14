import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { AuthConsumer } from "../../stateHandlers/authContext";
import * as translationBN from "../../../translations/bn";
import * as translationEN from "../../../translations/en";

import { postReq } from "../../axios/index";
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
			authenticated: false,
			errors: {},
		};
	}

	componentDidMount() {
		const { language } = this.props;
		if (language === "bn") this.setState({ language: translationBN.signIn, current_lang: "bn" });
		else this.setState({ language: translationEN.signIn, current_lang: "en" });
	}

	componentDidUpdate() {
		const { current_lang } = this.state;

		if (this.props.language !== current_lang) {
			if (this.props.language === "bn")
				this.setState({ language: translationBN.signIn, current_lang: "bn" });
			else this.setState({ language: translationEN.signIn, current_lang: "en" });
		}
	}

	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.value });
	};

	handleLogin = () => {
		const { email, password } = this.state;

		postReq(
			"/user/login",
			{ email, password },
			"",
			(err, data) => {
				console.log(err, data);
				if (!err) {
					this.props.login(data.user);
					this.setState({ authenticated: true });
				}
			},
			true
		);
	};

	render() {
		const { classes } = this.props;
		const { language, email, password, showPassword, errors, authenticated } = this.state;

		if (authenticated) return <Redirect to={"/"} />;

		return (
			<div className={`${classes.mainBody} ${classes.centered}`}>
				<Navbar />
				<div className={`${classes.content} ${classes.centered}`}>
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
										}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>

					<div className={`${classes.btn} ${classes.centered}`} onClick={() => this.handleLogin()}>
						{language.btn}
					</div>
				</div>
			</div>
		);
	}
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired,
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({ language, login }) => <SignIn {...props} language={language} login={login} />}
	</AuthConsumer>
);

export default withStyles(styles)(ConsumerComponent);
