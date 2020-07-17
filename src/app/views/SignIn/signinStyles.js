const styles = (theme) => ({
	mainBody: {
		width: "100%",
		height: "100vh",
	},

	txtField: {
		marginBottom: "15px",
	},

	content: {
		height: "calc(100vh - 70px)",
		width: "100%",
	},

	centered: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	btn: {
		background: theme.palette.colors.primary,
		color: "white",
		width: "150px",
		height: "50px",

		marginTop: "30px",
		borderRadius: "5px",
		cursor: "pointer",
	},
});

export default styles;
