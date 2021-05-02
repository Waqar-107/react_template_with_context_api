import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

const ErrorBoundary = () => {
	const classes = styles();
	return (
		<div className={`${classes.root} ${classes.centered}`}>
			<div className={classes.head}>
				The App Crashed :(
				<br /> Please Report to the Developers.
			</div>
			<div>
				<Link className={classes.lnk} to="/">
					Get Back to Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorBoundary;
