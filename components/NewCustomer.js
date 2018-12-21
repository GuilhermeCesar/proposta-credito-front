import React from 'react';
import {Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import PropostaService from '../services/ProposalService.js'

import '../css/newCustumer.css';

class NewCustomer extends React.Component {
    constructor(props) {
        super(props);

        this._custumer = {};
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this._saveCustomer = this._saveCustomer.bind(this);
        this._propostaService = new PropostaService();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    _saveCustomer(){
        try{
            this._propostaService.saveCostumer(this._custumer);
        }catch (e) {
            console.error(e);
        }
        this.toggle();
    }

    _changeEventInput(evento){
        this._custumer[evento.target.name] = evento.target.value;
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
                                <Input type="text" required name="fullName" placeholder="Nome" onChange={event=>this._changeEventInput(event)}/>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col md={12}>
                                <Input type="text" required name="socialId" placeholder="CPF" onChange={event=>this._changeEventInput(event)}/>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col md={6} lg={6} xl={6}>
                                <Input type="number" name="age" placeholder="Idade" onChange={event=>this._changeEventInput(event)}/>
                            </Col>
                            <Col md={6} lg={6}  xl={6}>
                                <Input type="number" name="dependents" placeholder="Dependentes"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text"  name="gener" placeholder="Sexo"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="select" name="" placeholder="Estado Civil">
                                    <option>Solteiro(a)</option>
                                    <option>Casado(a)</option>
                                    <option>Divorciado(a)</option>
                                    <option>Viuvo(a)</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Input type="text" name="state" placeholder="UF"/>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this._saveCustomer}>Salvar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default NewCustomer;