/* eslint-disable import/extensions */
import React from 'react';

import Form from './Form.jsx';
import CalContainer from './CalContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // state will keep track of input fields as well as an array of entry submissions
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

  // when submit button is clicked
  // all the state properties will be added into the entry array as an object
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
      return { entry };
    });
  }

  // when undo button is clicked, the last entry in the array will be removed
  clickUndo() {
    this.setState((state) => {
      const entry = [...state.entry];
      entry.pop();
      return { entry };
    });
  }

  render() {
    const {
      date, time, location, people, entry,
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
        <CalContainer
          entry={entry}
        />
      </div>
    );
  }
}

export default App;
