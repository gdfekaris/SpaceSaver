import React from "react";
import Cell from "./Cell.jsx";

import { RoomCell } from './styles.jsx';

import moment from "moment";

import { connect } from 'react-redux'
import { setTime } from '../actions'

import { createSelectable, SelectableGroup } from "react-selectable";

const SelectableCell = createSelectable(Cell);


function RoomDisplay(props) {
  let hours = [];
  let bgColor = '#CAFFB9';

  hours.push(['#66A182', props.roomName, null, null, 'left'])
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    let text = 'available';
    let booked = false;
    let align = 'center'
    props.currentBookings.forEach((booking) => {
      let time = moment(booking.startTime);
      if (time.hours() === hour.hours()) {
        text = booking.name
        booked = true;
      }
    });
    hours.push([bgColor, text, booked, hour.toISOString(), align]);

    props.startTime.add(15, "minutes");
  }

  return (
    <RoomCell>
       <SelectableGroup
          onSelection={keys => {
            console.log("these have been selected:", keys);
            props.dispatch(setTime(keys))
          }}
      >
        {hours.map((item, index) => {
          return <SelectableCell
          selectableKey={item}
          key={index}
          color={item[0]}
          text={item[1]}
          booked={item[2]}
          time={item[3]}
          room={props.roomName}
          align={item[4]} />;
        })}
      </SelectableGroup>
    </RoomCell>
  );
}

export default connect()(RoomDisplay);