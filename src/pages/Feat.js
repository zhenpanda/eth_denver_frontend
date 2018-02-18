import React, { Component } from 'react';
import $ from 'jquery';

import logo5 from '../assets/images/logo5.png';
import peopleStage from '../assets/images/ppl_stage.png';
import getWeb3 from "../utils/getWeb3";
import {getAllGrants, getAllFEATs, getAllFEATProposalsForFeat} from "../utils/web3Calls";

class Feat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            web3: null,
            grantList: [],
            featList: [],
            proposalsForCurrentFeat:[]
        };
    }

    componentDidMount() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        getWeb3.then(results => {
            this.setState({
                web3: results.web3
            });
            getAllGrants(results.web3).then((result) => {
                this.setState({
                    grantList: result.reverse()
                });
                console.log(result);
            });
            getAllFEATs(results.web3).then((result) => {
                this.setState({
                    featList: result.reverse()
                });
                console.log(result);
            });
        }).catch(() => {
            console.log('Error finding web3.')
        });
    }

    getProposalsForFeat(featAddress) {
        getAllFEATProposalsForFeat(this.state.web3, featAddress).then((result) => {
            this.setState({
                proposalsForCurrentFeat: result.reverse()
            });
        });
    }

    displayGrants() {
        let test = [
            {"grantTitle": "Building Elec Dam","grantTopic": "Infrastructure"},
            {"grantTitle": "Quantum Research","grantTopic": "Research"}
        ];
        {/* 
        amountToFund
        grantAddress
        proposerAddress 
        */}
        return (
            <div className=" moveFromTopFade delay300">
                {test.map((c,i,a)=>{
                    return (
                    <li className="single-feat-block" key={i}>
                        <div className="row">
                            <div className="col s3 m3">
                                <p className="">{c.grantTitle}</p>
                            </div>
                            <div className="col s3 m3">
                                <p className="">{c.grantTopic}</p>
                            </div>
                            <div className="col s3 m3"></div>
                            <div className="col s3 m3">
                            </div>
                        </div>
                    </li>
                    )
                })}
            </div>
        );
    }

  render() {
    return (
      <div className="feat-area-bg">
        <div className="row">
            <div className="col s4 m4" />
            <div className="col s4 m4">
                <div className="card card-panel feat-header-section moveFromTopFade delay100">
                    <div className="feat-header-body">
                    <div className="row">
                        <div className="col s1 m1" />
                        <div className="col s4 m4">
                            <img src={logo5} className="feat-header-img" />
                        </div>
                        <div className="col s6 m6">
                            <div className="feat-header-text">Feat Curation</div>
                        </div>
                        <div className="col s1 m1" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="col s4 m4" />
        </div>
        <div className="row">
            <div className="col s4 m4">
                <div className="card card-panel list-of-feats-block">
                    <div className="list-of-feats-text">Featured Feats List</div>
                    <div className="list-of-feats-section">
                </div>
                </div>
            </div>
            <div className="col s6 m6">
            </div>
            <div className="col s2 m2" />
        </div>
        <div className="feat-bot-pic-block">
            <img src={peopleStage} className="feat-bot-pic-img moveFromBottomFade delay300" /> 
        </div>
      </div>
    );
  }
};

export default Feat;
