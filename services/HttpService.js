import fetch from 'isomorphic-unfetch'
import propostaConfig from '../proposta-credito.config'

class HttpService {
    async get(path="", headers = {'Content-Type': 'application/json'}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'GET',
            headers: headers,
        })
        .then(result=>{
             switch(result.status) {
                 case 404:
                     throw new Error("Página não encontrada")
            }

            return result;
        })
        .catch(error=>{
            throw new Error(error)
        })


    }

    async post(path="",body={},headers = {'Content-Type': 'application/json'}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
    }
}
export default HttpService;

