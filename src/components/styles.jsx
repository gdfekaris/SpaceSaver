import styled, { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

//These styles wrap the general components
const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const AppWrap = styled.div`
  position: absolute;
  display: block;
  width: 90%;
  top: 5vh;
  left: 5vh;
  margin-bottom: 5vh;
`

const SelectWrap = styled.div`
  position: absolute;
  border: solid;
  background: green;
  display: inline-block;
  height: 15vh;
  width: 100%;
`

const CellWrap = styled.div`
  position: relative;
  display: block;
  border: solid;
  height: 90%;
  top: 20vh;
  text-align: center;
`;

const LocationSelectorWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 3vh;
  top: 50px;
  left: 40px;
  z-index: 1;
  border: solid;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-family: Arial;
`

const LocationItem = styled.div`
  position: relative;
  display: block;
  outline: none;
  border: white;
  border-radius: 0px;
  background-color: white;
  justify-content: start;
  cursor: pointer;
  font-family: Arial;
  :hover {
    background-color: grey;
  }
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

export {
  GlobalStyle,
  AppWrap,
  CellWrap,
  SelectWrap,
  HourCell,
  RoomCell,
  BasicCell,
  LocationSelectorWrapper,
  LocationItem
}