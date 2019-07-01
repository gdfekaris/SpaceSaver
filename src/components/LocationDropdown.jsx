import React from "react";

import { connect } from 'react-redux';
import { setLibrary } from '../actions'

import onClickOutside from "react-onclickoutside";
import { formatLocations } from './helpers/locations.js';
import { LocationSelectorWrapper, LocationList, LocationItem } from './styles.jsx';

const locationsMock = [
  'Walnut Creek Library',
  'Brentwood Library',
  'Orinda Library',
  'Lafayette Library',
  'San Ramon Library',
  'Doughtery Station',
  'Rivendell'
];

class LocationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: 'Select Location',
      locations: formatLocations(locationsMock)
    }
    this.onClick = this.onClick.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  handleClickOutside() {
    this.setState({ listOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  selectLocation(e) {
    this.setState({ headerTitle: e.currentTarget.textContent });
    this.props.dispatch(setLibrary(e.currentTarget.textContent));
    this.handleClickOutside();
  }

  renderList(listOpen, locations) {

    let mapLocs = locations.map((item, index) => {
      return (
        <LocationItem key={index} onClick={this.selectLocation}>
          {item.title}
        </LocationItem>
      );
    });

    if (listOpen) {
      return (
        <LocationList>
          { mapLocs }
        </LocationList>
      );
    } else {
      return null;
    }
  }

  onClick() {
    this.toggleList();
  }

  render() {
    const { listOpen, locations, headerTitle } = this.state;
    let selectColor = (listOpen) ? 'rgba(95, 249, 172)' : 'grey';

    return (
      <div>
        <LocationSelectorWrapper onClick={this.onClick} color={selectColor}>
          {headerTitle}
        </LocationSelectorWrapper>
        {this.renderList(listOpen, locations)}
      </div>
    );
  }
}

export default connect()(onClickOutside(LocationDropdown));
