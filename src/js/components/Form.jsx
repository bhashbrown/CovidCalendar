import React from 'react';

const Form = (props) => {
  const { clickSubmit, clickUndo } = props;
  return (
    <form id="entry-form">
      <label htmlFor="date-entry">
        Date:
        <input type="date" id="date-entry" />
      </label>
      <br />
      <label htmlFor="time-entry">
        Time:
        <input type="time" id="time-entry" />
      </label>
      <br />
      <label htmlFor="loc-entry">
        Location:
        <input type="text" id="loc-entry" />
      </label>
      <br />
      <label htmlFor="person-entry">
        People Visited:
        <input type="text" id="person-entry" />
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
