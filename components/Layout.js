import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Row,Container,Col } from 'reactstrap';

export default (props) => (
    <Container>
        <Row>
            <h4>Proposta de Crédito</h4>
        </Row>
        <Row>
            {props.children}
        </Row>
    </Container>
)