class Custumer{

    constructor(){
        this._fullName = "";
        this._socialId = "";
        this._age = 0;
        this._gener = null;
        this._civilStatus;
        this._state;
        this._dependets = 0;
        this._salary = 0.00;
    }

    get salary(){
        return this.salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    get dependets(){
        return this._dependets;
    }

    set dependets(dependets){
        this._dependets = dependets;
    }

    set state(state){
        this._state = state;
    }

    get state(){
        return this._state;
    }

    get civilStatus(){
        return this._civilStatus;
    }

    set civilStatus(civilStatus){
        this._civilStatus = civilStatus;
    }

    get gener(){
        this._gener;
    }

    set gener(gener){
        this._gener = gener;
    }

    set fullName(fullName){
        this._fullName = fullName;
    }

    get fullName(){
        return this._fullName;
    }

    set socialId(socialId){
        this._socialId = socialId;
    }

    get socialId(){
        return this._socialId;
    }

    set age(age){
        this._age = age;
    }

    get age(){
        return this._age;
    }
}

export default Custumer;