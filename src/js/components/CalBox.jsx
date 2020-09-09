import React from 'react';

// import CalEntry from './CalEntry.jsx';

const CalBox = (props) => {
  const { entry, date } = props;
  return (
    <div className="cal-box">
      <h1>{date}</h1>
      <p>Hello World!</p>
      {/* <CalEntry /> */}
    </div>
  );
};

export default CalBox;
