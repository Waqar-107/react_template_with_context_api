import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { AuthProvider } from "../stateHandlers/authContext";
import PrivateWrapper from "./privateWrapper";
import ErrorBoundary from "../util/errorBoundary";

import Loading from "../components/Loading";
import SignIn from "../views/SignIn";
const Home = lazy(() => import("../views/Home"));
const NotFound = lazy(() => import("../views/NotFound"));
const Template = lazy(() => import("../views/Template"));

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
});

const BaseLayout = () => (
	<Router>
		<Suspense fallback={<Loading />}>
			<AuthProvider>
				<MuiThemeProvider theme={theme}>
					<ErrorBoundary>
						<div>
							<Switch>
								<Route
									exact
									path="/"
									render={(props) => <PrivateWrapper component={<Home {...props} />} />}
								/>

								<Route
									exact
									path="/template"
									render={(props) => <PrivateWrapper component={<Template {...props} />} />}
								/>
								<Route exact path="/signin" component={SignIn} />
								{/* <Route exact path="/template" component={Template} /> */}
								<Route exact path="*" component={NotFound} />
							</Switch>
						</div>
					</ErrorBoundary>
				</MuiThemeProvider>
			</AuthProvider>
		</Suspense>
	</Router>
);

export default BaseLayout;
