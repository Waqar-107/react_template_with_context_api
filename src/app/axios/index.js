import React from "react";
import { Redirect } from "react-router";
import axios from "axios";
import showErr from "./errorAxios";
import config from "../util/config";
import { isJwtValid } from "../util/jwtVerifier";

// used to send post request to private routes
export const postReqAuth = (route, data, param, cb) => {
	const token = localStorage.getItem("jwtToken");

	// check if token exists
	// check if it valid
	if (!isJwtValid() || !token) return <Redirect to="/login" />;

	axios.defaults.headers.common["Authorization"] = token;
	axios
		.post(config.BASE_API_URL + route + param, data)
		.then((res) => {
			cb(null, res.data);
		})
		.catch((err) => {
			showErr(err, cb);
		});
};

// used to send post request to normal routes
export const postReq = (route, data, param, cb, setAuth) => {
	axios
		.post(config.BASE_API_URL + route + param, data)
		.then((res) => {
			if (setAuth) {
				axios.defaults.headers.common["Authorization"] = res.data.access_token;
				localStorage.setItem("jwtToken", res.data.access_token);
				localStorage.setItem("jwtTokenExpiryDate", res.data.jwtTokenExpiryDate);
				localStorage.setItem("user", JSON.stringify(res.data.user));
			}

			cb(null, res.data);
		})
		.catch((err) => {
			showErr(err, cb);
		});
};

// used to send get request to private routes
export const getReqAuth = (route, param, cb) => {
	const token = localStorage.getItem("jwtToken");

	// check if token exists
	// check if it valid
	if (!isJwtValid() || !token) return <Redirect to="/login" />;

	axios.defaults.headers.common["Authorization"] = token;

	axios
		.get(config.BASE_API_URL + route, { params: param })
		.then((res) => {
			cb(null, res.data);
		})
		.catch((err) => {
			showErr(err, cb);
		});
};

// used to send get request to normal routes
export const getReq = (route, param, cb) => {
	axios
		.get(config.BASE_API_URL + route, { params: param })
		.then((res) => {
			cb(null, res.data);
		})
		.catch((err) => {
			showErr(err, cb);
		});
};
