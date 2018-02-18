import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import getWeb3 from './utils/getWeb3'

import './css/index.css'
import './css/home.css'
import './css/grant.css'
import './css/fund.css'
import './css/feat.css'

import Home from './pages/Home';
import Grant from './pages/Grant';
import Fund from './pages/Fund';
import Feat from './pages/Feat';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  // console.log(this.props.match.url);
  routeRender() {
    switch (this.props.match.url) {
      case "/": return( <Route path="/" component={ Home } />);
      case "/grant": return( <Route path="/grant" component={ Grant } />);
      case "/fund": return( <Route path="/fund" component={ Fund } />);
      case "/feat": return( <Route path="/feat" component={ Feat } />);
      default: break;
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
        
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  render() {
    return (
      <div className="App">
        {this.routeRender()}
      </div>
    );
  }
}

export default App
