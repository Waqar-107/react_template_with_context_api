const bangladeshiPhone = (phone) => {
	// validate the phone number
	// do it according to your country

	/*The number may start with +8801 or 8801 or 01
  The next number can be either 3,4,5,6,7,8,9
  Then there have exact 8 digit.*/

	const pat = /^(?:\+?88)?01[3-9]\d{8}$/;
	const m = phone.match(pat);

	if (m !== null) return true;

	return false;
};

const isEmpty = (value) =>
	value === undefined ||
	value === null ||
	(typeof value === "object" && Object.keys(value).length === 0) ||
	(typeof value === "string" && value.trim().length === 0);

const isString = (value) => value && typeof value === "string";

const isNumber = (value) => value && !isNaN(value);

const isBoolean = (value) => typeof value === typeof true;

const isStringAndNotEmpty = (value) =>
	value && typeof value === "string" && value.trim().length !== 0;

const isObject = (value) => value && typeof value === "object";

const isObjectAndNotEmpty = (value) =>
	value && typeof value === "object" && Object.keys(value).length !== 0;

const isArray = (value) => value && Array.isArray(value);

const isArrayAndNotEmpty = (value) => value && Array.isArray(value) && value.length;

const isDate = (value) => value && !isNaN(Date.parse(value));

module.exports = {
	isEmpty,
	isNumber,
	isBoolean,
	isString,
	isStringAndNotEmpty,
	isObject,
	isObjectAndNotEmpty,
	isArray,
	isArrayAndNotEmpty,
	isDate,
	bangladeshiPhone,
};
