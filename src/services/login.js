
import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function loginPhone( data ) {
	return request( `${baseUrl}login/cellphone/?phone=${ data.phone }&password=${ data.password }`);
}
export function loginEmail( data ) {
	return request( `${baseUrl}login?email=${ data.email }&password=${ data.password }`);
}
export function sendVerifyCode( data ) {
	return request( `${baseUrl}captcha/sent?phone=${ data.phone }`);
}
