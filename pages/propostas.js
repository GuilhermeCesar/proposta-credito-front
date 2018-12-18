import Layout from '../components/Layout';
import List from '../components/List';
import Details from '../components/Details';

const listItens = [{
    id:142934859564,
    createdAt: 1,
    approvedAt: null,
    status: 'PENDING',
    customer: {
        fullName: 'Guilherme Pereira',
        socialId: '89987656789',
        age: 25,
        gener:'M',
        estadoCivil:'Solteiro',
        state:'SC',
        dependents: 2,
        salary: 5000.00,
    }
},
{
    id:145642452345,
    createdAt: 1,
    approvedAt: null,
    status: 'APPROVED',
    customer: {
        fullName: 'Bruno da Silva',
        socialId: '00912343200',
        age: 30,
        gener:'M',
        estadoCivil:'Casado',
        state:'SC',
        dependents: 1,
        salary: 10000.00,
    }
}]

const PropostaPage = () => (
    <Layout>  
        <List data={listItens}/>
        <Details data={listItens[0]}/>
    </Layout> 
)

export default PropostaPage