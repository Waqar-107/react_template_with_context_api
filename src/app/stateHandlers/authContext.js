import React, { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [language, handleLanguage] = useState("bn");
	const [user, setUser] = useState({});

	const checkAuth = () => {
		let user = localStorage.getItem("user");
		let jwtToken = localStorage.getItem("jwtToken");
		console.log(user, jwtToken);

		if (jwtToken) {
			setIsAuthenticated(true);
			setUser(user);

			return true;
		} else return false;
	};

	const login = (user) => {
		setIsAuthenticated(isAuthenticated);
		setUser(user);
	};

	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("jwtToken");

		setUser({});
		setIsAuthenticated(false);
	};

	const setLanguage = (lang, cb) => {
		handleLanguage(lang);
		cb();
	};

	const getLanguage = () => language;

	return (
		<AuthContext.Provider
			value={{
				user: user,
				language: language,
				isAuthenticated: isAuthenticated,
				checkAuth: checkAuth,
				logout: logout,
				login: login,
				getLanguage: getLanguage,
				setLanguage: setLanguage,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
