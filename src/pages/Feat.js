import React, { Component } from 'react';
import $ from 'jquery';

import logo5 from '../assets/images/logo5.png';
import peopleStage from '../assets/images/ppl_stage.png';

class Feat extends Component {
    componentDidMount() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    }
    displayGrants() {
        let test = [
            {"grantTitle": "Building Elec Dam","grantTopic": "Infrastructure"},
            {"grantTitle": "Quantum Research","grantTopic": "Research"}
        ];
        {/* amountToFund
        grantAddress
        proposerAddress */}
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
            <div className="col s1 m1" />
            <div className="col s10 m10">
                {this.displayGrants()}
            </div>
            <div className="col s1 m1" />
        </div>
        <div className="feat-bot-pic-block">
            <img src={peopleStage} className="feat-bot-pic-img moveFromBottomFade delay300" /> 
        </div>
      </div>
    );
  }
};

export default Feat;
