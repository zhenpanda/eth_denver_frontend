import React, { Component } from 'react';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';

import logo3 from '../assets/images/logo3.png';
import getWeb3 from './../utils/getWeb3'
import {createGrant} from './../utils/web3Calls';

const ipfsAPI = require('ipfs-api');
const Buffer = require('buffer/').Buffer;  // note: the trailing slash is important!

class Grant extends Component {

  constructor(props) {
      super(props);
      this.state = {
          web3: null,
          name: 'Space Mission Alpha Onias III',
          ipfsHash: null,
          topic: 'Science Exploration and Discovery',
          amountNeeded: '10000000000000000000',
          summary: 'Lorem ipsum dolor sit amet, nostrum erroribus vis no, aliquid molestiae instructior usu in. Exerci everti neglegentur at cum. Pro id aeque congue definitionem'

      };
      this.ipfsApi = ipfsAPI({host: 'hackathon.paynelabs.net', port: '5001', protocol: 'http'});
      this.submitGrant = this.submitGrant.bind(this);
      this.uploadFileClicked = this.uploadFileClicked.bind(this);
      this.captureFile = this.captureFile.bind(this);
      this.saveToIpfs = this.saveToIpfs.bind(this);
      this.arrayBufferToString = this.arrayBufferToString.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');

    getWeb3.then(results => {
          this.setState({
              web3: results.web3
          })

      }).catch(() => {
            console.log('Error finding web3.')
    })
  }

  submitGrant() {
      createGrant(this.state.web3,
          this.state.name,
          this.state.topic,
          this.state.amountNeeded,
          this.state.summary,
          this.state.ipfsHash).then((result) => {
            console.log(result);
            this.notify(result);
            // setTimeout(() => {window.location.href = "/"}, 5000);
      }).catch((error) => {
        console.log(error);
      })
  }
  notify(inputObj) {
    let msg = 'Success! Grant has been created!';
    let txMsg = "tx:" + inputObj.tx ;
    let hash = "blockHash:" + inputObj.receipt.blockHash;
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER
    });
    toast.warn(hash, {
      position: toast.POSITION.TOP_CENTER
    });
    toast.info(txMsg, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  ipfsClick() {
    $( "#ipfs-btn" ).click();
  }
    captureFile (event) {
        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];
        let reader = new window.FileReader();
        reader.onloadend = () => this.saveToIpfs(reader);
        reader.readAsArrayBuffer(file);
    }

    saveToIpfs (reader) {
        let ipfsId;
        const buffer = Buffer.from(reader.result);
        this.ipfsApi.add(buffer, { progress: (prog) => console.log(`received: ${prog}`) })
            .then((response) => {
                console.log(response);
                ipfsId = response[0].hash;
                console.log(ipfsId);
                this.setState({
                    ipfsHash: ipfsId
                });
                console.log(this.state);
            }).catch((err) => {
            console.error(err)
        })
    }

    arrayBufferToString (arrayBuffer) {
        return String.fromCharCode.apply(null, new Uint16Array(arrayBuffer));
    }

    handleSubmit (event) {
        event.preventDefault();
    }

  uploadFileClicked() {

  }

  render() {
    return (
      <div className="grant-area-bg">
        {/* grant header */}
        <ToastContainer autoClose={100000} />
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
                      <input defaultValue={this.state.name} id="grant-name" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col s1 m1" />
              </div>
              <div className="row grant-body-card-second">
                <div className="col s1 m1">
                    <form id='captureMedia' action="#" onSubmit={this.handleSubmit}>
                        <div className="file-field input-field">
                          <input id="ipfs-btn" type='file' onChange={this.captureFile} />
                        </div>
                    </form>
                </div>
                <div className="col s10 m10">
                  <div className="grant-body-form">
                    <div className="input-field">
                      <label className="active" htmlFor="ipfs-hash">IPFS Description Hash:</label>
                      <input value={this.state.ipfsHash} disabled={true} id="ipfs-hash" type="text" />
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
                      <input defaultValue={this.state.topic} id="grant-topic" type="text" />
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
                      <input defaultValue={this.state.amountNeeded} id="amount-needed" type="text" />
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
                      <textarea className="materialize-textarea" data-length="320" defaultValue={this.state.summary} id="summary" type="text" />
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
                    <div className="click-sumbit-text">Click submit when ready!</div>
                  </div>
                  <div className="col s2 m2" />
                </div>
              </div>

              <div className="grant-submit-block">
                <div className="circle-gold-one grant-submit-square" onClick={() => this.ipfsClick()} />
                <a className="waves-effect waves-light btn" onClick={this.submitGrant}>Sumbit Grant Proposal</a>
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