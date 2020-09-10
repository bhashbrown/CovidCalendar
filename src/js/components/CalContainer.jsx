/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React from 'react';

import CalBox from './CalBox.jsx';

const CalContainer = (props) => {
  // determine unique dates so that we only add Calendar Boxes for unique dates
  const { entry } = props;
  let dateArr = [];
  for (let i = 0; i < entry.length; i++) {
    if (!dateArr.includes(entry[i].date)) {
      dateArr.push(entry[i].date);
    }
  }
  // sort array of dates so that most recent date appears first
  dateArr = dateArr.sort((a, b) => b - a);

  // create date object to compare with entry dates to determine how long ago entry is
  const dateObj = new Date();
  const today = dateObj.getDate();

  const CalBoxArr = [];
  for (let i = 0; i < dateArr.length; i++) {
    // determine how many days agao entry date is compared to today's date
    const entryDate = new Date(dateArr[i]);
    const entryDay = entryDate.getDate() + 1;
    const title = today - entryDay;
    // push calendar boxes with unique dates
    CalBoxArr.push(
      <CalBox
        key={`calbox${i}`}
        title={`${title} Days Ago`}
        entry={entry}
        date={dateArr[i]}
      />,
    );
  }
  return (
    <div className="cal-container">
      {CalBoxArr}
    </div>
  );
};

export default CalContainer;
