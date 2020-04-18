const styles = (theme) => ({
	mainBody: {
		width: "100%",
		height: "70px",
		background: theme.palette.colors.primary,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	langBtn: {
		fontSize: "25px",
		color: "white",
		cursor: "pointer",
	},

	langMenuItem: {
		paddingLeft: "20px",
		paddingRight: "20px",
		paddingTop: "5px",
		paddingBottom: "5px",

		cursor: "pointer",
	},
});

export default styles;
