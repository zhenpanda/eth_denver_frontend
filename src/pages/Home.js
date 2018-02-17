import React, { Component } from 'react';

import splashImg from '../assets/images/splash.png';

class Home extends Component {

  componentDidMount() {
    // console.log(this.props.page);
  }
  render() {
    return (
      <div className="home-area-bg">
        <div className="row">
          <div className="col s2 m2" />
          <div className="col s8 m8 home-splash-block">
            <img src={splashImg} className="home-splash-img card z-depth-3" />
          </div>
          <div className="col s2 m2" />
        </div>
      </div>
    );
  }
};

export default Home;
