/* eslint-disable react/prop-types */
import React from 'react';

// each entry will be written with time, location, and people from the props.entry object
const CalEntry = (props) => {
  const { entry } = props;
  const {
    time, location, people,
  } = entry;
  return (
    <div className="cal-entry">
      <p>
        Time:&nbsp;
        {time}
        <br />
        Location:&nbsp;
        {location}
        <br />
        People:&nbsp;
        {people}
      </p>
    </div>
  );
};

export default CalEntry;
