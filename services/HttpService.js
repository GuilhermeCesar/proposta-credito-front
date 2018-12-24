import fetch from 'isomorphic-unfetch'
import propostaConfig from '../proposta-credito.config'

class HttpService {
    async get(path="", headers = {'Content-Type': 'application/json'}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'GET',
            headers: headers,
        })
        .catch(error=>{
            console.log(error);
            console.error("Entrou no catch");
            throw new Error(error)
        })
    }

    async post(path="",body={},headers = {'Content-Type': 'application/json;charset=UTF-8'}){
        return fetch(propostaConfig.baseURL+path,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        .then(result => {
            switch (result.status) {
                case 500:
                    throw new Error();
            }
            return result;
        })
        .catch(() => {
            throw new Error("Erro ao salvar Cliente");
        })
    }
}
export default HttpService;