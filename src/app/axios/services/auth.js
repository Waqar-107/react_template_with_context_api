import { postReq } from "../index";

const login = (data, cb) => postReq("/user/login", data, "", cb, true);

export { login };
