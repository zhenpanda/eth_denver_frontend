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
                        <div className="fund-info-block-single-right">{this.props.details.grantAddress}</div>
                        <div className="fund-info-block-single-right">{this.props.details.grantTitle}</div>
                        <div className="fund-info-block-single-right">{this.props.details.grantTopic}</div>
                        <div className="fund-info-block-single-right">{this.props.details.amountNeeded}</div>
                        <div className="fund-info-block-single-right">{this.props.details.amountGranted}</div>
                        <div className="fund-info-block-single-right">{this.props.details.summary}</div>
                        <div className="fund-info-block-single-right">{this.props.details.ipfsDescriptionHash}</div>
                        <div className="fund-info-block-single-right">{this.props.details.funded}</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};

export default FundDetail;
