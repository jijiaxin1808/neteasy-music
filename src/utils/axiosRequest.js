import axios from 'axios';

const axiosRequest = (payload)=> {
    const { data,url,header } = payload;
    axios.post( url,data,header={} ).then((res)=> {
        if(res.data.code == 0) {
            return data;
        }
        else {
            alert(res.data.message);
            return null;
        }
    }).catch((err)=> {
        if(err) {
            alert(err);
            return null;
        }
        else {
            return null;
        }
    })
}
export default axiosRequest;




