import React, { Component } from 'react';

import axios from './axios.config';
import Button from './components/Button/Button';
import TextField from './components/textField';
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

class App extends Component<any, any> {
  state = {
    response: {},
    post: '',
    responseToPost: ''
  };

  componentDidMount() {
    axios.get(`figma-token`).then(res => {
      this.setState({ response: JSON.parse(res.data.AlephDesignTokenFigma) });
    });
  }

  render() {
    let button = null;

    button = (
      <React.Fragment>
        {Object.entries(this.state.response).length !== 0 ? (
          <>
            <Button color={this.state.response} title="Add" type="primary" />

            <Button
              color={this.state.response}
              title="Add"
              type="PrimaryDisabled"
            />
            <Button
              color={this.state.response}
              title="Search"
              type="PrimaryDisabledNoBackgroud"
            />
          </>
        ) : null}
        {/* <Button
           color = {this.state.response}
            title="Add"
            type="primary"
          /> */}

        <TextField type="ACTIVE" status="Error" labelName="First Name" />
        <TextField type="Error" labelName="First Name" />
        <TextField type="ACTIVE" status="Disabled" labelName="First Name" />
        <TextField
          errorMessage="please enter a name"
          type="ACTIVE"
          status="Error"
          labelName="First Name"
        />
      </React.Fragment>
    );

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
