import {combineReducers} from 'redux'

const initialState = {
  currentLibrary: '',
  bookings: []
}

//set inital state for stuff??
const setLibrary = (prevState = '', action) => {
  switch(action.type){
    case 'SET_CURRENT_LIBRARY':
      return action.library
    default:
      return prevState
  }
}

const addBooking = (prevState = [], action) => {
  switch(action.type){
    case 'ADD_BOOKING':
      return [
        ...prevState,
        action.booking
      ]
    case 'ADD_MULTIPLE_BOOKINGS':
      return [
        ...prevState,
        ...action.bookingsList
      ]
    default:
      return prevState
  }
}

export default combineReducers({
  setLibrary,
  addBooking
});