import styled, { createGlobalStyle, keyframes } from "styled-components";
import reset from 'styled-reset';

//These styles wrap the general components
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

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

const AppWrap = styled.div`
  position: relative;
  font-family: Lato;
`

// const AppWrap = styled.div`
//   position: relative;
//   border: solid;
//   display: block;
//   width: 90vh;
//   top: 5vh;
//   left: 5vh;
//   margin-bottom: 5vh;
// `

const Header = styled.div`
  height: 50vh;
  position: relative;
  background: rgba(95, 249, 172, .85);
`

const SelectWrap = styled.div`
  position: relative;
  border-bottom: solid;
  background: green;
  display: block;
  height: 15vh;
  width: 90vh;
  justify-content: center;
`

const HourCell = styled.div`
  position: relative;
  display: inline-block;
`

const RoomCell = styled.div`
  position: relative;
  display: inline-block;
`

const BasicCell = styled.div`
  position: relative;
  display: block;
  height: 6vh;
  width: 15vh;
  text-align: ${props => props.alignCell};
  background: ${props => props.backgroundColor};
  padding-top: 3vh;
`
const LocationSelectorWrapper = styled.div`
  position: absolute;
  display: inline-block;
  top: 7%;
  left 2%;
  z-index: 1;
  border-radius: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgba(245, 255, 250);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  cursor: pointer;
  font-size: 3vh;
  color: ${props => props.color};
  transition: all .2s;

  :hover {
    color: rgba(95, 249, 172);
  }

  :active {
    transform: translateY(2px);
    box-shadow: 3px 2px 10px rgba(0, 0, 0, .2);
  }
`

const LocationList = styled.div`
  position: absolute;
  display: inline-block;
  top: 20%;
  left 2%;
  z-index: 1;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  cursor: pointer;
  font-size: 3vh;
  animation: ${moveInDown} .3s ease-in;
`

const LocationItem = styled.div`
  position: relative;
  display: block;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  justify-content: start;
  cursor: pointer;
  color: grey;
  :hover {
    background-color: grey;
    color: white;
  }
`

const CellsWrap = styled.div`
  position: absolute;
  top: 55vh;
  justify-content: center;
`

export {
  GlobalStyle,
  AppWrap,
  Header,
  SelectWrap,
  HourCell,
  RoomCell,
  BasicCell,
  LocationSelectorWrapper,
  LocationList,
  LocationItem,
  CellsWrap
}

/*
:hover {
    transform: translateY(-1.5px);
    box-shadow: 5px 7px 10px rgba(0, 0, 0, .2);
  }
*/