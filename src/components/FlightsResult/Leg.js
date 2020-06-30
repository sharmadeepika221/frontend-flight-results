import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';
import LongArrowRightIcon from 'bpk-component-icon/sm/long-arrow-right';
import { withAlignment } from 'bpk-component-icon';
import BpkText from 'bpk-component-text';

import STYLES from './FlightResults.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
const AlignedArrow = withAlignment(LongArrowRightIcon);
class Leg extends Component {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
    this.convertMinsToHrsMins = this.convertMinsToHrsMins.bind(this);
    this.formatStops = this.formatStops.bind(this);
  }

  formatDate(time) {
    this.departure_time = new Date(time);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    return this.departure_time.toLocaleString('en-US', options);
  }

  convertMinsToHrsMins(mins) {
    this.duration_mins = mins;
    const h = `${Math.floor(this.duration_mins / 60)}h`;
    let m = this.duration_mins % 60;
    m = m < 10 ? `0${m}` : m;
    return `${h} ${m}`;
  }

  formatStops(stops) {
    this.stops = stops;
    if (this.stops === 0) {
      return <span className={getClassName('non_stop')}>Direct</span>;
    }
    return (
      <span className={getClassName('with_stops')}>{this.stops} Stop</span>
    );
  }

  render() {
    return (
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={1}>
            <img
              className={getClassName('airline_icon')}
              alt="airline"
              src={`https://logos.skyscnr.com/images/airlines/favicon/${this.props.airline_id}.png`}
            />
          </BpkGridColumn>
          <BpkGridColumn width={2}>
            <div className={getClassName('txt_space')}>
              <span> {this.formatDate(this.props.departure_time)}</span>
            </div>
            <div className={getClassName('txt_space')}>
              <span className={getClassName('blur_txt')}>
                {this.props.departure_airport}
              </span>
            </div>
          </BpkGridColumn>
          <BpkGridColumn width={1}>
            <BpkText>
              <AlignedArrow />
            </BpkText>
          </BpkGridColumn>
          <BpkGridColumn width={2}>
            <div className={getClassName('txt_space')}>
              <span> {this.formatDate(this.props.arrival_time)}</span>
            </div>
            <div className={getClassName('txt_space')}>
              <span className={getClassName('blur_txt')}>
                {' '}
                {this.props.arrival_airport}
              </span>
            </div>
          </BpkGridColumn>
          <BpkGridColumn width={2}> </BpkGridColumn>
          <BpkGridColumn width={2}>
            <div className={getClassName('txt_space')}>
              <span className={getClassName('blur_txt')}>
                {' '}
                {this.convertMinsToHrsMins(this.props.duration_mins)}
              </span>
            </div>
            <div className={getClassName('txt_space')}>
              {' '}
              {this.formatStops(this.props.stops)}
            </div>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}
Leg.defaultProps = {
  airline_id: '',
  departure_time: '',
  arrival_time: '',
  departure_airport: '',
  arrival_airport: '',
  duration_mins: 0,
  stops: 0,
};

Leg.propTypes = {
  airline_id: PropTypes.string,
  departure_time: PropTypes.string,
  arrival_time: PropTypes.string,
  departure_airport: PropTypes.string,
  arrival_airport: PropTypes.string,
  duration_mins: PropTypes.number,
  stops: PropTypes.number,
};

export default Leg;
