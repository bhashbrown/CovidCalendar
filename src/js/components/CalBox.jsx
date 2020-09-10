/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';

import CalEntry from './CalEntry.jsx';

const CalBox = (props) => {
  // each calendar box will hold entries that match the date of the box
  const { title, entry, date } = props;
  const CalEntryArr = [];
  for (let i = 0; i < entry.length; i++) {
    if (entry[i].date === date) {
      CalEntryArr.push(
        <CalEntry
          key={`cal-entry-${i}`}
          entry={entry[i]}
        />,
      );
    }
  }
  return (
    <div className="cal-box">
      <h2>{title}</h2>
      <h3>{date}</h3>
      {CalEntryArr}
    </div>
  );
};

export default CalBox;
