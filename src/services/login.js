
import request from "../utils/request";
import qs from "qs";

export function loginPhone( payload ) {
	const data = {
		name: "13043130139",
		password: "123iloveyouso"
	};  
	const data1 = JSON.stringify(data);
	const data2 = qs.stringify(data);
    console.log(data1,'a',data2)

    
	return request("http://192.168.1.23:3000/login/cellphone",{
		header:{
		},
		method: "post",
		body: data1
	},false);
}