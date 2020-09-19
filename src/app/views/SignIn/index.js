import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { AuthConsumer } from "../../stateHandlers/authContext";
import * as translationBN from "../../../translations/bn";
import * as translationEN from "../../../translations/en";

import { login } from "../../axios/services/auth";
import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";

const SignIn = (props) => {
	const classes = styles();
	const [language, setLanguage] = useState({});
	const [field, setField] = useState({ phone: "", password: "", showPassword: "" });
	const [authenticated, setAuthenticated] = useState(false);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (props.language === "bn") setLanguage(translationBN.signIn);
		else setLanguage(translationEN.signIn);
	}, [props.language]);

	const handleChange = (name) => (event) => {
		setField({ ...field, [name]: event.target.value });
	};

	const handleLogin = () => {
		const { phone, password } = this.state;

		login({ phone, password }, (err, data) => {
			if (err) console.error("error in login", err);
			else {
				props.login(data.user);
				setAuthenticated(true);
			}
		});
	};

	if (authenticated) return <Redirect to={"/"} />;

	return (
		<div className={`${classes.mainBody} ${classes.centered}`}>
			<Navbar />
			<div className={`${classes.content} ${classes.centered}`}>
				<TextField
					required
					onChange={handleChange("phone")}
					value={field.phone}
					name="phone"
					label={language.phone}
					className={classes.txtField}
					error={errors.phone ? true : false}
					helperText={errors.phone ? errors.phone : ""}
					type="text"
				/>

				<TextField
					required
					className={classes.txtField}
					value={field.password}
					type={field.showPassword ? "text" : "password"}
					label={language.password}
					name="password"
					error={errors.password ? true : false}
					helperText={errors.password ? errors.password : ""}
					onChange={handleChange("password")}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									edge="end"
									aria-label="Toggle password visibility"
									onClick={() => setField({ ...field, showPassword: !field.showPassword })}
								>
									{field.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>

				<div className={`${classes.btn} ${classes.centered}`} onClick={() => handleLogin()}>
					{language.btn}
				</div>
			</div>
		</div>
	);
};

const ConsumerComponent = (props) => (
	<AuthConsumer>
		{({ language, login }) => <SignIn {...props} language={language} login={login} />}
	</AuthConsumer>
);

export default ConsumerComponent;
