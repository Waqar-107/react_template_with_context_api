import React, { Component } from "react";
import ErrorLayout from "../views/ErrorBoundary";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError() {
		console.log("error found");
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		return { hasError: true };
	}

	render() {
		console.log(this.state.hasError);
		if (this.state.hasError) {
			//render fallback UI
			return <ErrorLayout />;
		}

		//when there's not an error, render children untouched
		return this.props.children;
	}
}

export default ErrorBoundary;
