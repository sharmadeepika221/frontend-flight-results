import React from 'react';
import BpkCard from 'bpk-component-card';

import Leg from './Leg';
import ItineraryFooter from './ItineraryFooter';
import STYLES from './FlightResults.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
class FlightsResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsData: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    const api_url = 'http://localhost:9090/api/v1/flightResults';
    this.setState({ isLoading: true });
    fetch(api_url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then(flightsData => this.setState({ flightsData, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { flightsData, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (flightsData && flightsData.itineraries) {
      return (
        <main className={getClassName('App__main')}>
          <ul>
            {flightsData &&
              flightsData.itineraries.map(itinerary => (
                <li key={itinerary.id}>
                  <BpkCard>
                    <Leg
                      {...flightsData.legs.find(
                        ({ id }) => id === itinerary.legs[0],
                      )}
                    />
                    <Leg
                      {...flightsData.legs.find(
                        ({ id }) => id === itinerary.legs[1],
                      )}
                    />
                    <ItineraryFooter {...itinerary} />
                  </BpkCard>
                </li>
              ))}
          </ul>
        </main>
      );
    }
    return <ul />;
  }
}
export default FlightsResult;
