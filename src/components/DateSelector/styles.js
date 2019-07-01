import styled, { keyframes } from "styled-components";

//These styles wrap the DateSelector components

const moveInDown = keyframes `
  0% {
    opacity: 0;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }

  25% {
    opacity: .25;
    clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);
  }

  50% {
    opacity: .5;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  }

  75% {
    opacity: .75;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 75%);
  }

  100% {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`

const CurrentDateWrap = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  font-size: 9vh;

`

const DateSelectorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  z-index: 1;
  text-align: center;
  cursor: pointer;
  background-color: rgba(95, 249, 172);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  color: ${props => props.color};
  border-radius: 100px;
  transition: all .2s;

  :hover {
    background-color: rgba(95, 290, 172);
  }

  :active {
    transform: translate(-50%, -47%);
    box-shadow: 4px 2px 10px rgba(0, 0, 0, .2);
    color: rgba(245, 255, 250, .8);
  }
`

const DateCell = styled.div`
  position: relative;
  display: inline-block;
  height: 5vh;
  width: 5vh;
  z-index: 1;
  margin: 5px;
  padding-top: 10px;
  outline: none;
  border: white;
  border-radius: 5px;
  background-color: white;
  color: ${ props => props.textColor};
  cursor: pointer;
  text-align: center;
  :hover {
    background-color: grey;
  }
`

const CurrentMonthLayout = styled.div`
  position: relative;
  display: block;
  width: 50vh;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  text-align: center;
  font-size: 3vh;
`

const WeekdayCell = styled.div`
  position: relative;
  display: inline-block;
  height: 5vh;
  width: 5vh;
  z-index: 1;
  margin: 5px;
  outline: none;
  border: white;
  border-radius: 0px;
  background-color: white;
  cursor: pointer;
  text-align: center;
`

const Calendar = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 15%);
  border-radius: 5px;
  width: 50vh;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  color: black;
  font-size: 3vh;

  animation: ${moveInDown} .3s ease-in;
`

const MonthBar = styled.div`
  position: relative;
  display: block;
  width: 45vh;
  z-index: 1;
  margin: 10px;
  background-color: white;
  text-align: center;
  cursor: pointer;
`

export {
  DateSelectorWrapper,
  MonthBar,
  DateCell,
  CurrentMonthLayout,
  WeekdayCell,
  Calendar,
  CurrentDateWrap
}