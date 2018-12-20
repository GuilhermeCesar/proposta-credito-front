/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import {Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';

class NewCustomer extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Cadastro de Clientes</ModalHeader>
                    <ModalBody>
                        <Row>
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
                            <Col md={12}>
                                <Input type="number" placeholder="Idade"/>
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
                                <Input type="text" placehouder="UF"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="number" placehouder="Dependentes"/>
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