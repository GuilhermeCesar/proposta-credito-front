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

export default ProposalService;


// const listItens = [{
//     id:142934859564,
//     createdAt: 1,
//     approvedAt: null,
//     status: 'PENDING',
//     customer: {
//         fullName: 'Guilherme Pereira',
//         socialId: '89987656789',
//         age: 25,
//         gener:'M',
//         civilStatus:'Solteiro',
//         state:'SC',
//         dependents: 2,
//         salary: 5000.00,
//     }
// },
// {
//     id:145642452345,
//     createdAt: 1,
//     approvedAt: null,
//     status: 'APPROVED',
//     customer: {
//         fullName: 'Bruno da Silva',
//         socialId: '00912343200',
//         age: 30,
//         gener:'M',
//         civilStatus:'Casado',
//         state:'SC',
//         dependents: 1,
//         salary: 10000.00,
//     }
// }]