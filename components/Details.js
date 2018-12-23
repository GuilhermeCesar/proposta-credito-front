import PropTypes from 'prop-types';
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import {HelperProposal} from '../services/ProposalService'
import '../css/detail.css';

const Details = (props) => {
    const proposta = props.data;

    return (
        <div>
            { props.data
            ?
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{proposta.customer.fullName}</CardTitle>
                        <CardSubtitle>{HelperProposal(proposta.status)}</CardSubtitle>
                        {proposta.disapprovedAt?
                            <CardText>{proposta.reasonDisaproved}</CardText>:
                            <div>
                                <div>Limite entre {proposta.minLimit} e {proposta.maxLimit}</div>
                            </div>
                        }
                    </CardBody>
                </Card>
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