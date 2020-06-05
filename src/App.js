import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{

  state = {
    username:'Supermax'
  }

  usernameChangedHandler = (event) =>{
      this.setState({username: event.target.value})
  }

  render(){
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
    //     <UserOutput  userName={this.state.username}/>
    //     <UserOutput  userName={this.state.username}/>
    //     <UserOutput  userName={this.state.username}/>
    //   </header>
     <div>
       <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
        <UserOutput  userName={this.state.username}/>
        <UserOutput  userName={this.state.username}/>
        <UserOutput  userName={this.state.username}/>
    </div>
  );
  }
}

export default App;
