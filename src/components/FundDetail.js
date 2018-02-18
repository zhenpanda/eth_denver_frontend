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
                    <div className="fund-info-block-single moveFromTopFade">Grant Address:</div>
                    <div className="fund-info-block-single moveFromTopFade delay100">Project Name:</div>
                    <div className="fund-info-block-single moveFromTopFade delay100">Grant Topic:</div>
                    <div className="fund-info-block-single moveFromTopFade delay200">Amount Needed:</div>
                    <div className="fund-info-block-single moveFromTopFade delay200">Amount Granted:</div>
                    <div className="fund-info-block-single moveFromTopFade delay300">Summary:</div>
                    <div className="fund-info-block-text moveFromTopFade delay300">IPFS Hash:</div>
                    <div className="fund-info-block-single moveFromTopFade delay300">Funded:</div>
                </div>
            </div>
            <div className="col s8 m8">
                <div className="fund-info-block-right">
                    <div className="fund-info-block">
                        <div className="fund-info-block-single-right moveFromLeftFade delay200">{this.props.details.grantAddress}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay200">{this.props.details.grantTitle}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay300">{this.props.details.grantTopic}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay300">{this.props.details.amountNeeded}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay400">{this.props.details.amountGranted}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay400">{this.props.details.summary}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay500">{this.props.details.ipfsDescriptionHash}</div>
                        <div className="fund-info-block-single-right moveFromLeftFade delay500">{this.props.details.funded}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};

export default FundDetail;
