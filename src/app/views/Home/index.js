import React from "react";
import styles from "./styles";

const Home = () => {
	const classes = styles();
	return <div className={classes.root}>protected route = home</div>;
};

export default Home;
