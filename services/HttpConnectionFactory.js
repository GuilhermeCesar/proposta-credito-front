import axios  from "axios";

const connection = () =>{
    if(this._connection){
        return this._connection;
    }
    this._connection = axios.create({
        baseURL:'http://localhost:8080/'
    });
    return this._connection;
};

export default connection;

