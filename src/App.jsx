import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import HourDisplay from './components/HourDisplay.jsx';
import RoomDisplay from './components/RoomDisplay.jsx';
import SelectBar from './components/SelectBar.jsx';
import { AppWrap, CellWrap, GlobalStyle } from './components/styles.jsx';

const bookingsURL = 'http://localhost:3838/bookings'
const roomsURL = 'http://localhost:3838/rooms'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      rooms: []
    }
  }

  componentDidMount() {
    fetch(bookingsURL).then((res) => {
      res.json().then((data) => {
        this.setState({
          bookings: data
        })
      })
    });
    fetch(roomsURL).then((res) => {
      res.json().then((data) => {
        this.setState({
          rooms: data
        })
      })
    });
  }

  generateRooms() {
    return this.state.rooms.map((room, index) => {
      let roomBookings = [];
      this.state.bookings.forEach((booking) => {
        if (booking.room === room.name) {
          roomBookings.push(booking);
        }
      })
      return (
        <RoomDisplay
          key={index}
          startTime={moment(room.openHours.start)}
          duration={8 * 4}
          currentBookings={roomBookings}
          roomName={room.name} />
      );
    })
  }
  render() {
    return (
      <AppWrap>
        <GlobalStyle />
        <SelectBar/>
        <CellWrap>
          <HourDisplay startTime={moment({ hours: 10 })} duration={8 * 4} />
          {this.generateRooms()}
        </CellWrap>
      </AppWrap>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);