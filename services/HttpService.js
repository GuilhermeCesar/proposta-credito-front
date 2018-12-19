import fetch from 'isomorphic-unfetch'
import propostaConfig from '../proposta-credito.config'


class HttpService {
    static async get(path="", body = {'Content-Type': 'application/json'}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'POST',
            headers: body,
            body: JSON.stringify(body)
        })
    }
}
export  default HttpService;

