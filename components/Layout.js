import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Container,Col } from 'reactstrap';

export default (props) => (
    <Container>
        <Row>
            <h4>Proposta de Crédito</h4>
        </Row>
        <Row>
            <Col>
                {props.children[0]}
            </Col>

            <Col>
                {props.children[1]}
            </Col>
            
        </Row>
    </Container>
)