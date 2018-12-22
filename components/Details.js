import PropTypes from 'prop-types';
import {Card, CardBody, CardSubtitle, CardTitle,CardText} from 'reactstrap';
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
                            <CardText>{proposta.reasonDisaproved}</CardText>:""
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