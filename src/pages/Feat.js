import React, { Component } from 'react';
import $ from 'jquery';

import peopleStage from '../assets/images/ppl_stage.png';

class Feat extends Component {
    componentDidMount() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    }

  render() {
    return (
      <div className="feat-area-bg">
        <div className="row">
            <div className="col s4 m4" />
            <div className="col s4 m4">
                <div className="card card-panel feat-header-section">
                </div>
            </div>
            <div className="col s4 m4" />
        </div>
        <div className="feat-bot-pic-block">
            <img src={peopleStage} className="feat-bot-pic-img moveFromBottomFade delay300" /> 
        </div>
      </div>
    );
  }
};

export default Feat;
