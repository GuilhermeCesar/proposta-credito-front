import HttpService from './HttpService';

class ProposalService{
    constructor() {
        this._httpService = new HttpService();
    }

    async getAllProposals(){
        try{
            const proposta =  await this._httpService.get("/proposals");
            const json = await proposta.json();
            return  json;
        }catch (e) {
            throw new Error("Erro ao consultar as propostas")
        }
    }
}

export const HelperProposal = (status = "ANALYZING") => {
    switch (status) {
        case "APPROVED":
            return "Aprovado";
        case "DISAPPROVED":
            return "Reprovado";
        default:
            return "Em Analise"
    }
};

export default ProposalService;
