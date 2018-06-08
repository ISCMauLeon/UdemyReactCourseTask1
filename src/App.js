import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "iscmauleon"
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const inputStyle = {
      margin: '10px auto',
      padding: '8px',
      width: '70%',
      height: '20px',
      
      color: '#ccc',
      font: 'inherit',
      fontWeight: 'bold',

      backgroundColor: 'white',

      border: '1px solid gray',
      borderRadius: '8px',
      
      boxShadow: '0 2px 3px #ccc',
      outline: 'none'
    };

    return (
      <div className="App">
        <UserInput style={inputStyle} username={this.state.username} change={this.usernameChangeHandler}/>

        <UserOutput username={this.state.username}>Duis nulla Lorem eiusmod est magna cupidatat reprehenderit proident ipsum.</UserOutput>
        <UserOutput username={this.state.username}>In consequat minim anim incididunt esse quis enim minim.</UserOutput>
      </div>
    );
  }
}

export default App;
