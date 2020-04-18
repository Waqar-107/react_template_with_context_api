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
	},

	langMenu: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	langMenuItem: {
		paddingLeft: "10px",
		paddingRight: "10px",
		paddingTop: "5px",
		paddingBottom: "5px",
	},
});

export default styles;
