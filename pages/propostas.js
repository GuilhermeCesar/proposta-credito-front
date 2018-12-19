import Layout from '../components/Layout';
import List from '../components/List';
import Details from '../components/Details';
import React from 'react';
import ProposalService from '../services/ProposalService'
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



class PropostaPage extends React.Component{

    componentDidMount() {
        this._propostas = this._proposalService.getAllProposals();
    }

    constructor(props){
        super(props);
        this._proposalService = new ProposalService();
    }

    render(){
        return (<Layout>
            <List data={this._propostas }/>
            <Details data={{nome:'Joao'}}/>
        </Layout> )
    }
}

export default PropostaPage