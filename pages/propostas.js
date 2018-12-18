import Layout from '../componets/Layout';
import List from '../components/List';
import Details from '../components/Details';

const listItens = [{
    nome: 'Guilherme',
    cpf: '081011411',
    idade:10,
    sexo:'M',
    estadoCivil:'Solteiro',
    estado:"SC",
    dependentes:10,
    renda:1500
},
{
    nome: "Bruno",
    cpf: '00936788765' ,
    idade:10,
    sexo:'M',
    estadoCivil:'Solteiro',
    estado:"SC",
    dependentes:10,
    renda:1500 
}]

export default ()=>(
 <Layout>  
     <List data={listItens}/>
     <Details/>
</Layout> 
)