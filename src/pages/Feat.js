import React, { Component } from 'react';
import $ from 'jquery';

import FundDetails from '../components/FundDetail';
import logo4 from '../assets/images/logo4.png';

class Feat extends Component {
    componentDidMount() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    }
  render() {
    return (
      <div className="feat-area-bg">
        Feat
      </div>
    );
  }
};

export default Feat;
