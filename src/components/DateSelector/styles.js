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
  height: 5vh;
  width: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const DateSelectorWrapper = styled.div`
  position: absolute;
  height: 10vh;
  width: 80vh;
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
  font-size: 9vh;

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
  height: 5.5vh;
  width: 12vh;
  z-index: 1;
  border-radius: 5px;
  background-color: white;
  color: ${ props => props.textColor };
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  line-height: 5vh;
  :hover {
    background-color: grey;
    color: ${props => {
      if (props.textColor === 'grey') {
        return 'white';
      }
    }};
  }
`

const CurrentMonthLayout = styled.div`
  position: relative;
  display: block;
  z-index: 1;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  cursor: pointer;
  text-align: center;
  font-size: 3vh;
  color: grey;
`
const WeekdayCell = styled.div`
  position: relative;
  display: inline-block;
  height: 5vh;
  width: 12vh;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  text-align: center;
  color: grey;
`

const Calendar = styled.div`
  position: relative;
  display: inline-block;
  height: 50vh;
  width: 90vh;
  top: 50%;
  left: 50%;
  padding-top: 15px;
  transform: translate(-50%, 20%);
  border-radius: 5px;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  color: black;
  font-size: 3vh;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);

  animation: ${moveInDown} .3s ease-in;
`

const MonthBar = styled.div`
  position: relative;
  display: block;
  top: 5%;
  left: 50%;
  border-radius: 5px;
  padding-bottom: 15px;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  text-align: center;
  cursor: pointer;
  font-size: 5vh;
  color: grey;
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