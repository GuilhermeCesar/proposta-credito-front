import PropTypes from 'prop-types';
import {Row} from 'reactstrap';
import {HelperProposal} from '../services/ProposalService'

const Details = (props) => {
    const proposta = props.data;
    const {customer} = proposta;

    return (
        <div>
            { props.data
            ?
                <div>
                    <Row>
                        Nome: {customer.fullName}
                    </Row>
                    <Row>
                    Estado da proposta: {HelperProposal(proposta.status)}
                    </Row>
                </div>
            :
                <h4>Clique em um item para visualizar</h4>
            }
        </div>
    )
};



Details.propTypes = {
    data: PropTypes.object,
};

export default Details;