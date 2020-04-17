import React from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			user: {},
			testVariable: "waqar",
		};
	}

	componentDidMount() {}

	login = (user) => {
		this.setState({isAuthenticated: true});
		this.setState({user});
	};

	logout = () => {
		let {isAuthenticated, user} = this.state;
		user = {};
		isAuthenticated = false;

		this.setState({isAuthenticated, user});
	};

	render() {
		return (
			<AuthContext.Provider
				value={{
					...this.state,
					logout: this.logout,
					login: this.login,
				}}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

AuthProvider.propTypes = {
	children: PropTypes.object.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
