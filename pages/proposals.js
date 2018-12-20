import React from 'react';
import {Col} from "reactstrap";

import Layout from '../components/Layout';
import Details from '../components/Details';
import List from '../components/List';

import ProposalService from '../services/ProposalService';


const ProposalPage = props => (
    <Layout>
        <Col md={4}>
            <List data={props.proposals}/>
        </Col>
        <Col md={8}>
            <Details data={props.selected}/>
        </Col>
    </Layout>
);

ProposalPage.getInitialProps = async ({ req, query }) => {
    const  proposalService =  new ProposalService();
    const allProposals = await proposalService.getAllProposals();

     const selectProposal = allProposals.filter(item => item.id == query.id)[0] || null;
    return {
        proposals: allProposals,
        selected: selectProposal,
    }
};

export default ProposalPage;