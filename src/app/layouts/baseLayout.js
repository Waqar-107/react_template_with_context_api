import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

import {AuthProvider} from "../stateHandlers/authContext";
import PrivateWrapper from "./privateWrapper";

import SignIN from "../views/SignIn/signin";
import Home from "../views/Home/home";

const theme = createMuiTheme({
	palette: {
		colors: {
			primary: "grey",
			secondary: "",
			dark: "",
			textDark: "",
			textLight: "#9e9e9e",
		},
	},

	typography: {
		// Use the system font instead of the default Roboto font.
		// fontFamily: "Montserrat",
		// useNextVariants: true,
	},
});

const BaseLayout = () => (
	<Router>
		<AuthProvider>
			<MuiThemeProvider theme={theme}>
				<div>
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => <PrivateWrapper component={<Home {...props} />} />}
						/>
						<Route exact path="/signin" component={SignIN} />
					</Switch>
				</div>
			</MuiThemeProvider>
		</AuthProvider>
	</Router>
);

export default BaseLayout;
