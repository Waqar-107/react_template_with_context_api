import React from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			user: {},
			language: "bn",
		};
	}

	checkAuth = () => {
		let user = localStorage.getItem("user");
		let jwtToken = localStorage.getItem("jwtToken");
		console.log(user, jwtToken);

		if (jwtToken) {
			this.setState({ user, isAuthenticated: true });
			return true;
		} else return false;
	};

	login = (user) => {
		this.setState({ isAuthenticated: true });
		this.setState({ user: user });
	};

	logout = () => {
		let { isAuthenticated, user } = this.state;

		user = {};
		isAuthenticated = false;
		localStorage.removeItem("user");
		localStorage.removeItem("jwtToken");

		this.setState({ isAuthenticated, user });
	};

	setLanguage = (lang, cb) => {
		this.setState({ language: lang });
		cb();
	};

	getLanguage = () => this.state.language;

	render() {
		return (
			<AuthContext.Provider
				value={{
					...this.state,
					checkAuth: this.checkAuth,
					logout: this.logout,
					login: this.login,
					getLanguage: this.getLanguage,
					setLanguage: this.setLanguage,
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

AuthProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
