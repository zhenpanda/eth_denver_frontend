import React, { Component } from 'react';

class GrantsList extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    //   creatorAddress:"0x627306090abab3a6e1400e9345bc60c78a8bef57"
    //   grantAddress:"0xc7a1a01b235183d375c6f73321dcef36e57526ae"
    //   grantTitle:"Space Mission Alpha Onias III"
    //   grantTopic:"Science Exploration and Discovery"
    return (
      <div className="grants-list-section">
        <div className="row clean-row">
            <div className="col s1 m1 clean-row" />
            <div className="col s5 m5 clean-row">
                <div>Grant Title: Space Mission Alpha Onias III"</div>
                <div>Grant Topic: Science Exploration and Discovery</div>
            </div>
            <div className="col s5 m5 clean-row">
                <div>Creator Address: 0x627306090abab3a6e1400e9345bc60c78a8bef57</div>
                <div>Grant Address: 0xc7a1a01b235183d375c6f73321dcef36e57526ae</div>
            </div>
            <div className="col s1 m1 clean-row" />
        </div> 
      </div>
    );
  }
};

export default GrantsList;
