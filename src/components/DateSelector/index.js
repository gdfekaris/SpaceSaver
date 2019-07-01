import React from "react";
import CurrentDate from './currentDate.jsx';
import { DateSelectorWrapper, CurrentDateWrap } from './styles.js';

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOpen: false }
    this.onClick = this.onClick.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  onClick() {
    this.toggleList();
  }

  render() {
    const { listOpen } = this.state;

    return (
      <CurrentDateWrap onClick={this.onClick} >
        <CurrentDate open={listOpen} />
      </CurrentDateWrap>
    );
  }
}

export default DateSelector;
