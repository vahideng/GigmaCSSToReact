import React, { Component } from 'react';

import logo from './logo.svg';

import './config.scss';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: ''
  };

  componentDidMount() {
    const url = '/api/hello';
    fetch(url)
      .then(
        response => response.json() // .json(), etc.
        // same as function(response) {return response.text();}
      )
      .then(html => console.log(html));
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    console.log(this.state.response, 'thisstate');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {this.state.response.AlephDesignTokenFigma &&
          this.state.response.AlephDesignTokenFigma.map((res, i) => {
            return (
              <div style={{ display: 'flex', padding: '20px' }} key={i}>
                <span>{res.name}</span>
                <span>{res.hex}</span>{' '}
              </div>
            );
          })}
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="container-s">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;
