import React, { Component } from 'react';

class FundDetail extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="fund-details">
        {/* bot left grant info */}
        <div className="row">
            <div className="col s12 m12">
                <div className="fund-header-text-bot">Fund Proposal Details</div>
            </div>
        </div>
        <div className="row">
            <div className="col s4 m4">
                {/* <div className="fund-info-bar" /> */}
                <div className="fund-info-block">
                    <div className="fund-info-block-single">Grant Address:</div>
                    <div className="fund-info-block-single">Project Name:</div>
                    <div className="fund-info-block-single">Grant Topic:</div>
                    <div className="fund-info-block-single">Amount Needed:</div>
                    <div className="fund-info-block-single">Amount Granted:</div>
                    <div className="fund-info-block-single">Summary:</div>
                    <div className="fund-info-block-text">IPFS Hash:</div>
                    <div className="fund-info-block-single">Funded:</div>
                </div>
            </div>
            <div className="col s8 m8">
                <div className="fund-info-block-right">
                    <div className="fund-info-block">
                        <div className="fund-info-block-single-right">0x3618516F45CD3c913F81F9987AF41077932Bc40d</div>
                        <div className="fund-info-block-single-right">Space Mission Alpha Onias III</div>
                        <div className="fund-info-block-single-right">Science</div>
                        <div className="fund-info-block-single-right">50,000 ETH</div>
                        <div className="fund-info-block-single-right">1000 ETH</div>
                        <div className="fund-info-block-single-right">"Lorem ipsum dolor sit amet, nostrum erroribus vis no, aliquid molestiae instructior usu in. Exerci everti neglegentur at cum. Pro id aeque congue definitionem</div>
                        <div className="fund-info-block-single-right">056a9ec2e4847755d9012f31dfecfeb193a42330c3</div>
                        <div className="fund-info-block-single-right">No</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};

export default FundDetail;
