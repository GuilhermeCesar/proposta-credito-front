import HttpService from './HttpService';

class ProposalService{
    constructor() {
        this._httpService = new HttpService();
    }

    async getAllProposals(){
        return this._httpService.get("/proposals")
    }
}

export default ProposalService;