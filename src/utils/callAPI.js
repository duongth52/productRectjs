import axios from 'axios';
const urlDomain = 'http://localhost:3000';
export default function API(method, url, data){
    return axios({
        method: method,
        url: `${urlDomain}/${url}`,
        data: data
    }).catch(err =>{
        console.log(err);
    })
}