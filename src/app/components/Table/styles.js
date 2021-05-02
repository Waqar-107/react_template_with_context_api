const styles = (theme) => ({
	root: {
		// overflowX: "auto",
		borderRadius: "10px",
		background: theme.palette.colors.tableBody,
		boxShadow: "0 25px 20px -20px rgba(0,0,0,.1), 0 0 15px rgba(0, 0, 0, .06)",

		padding: 20,
	},

	table: {
		tableLayout: "auto",
		overflowX: "auto",
	},

	row: {
		marginBottom: 10,
		display: "inline-flex",
		borderBottom: `1px solid ${theme.palette.colors.lightNavyBlue}`,
	},

	singleCell: {
		marginRight: 20,
		padding: 20,
		color: theme.palette.colors.tableFont,
		fontWeight: 400,
		fontSize: 14,
		wordBreak: "break-word",

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		alignContent: "center",
	},

	pagination: {
		width: "100%",
		color: "white",

		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "flex-end",
	},

	limitChanger: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",

		cursor: "pointer",
	},

	icon: {
		width: 20,
		height: 20,
	},

	enabled: {
		color: "white",
	},

	disabled: {
		color: theme.palette.colors.tableFont,
	},

	showing: {
		marginLeft: 20,
		marginRight: 20,
	},
});

export default styles;
