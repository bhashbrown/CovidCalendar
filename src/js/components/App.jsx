import React from 'react';
// import { render } from 'react-dom';
import Form from './Form.jsx';
// import CalContainer from './CalContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      location: '',
      people: '',
      entry: [],
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleLoc = this.handleLoc.bind(this);
    this.handlePeople = this.handlePeople.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
    this.clickUndo = this.clickUndo.bind(this);
  }

  handleDate(e) {
    this.setState({ date: e.target.value });
  }

  handleTime(e) {
    this.setState({ time: e.target.value });
  }

  handleLoc(e) {
    this.setState({ location: e.target.value });
  }

  handlePeople(e) {
    this.setState({ people: e.target.value });
  }

  clickSubmit() {
    this.setState((state) => {
      const entryObj = {
        date: state.date,
        time: state.time,
        location: state.location,
        people: state.people,
      };
      const entry = [...state.entry];
      entry.push(entryObj);
      console.log('*Entry Array*', entry);
      return { entry };
    });
  }

  clickUndo() {
    this.setState((state) => {
      const entry = [...state.entry];
      entry.pop();
      console.log('*updated Entry Arr*', entry);
      return { entry };
    });
  }

  render() {
    const {
      date, time, location, people,
    } = this.state;
    return (
      <div>
        <Form
          handleDate={this.handleDate}
          handleTime={this.handleTime}
          handleLoc={this.handleLoc}
          handlePeople={this.handlePeople}
          clickSubmit={this.clickSubmit}
          clickUndo={this.clickUndo}
          date={date}
          time={time}
          location={location}
          people={people}
        />
        {/* <CalContainer
          entry={this.state.entry}
        /> */}
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
