import React, { Component } from 'react';
import $ from 'jquery';

import FundDetails from '../components/FundDetail';
import logo4 from '../assets/images/logo4.png';

class Fund extends Component {
    componentDidMount() {
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    }
    makeList(inputList) {
        const data =[
            {"Title": "Mission Alpha On","Topic": "Science","Address": "0x98D03320f8AE806Fcb35F13e73398009caf9C72c"},
            {"Title": "Cancer Research","Topic": "Science","Address": "0x80cfD274937D40c5e3D0e910a81D3330f3C10898"},
            {"Title": "Building Elec Dam","Topic": "Infrastructure","Address": "0xD18785571AE7F3b100e5B8788E3827120282f170"}
        ];
        return (
          <div className=" moveFromTopFade delay300">
            {data.map((c,i,a)=>{
                return (
                <li className="single-grant-block" key={i}>
                    <div className="row">
                        <div className="col s3 m3">
                            <p className="single-grant-title">{c.Title}</p>
                        </div>
                        <div className="col s2 m2">
                            <p className="single-grant-topic">{c.Topic}</p>
                        </div>
                        <div className="col s7 m7">
                            <p className="single-grant-address">{c.Address}</p>
                        </div>
                    </div>
                </li>
                )
            })}
          </div>
        );
    }
    displayFundDetails() {
        if(true) {
            return (<FundDetails />);
        }else{
            return (<div className="fund-standin" />);
        }
    }

  render() {
    return (
      <div className="fund-area-bg">
            {/* fund header */}
            <div className="fund-header-block">
                <div className="row">
                    <div className="col s1 m1" />
                    <div className="col s4 m4">
                        <div className="fund-header-card moveFromTopFade">
                            {/* top left header */}
                            <div className="row">
                                <div className="col s1 m1" />
                                <div className="col s3 m3">
                                    <img src={logo4} className="fund-header-logo4" />
                                </div>
                                <div className="col s8 m8">
                                    <div className="fund-header-text">Fund Proposal Page</div>
                                </div>
                            </div>
                        </div>
                        <div className="fund-info-section moveFromBottomFade">
                            {this.displayFundDetails()}
                        </div>
                    </div>
                    <div className="col s1 m1">
                        <div className="fund-header-card-line moveFromLeftFade" />
                        <div className="fund-header-card-line-two moveFromRightFade" />
                        <div className="fund-header-card-line-three moveFromRightFade delay100" />
                    </div>
                    <div className="col s5 m5">
                        <div className="fund-header-card-right moveFromRightFade">
                            <div className="row">
                                <div className="col s12 m12">
                                <div className="fund-header-text-left">Select a grant to fund:</div>
                                    <div className="fund-header-card-block">
                                        <div className="single-grant-top">
                                            <p className="single-grant-label">Title</p>
                                            <p className="single-grant-label-next">Topic</p>
                                            <p className="single-grant-label-next">Address</p>
                                        </div>
                                        {this.makeList()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fund-header-card-mid moveFromTopFade" />
                        <div className="fund-body-card-right moveFromRightFade">
                            <div className="fund-header-text-right">Review Grant Details before Funding</div>
                            <div className="row">
                                <div className="col s1 m1" />
                                <div className="col s5 m5">
                                    <div className="fund-btn">
                                        <a className="waves-effect cyan lighten-1 btn">Fund Grant</a>
                                    </div>
                                </div>
                                <div className="col s5 m5">
                                    <div className="fund-btn">
                                        <a className="waves-effect orange lighten-2 btn">Submit to Feat</a>
                                    </div>
                                </div>
                                <div className="col s1 m1" />
                            </div>
                        </div>
                    </div>
                    <div className="col s1 m1" />
                </div>
            </div>

      </div>
    );
  }
};

export default Fund;