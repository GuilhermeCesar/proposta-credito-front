import  connection  from "./HttpConnectionFactory";

class ProposalService{
    async static getAllProposals(){
        let request = connection.get("proposal/");
        console.log(request);
    }
}

export default ProposalService;