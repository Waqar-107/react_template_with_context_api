import React, { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	const checkAuth = () => {
		let user = localStorage.getItem("user");
		let jwtTokenExpiryDate = localStorage.getItem("jwtTokenExpiryDate");

		if (jwtTokenExpiryDate && isJwtValid()) {
			setIsAuthenticated(true);
			setUser(user);

			return true;
		} else return false;
	};

	// invalidate a jwt before 5 minutes as there can be situation where,
	// the user enters a protected page when the jwt is verified but when posts something
	// the jwt expires. this shall give error.
	const isJwtValid = () => {
		let jwtTokenExpiryDate = localStorage.getItem("jwtTokenExpiryDate");
		return Date.now() + 5 * 60 * 1000 < jwtTokenExpiryDate;
	};

	const login = (user) => {
		setIsAuthenticated(isAuthenticated);
		setUser(user);
	};

	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("jwtToken");
		localStorage.removeItem("jwtTokenExpiryDate");

		setUser({});
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user: user,
				isAuthenticated: isAuthenticated,
				checkAuth: checkAuth,
				logout: logout,
				login: login,
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
