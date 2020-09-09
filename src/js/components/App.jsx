import React from 'react';
// import { render } from 'react-dom';
import Form from './Form.jsx';
import CalContainer from './CalContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: [],
    };
    this.clickSubmit = this.clickSubmit.bind(this);
    this.clickUndo = this.clickUndo.bind(this);
  }

  clickSubmit(e) {

  }

  clickUndo(e) {

  }

  render() {
    return (
      <div>
        <h1>App Component Test</h1>
        <Form
          clickSubmit={this.clickSubmit}
          clickUndo={this.clickUndo}
        />
        <CalContainer
          entry={this.state.entry}
        />
      </div>
    );
  }
}

// const App = (props) => (
//   <div>
//     {/* <h1>App Component Test</h1> */}
//     <Form />
//     <CalContainer />
//   </div>
// );

export default App;
