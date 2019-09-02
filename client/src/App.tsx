import React, { Component } from 'react';

import axios from './axios.config';
import Button from './components/Button/Button';
import './config.scss';

// interface IResponse {
//   [key: string]: any;
// }

// interface IProps {}

// interface IState {
//   response?: any;
//   post: string;
//   responseToPost: string;
// }

class App extends Component {
  state = {
    response: {
      token: {
        colors: ''
      }
    },
    post: '',
    responseToPost: ''
  };

  componentDidMount() {
    axios.get(`figma-token`).then((res) => {
      console.log(res);

      this.setState({ response: res.data.AlephDesignTokenFigma });
    });
  }

  render() {
    console.log(this.state.response.token, 'thisstate');

    let button = null;

    if (this.state.response && this.state.response.token.colors) {
      button = (
        <React.Fragment>
          <Button
            styleFromFigma={this.state.response.token.colors}
            title="Add"
            type="primary"
          />
          <Button
            styleFromFigma={this.state.response.token.colors}
            title="Add"
            type="PrimaryDisabled"
          />
          <Button
            styleFromFigma={this.state.response.token.colors}
            title="Add"
            type="primary_second"
          />
          <Button
            styleFromFigma={this.state.response.token.colors}
            title="Add"
            type="PrimaryDisabledNoBackgroud"
          />
        </React.Fragment>
      );
    }

    return <div className="App"> {button}</div>;
  }
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
// {this.state.response && this.state.response.token &&
// this.state.response.token.map((res, i) => {

//   return (
//     <div style={{ display: 'flex', padding: '20px' }} key={i}>
//       <span>{res.name}</span>
//       <span>{res.hex}</span>{' '}
//     </div>
//   );
// })}
// <form onSubmit={this.handleSubmit}>
// <p>
//   <strong>Post to Server:</strong>
// </p>
// <input
//   type="text"
//   value={this.state.post}
//   onChange={e => this.setState({ post: e.target.value })}
// />
// <button className="container-s">Submit</button>
// </form>
// <p>{this.state.responseToPost}</p>
