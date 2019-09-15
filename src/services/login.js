
import request from "../utils/request";
import qs from "qs";

export function loginPhone( payload ) {
	const data1 = {
		phone:"13043130139",
		password:"123iloveyouso"
	};
	const data = qs.stringify(data1);
	return request("http://localhost:3000/login/cellphone",{
		method: "post",
		body: data
	},false);
}