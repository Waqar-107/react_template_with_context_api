import axios from "axios";
import showErr from "./errorAxios";
import config from "../util/config";

// used to send post request to private routes
export const postReqAuth = (route, data, param, cb) => {
	const token = localStorage.getItem("jwtToken");
	if (token) {
		axios.defaults.headers.common["Authorization"] = token;
		axios
			.post(config.BASE_API_URL + route + param, data)
			.then((res) => {
				cb(null, res.data);
			})
			.catch((err) => {
				showErr(err, cb);
			});
	} else {
		cb("Not authenticated", null);
	}
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

	if (token) {
		axios.defaults.headers.common["Authorization"] = token;

		axios
			.get(config.BASE_API_URL + route, { params: param })
			.then((res) => {
				cb(null, res.data);
			})
			.catch((err) => {
				showErr(err, cb);
			});
	} else {
		cb("Not authenticated", null);
	}
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
