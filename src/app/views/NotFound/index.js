import React from "react";
import styles from "./styles";

const NotFound = () => {
	const classes = styles();

	return <div className={classes.root}>404 not found</div>;
};

export default NotFound;
