import React, {Component} from "react";
import Loading from "../components/Loading/loading";
import {Redirect} from "react-router-dom";

import {AuthConsumer} from "../stateHandlers/authContext";

class PrivateComponent extends Component {
	state = {
		status: undefined,
	};

	componentDidMount() {
		if (this.props.isAuthenticated) this.setState({status: true});
		else this.setState({status: false});
	}

	render() {
		const {status} = this.state;

		const {component} = this.props;
		if (status === true) return component;
		else if (status === false) return <Redirect to={"/signin"} />;
		else return <Loading />;
	}
}

const ConsumerComponent = (props) => (
	<AuthConsumer>{({language}) => <PrivateComponent {...props} language={language} />}</AuthConsumer>
);

export default ConsumerComponent;
