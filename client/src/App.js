import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
class App extends Component {

  state = {
    strikes: 0,
    balls: 0,
    fouls: 0 // alternatively can just check strikes to update info
    // hits: 0, just resets the counts anyway

  }

  ballHandler = () => {
    this.state.balls < 3 ?  this.setState({ balls: this.state.balls + 1}) : this.setState({ 
      balls: 0,
      strikes: 0,
      fouls: 0
    })
  }

  strikeHandler = () => {
    this.state.strikes < 2 ?  this.setState({ strikes: this.state.strikes + 1}) : this.setState({ strikes: 0, fouls: 0, balls: 0})
  }

  foulHandler = () => {
    this.setState({fouls: this.state.fouls + 1})
    if(this.state.strikes < 2){
      this.setState({ 
        strikes: this.state.strikes + 1,

      })
    }
  }

  hitHandler = () => {
    this.setState({
      strikes: 0,
      balls: 0,
      fouls: 0
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Baseball Counter App</h1>
        <Display 
        strikes={this.state.strikes}
        balls={this.state.balls}
        fouls={this.state.fouls}
        />
        <Dashboard 
        ballHandler={this.ballHandler}
        strikeHandler={this.strikeHandler}
        foulHandler={this.foulHandler}
        hitHandler={this.hitHandler}
        />
      </div>
    );
  }
}

export default App;
