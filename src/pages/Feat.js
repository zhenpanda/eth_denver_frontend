import React, { Component } from 'react';
import $ from 'jquery';

import GrantsList from '../components/GrantsList';
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
                // console.log("this feat list...");
                // console.log(result);
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

    displayFeats() {
        // FEATAddress:"0x627306090abab3a6e1400e93458d60c78a8bef59"
        // FEATName:"Bob Jones Group"
        // FEATSymbol:"BJG"
        // creatorAddress:"0x627306090abab3a6e1400e9345bc60c78a8bef57"
        if(this.state.featList) {
            // console.log(this.state.featList);
            let feats = this.state.featList;
            return (
                <div className=" delay300">
                    {feats.map((c,i,a)=>{
                        return (
                            <li className="single-feat-block moveFromLeftFade" key={i}>
                                <div className="single-feat-section">
                                <div className="row">
                                    <div className="col s12 m12">
                                        <div className="single-feat-text">Name: <p className="single-feat-add-text">{c.FEATName}</p></div>
                                        <div className="single-feat-text">Symbol: <p className="single-feat-add-text">{c.FEATSymbol}</p></div>
                                        <div className="single-feat-text">Address: <p className="single-feat-add-text">{c.FEATAddress}</p></div>
                                        <div className="single-feat-text">Creator: <p className="single-feat-add-text">{c.creatorAddress}</p></div>
                                    </div>
                                </div>
                                </div>
                            </li>
                        )
                    })}
                </div>
            );
        }
    }
    displayGrants() {
        if(this.state.grantList) {
            let grantList = this.state.grantList;
            return (
                <div className="grants-list-row">
                    {grantList.map((c,i,a)=>{
                        if(i < 4) {
                            return (<GrantsList />)
                        }
                    })}
                </div>
            );
        }
        // <GrantsList />
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
        <div className="row clean-row">
            <div className="col s4 m4">
                <div className="card card-panel list-of-feats-block">
                    <div className="list-of-feats-text">Featured Feats List</div>
                    <div className="list-of-feats-section">
                        {this.displayFeats()}
                    </div>
                </div>
            </div>
            <div className="col s8 m8">
                <div className="card card-panel list-of-grants-block">
                    <div className="list-of-grants-text">Grants in Feat</div>
                    <div className="list-of-grants-section">
                        {this.displayGrants()}
                    </div>
                </div>
            </div>
        </div>
        <div className="feat-bot-pic-block">
            <img src={peopleStage} className="feat-bot-pic-img moveFromBottomFade delay300" /> 
        </div>
      </div>
    );
  }
};

export default Feat;
