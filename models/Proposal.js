import Status from './Status'

class Proposal{
    constructor(customer){
        this._id;
        this._createdAt = new Date();
        this._approvedAt;
        this._status = Status.ANALYZING;
        this._customer = customer;
        Object.freeze(this)
    }
}

export default Proposal;