import Status from './Status'
class Proposal{
    constructor(){
        this._id;
        this._createAt = new Date();
        this._aprovedAt;
        this._status = Status.ANALYZING;


    }
}

export default Proposal;