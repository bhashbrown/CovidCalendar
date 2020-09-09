/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React from 'react';

import CalBox from './CalBox.jsx';

// const CalContainer = (props) => {

// };

class CalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateArr: [],
    };
  }

  // create an array of dates based on props.entry array of objects
  componentDidMount() {
    const { entry } = this.props;
    let dateArr = [];
    for (let i = 0; i < entry.length; i++) {
      if (!dateArr.includes(entry[i].date)) {
        dateArr.push(entry[i].date);
      }
    }
    dateArr = dateArr.sort();
    this.setState({ dateArr });
  }

  render() {
    const { dateArr } = this.state;
    const { entry } = this.props;
    const CalBoxArr = [];
    for (let i = 0; i < dateArr.length; i++) {
      CalBoxArr.push(
        <CalBox
          id={`calbox${i}`}
          entry={entry}
          date={dateArr[i]}
        />,
      );
    }
    return (
      <div className="cal-container">
        <CalBox
          entry={entry}
          date={dateArr[0]}
        />
        {CalBoxArr}
      </div>
    );
  }
}

export default CalContainer;
