import React from 'react';
import {Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import '../css/newCustumer.css';

class NewCustomer extends React.Component {
    constructor(props) {
        super(props);

        this._custumer = {
            name:""
        };
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    alteraBotao(evento){
        console.log(evento)
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Cadastro de Clientes</ModalHeader>
                    <ModalBody>
                        <Row className="row">
                            <Col md={12}>
                                <Input type="text" placeholder="Nome"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" placeholder="CPF"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Input type="number" placeholder="Idade"/>
                            </Col>

                            <Col md={6}>
                                <Input type="number" placeholder="Dependentes"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" placeholder="Sexo"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" placeholder="Estado Civil"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" placeholder="UF"/>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Salvar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}



export default NewCustomer;