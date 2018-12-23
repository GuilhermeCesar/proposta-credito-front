import HttpService from './HttpService';

class ProposalService{
    constructor() {
        this._httpService = new HttpService();
    }

    async getAllProposals(){
        try{
            const proposta =  await this._httpService.get("/proposals");
            return await proposta.json();
        }catch (e) {
            throw new Error("Erro ao consultar as propostas")
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
