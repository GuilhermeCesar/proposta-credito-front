import HttpService from './HttpService';

class ProposalService{
    constructor() {
        this._httpService = new HttpService();
    }

    async getProposals(socialId){
        const path = `/proposals/${socialId}`;
        try{
            const proposta =  await this._httpService.get(path);
            let propostaJson = await  proposta.json()
                                            .catch(()=>propostaJson = []);
            return  propostaJson;
        }catch (e) {
            throw new Error(e.message);
        }
    }

    async saveCostumer(costumer){
        try{
            const proposal = await this._httpService.post("/proposals",costumer);
            return  await proposal.json();
        }catch (e) {
            throw "Erro ao cadastrar cliente";
        }
    }
}

export const HelperProposal = (status = "ANALYZING") => {
    switch (status) {
        case "APPROVED":
            return "Aprovado";
        default:
            return "Reprovado"
    }
};

export default ProposalService;
