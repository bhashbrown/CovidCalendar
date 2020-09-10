/* eslint-disable react/prop-types */
import React from 'react';

// this form contains everything that will change state
// every input handles an event or click
const Form = (props) => {
  const {
    handleDate, handleTime, handleLoc, handlePeople, clickSubmit,
    clickUndo, date, time, location, people,
  } = props;
  return (
    <form id="entry-form" className="entry-form">
      <label htmlFor="date-entry">
        Date:
        <br />
        <input
          type="date"
          id="date-entry"
          value={date}
          onChange={handleDate}
        />
      </label>
      <br />
      <label htmlFor="time-entry">
        Time:
        <br />
        <input
          type="time"
          id="time-entry"
          value={time}
          onChange={handleTime}
        />
      </label>
      <br />
      <label htmlFor="loc-entry">
        Location:
        <br />
        <input
          type="text"
          id="loc-entry"
          value={location}
          onChange={handleLoc}
        />
      </label>
      <br />
      <label htmlFor="person-entry">
        People Visited:
        <br />
        <input
          type="text"
          id="person-entry"
          value={people}
          onChange={handlePeople}
        />
      </label>
      <br />
      <span id="form-buttons-container">
        <input
          type="button"
          className="form-button"
          value="Submit"
          onClick={clickSubmit}
        />
        <input
          type="button"
          className="form-button"
          value="Undo"
          onClick={clickUndo}
        />
      </span>
    </form>
  );
};

export default Form;
