import React from 'react';
import {Button, Col, Input, Row} from "reactstrap";
import Link from "next/link";

import Layout from '../components/Layout';
import Details from '../components/Details';
import List from '../components/List';

import ProposalService from '../services/ProposalService';


class ProposalPage extends React.Component {

    constructor(props){
        super(props);
        this._seachBySocialId = this._seachBySocialId.bind(this);
        this.state = {
            socialId:null,
        };
        this.setState = this.setState.bind(this);
    }

    _seachBySocialId(event){
        this.setState({socialId:event.target.value})
    }

    render(){
        return (
        <Layout>
            <Col md={4}>
                <Row>
                    <Col md={9}>
                    <Input text="search" placeholder="Buscar CPF" onBlur={(event)=>this._seachBySocialId(event)} />
                    </Col>
                    <Link href={{query: { socialid: this.state.socialId} }}>
                        <Button>Buscar</Button>
                    </Link>
                </Row>
                <List data={this.props.proposals}/>
            </Col>
            <Col md={8}>
                <Details data={this.props.selected}/>
            </Col   >
        </Layout>);
    }

    static async getInitialProps({ req,query }) {
        try {
            const proposalService = new ProposalService();
            const allProposals = await proposalService.getProposals(query.socialid);
            const selectProposal = allProposals.filter(item => item.id == query.id)[0] || null;

            return {
                proposals: allProposals,
                selected: selectProposal,
            }
        } catch (e) {
            console.error("Erro ao consultar")
        }
    }
}


export default ProposalPage;