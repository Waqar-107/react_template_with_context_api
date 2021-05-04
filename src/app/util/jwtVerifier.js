export const isJwtValid = () => {
	let jwtTokenExpiryDate = localStorage.getItem("jwtTokenExpiryDate");
	return Date.now() + 5 * 60 * 1000 < jwtTokenExpiryDate;
};
