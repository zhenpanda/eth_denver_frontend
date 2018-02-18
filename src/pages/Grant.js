import React, { Component } from 'react';
import $ from 'jquery';

import logo3 from '../assets/images/logo3.png';

class Grant extends Component {
  componentDidMount() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
  }

  render() {
    return (
      <div className="grant-area-bg">
        {/* grant header */}
        <div className="grant-header-block moveFromTopFade">
          <div className="row">
            <div className="col s3 m3" />
            <div className="col s6 m6">
              <div className="grant-header-card card">
                <div className="grant-header-top" />
                <div className="row">
                  <div className="col s2 m2">
                    <div className="circle-teal-one" />
                  </div>
                  <div className="col s2 m2">
                    <img src={logo3} className="grant-header-logo3" />
                  </div>
                  <div className="col s6 m6">
                  <div className="grant-header-text">Grant Proposal Page</div>
                  </div>
                  <div className="col s2 m2" />
                </div>
              </div>
            </div>
            <div className="col s3 m3" />
          </div>
        </div>

        {/* grant body */}
        <div className="row">
          <div className="col s1 m1" />
          <div className="col s6 m6">

            <div className="grant-body-card card moveFromBottomFade delay200 z-depth-2">
            <div className="row grant-body-card-first">
                <div className="grant-header-top" />
                <div className="col s1 m1" />
                <div className="col s10 m10">
                  <div className="grant-body-form">
                    <div className="input-field">
                      <label className="active" htmlFor="grant-name">Grant Name:</label>
                      <input defaultValue="Space Mission Alpha Onias III" id="grant-name" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s1 m1" />
              </div>
              <div className="row grant-body-card-second">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                  <div className="grant-body-form">
                    <div className="input-field">
                      <label className="active" htmlFor="ipfs-hash">IPFS Description Hash:</label>
                      <input defaultValue="056a9ec2e4847755d9012f31dfecfeb193a42330c3e83b9fd52086fc4d5eabb5" id="ipfs-hash" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s1 m1" />
              </div>
              <div className="row grant-body-card-third">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                  <div className="grant-body-form">
                    <div className="input-field">
                      <label className="active" htmlFor="grant-topic">Grant Topic:</label>
                      <input defaultValue="Science Exploration and Discovery" id="grant-topic" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s1 m1" />
              </div>
              <div className="row grant-body-card-fourth">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                  <div className="grant-body-form">
                    <div className="input-field">
                      <label className="active" htmlFor="amount-needed">Amount Needed:</label>
                      <input defaultValue="50,000 ETH" id="amount-needed" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s1 m1" />
              </div>
              <div className="row grant-body-card-fifth">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                  <div className="grant-body-form">
                    <div className="input-field">
                      <label className="active" htmlFor="summary">Proposal Summary:</label>
                      <textarea className="materialize-textarea" data-length="320" defaultValue="Lorem ipsum dolor sit amet, nostrum erroribus vis no, aliquid molestiae instructior usu in. Exerci everti neglegentur at cum. Pro id aeque congue definitionem" id="summary" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s1 m1" />
              </div>
            </div>

          </div>

          <div className="col s4 m4">
            
            <div className="grant-submit-card card moveFromBottomFade delay200 z-depth-1">
              <div className="grant-submit-bar">
                <div className="row">
                  <div className="col s2 m2" />
                  <div className="col s2 m2">
                    <i className="fa fa-cogs gear-icon"></i>
                  </div>
                  <div className="col s6 m6">
                    <div className="click-sumbit-text">Click sumbit when ready!</div>
                  </div>
                  <div className="col s2 m2" />
                </div>
              </div>

              <div className="grant-submit-block">
                <div className="circle-teal-one grant-submit-square" />
                <a className="waves-effect waves-light btn">Sumbit Grant Proposal</a>
              </div> 

            </div>

          </div>
          <div className="col s1 m1" />
        </div>

      </div>
    );
  }
};

export default Grant;