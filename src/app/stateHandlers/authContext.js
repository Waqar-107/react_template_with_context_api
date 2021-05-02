import React, { useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	const checkAuth = () => {
		let user = localStorage.getItem("user");
		let jwtToken = localStorage.getItem("jwtToken");
		let jwtTokenExpiryDate = localStorage.getItem("jwtTokenExpiryDate");

		console.log(user, jwtToken, jwtTokenExpiryDate, typeof jwtTokenExpiryDate);

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
