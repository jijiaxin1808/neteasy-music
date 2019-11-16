import request from "../utils/request";
import baseUrl from "../assets/baseUrl";
import baseUrl1 from  "../assets/baseUrl1";
import axios from "axios";

export function verifyEmail(value) {
	return axios({
		url: `${baseUrl1}user/email?email=${value.RegName}&user=${value.regUserName}`,
		method: "get",
	})
}
export function verifyEmailCode({user, verifyCode}) {
	return request( `${baseUrl1}user/captcha/verify?user=${user}&verifyCode=${verifyCode}`);
}