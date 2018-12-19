import fetch from 'isomorphic-unfetch'
import propostaConfig from '../proposta-credito.config'

class HttpService {
    static async get(path="", headers = {'Content-Type': 'application/json'},body={}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'GET',
            headers: headers,
            body: JSON.stringify(body)
        })
    }

    static async post(path="", headers = {'Content-Type': 'application/json'},body={}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
    }
}
export  default HttpService;

