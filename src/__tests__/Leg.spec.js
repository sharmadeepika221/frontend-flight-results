import React from "react";
import { create } from "react-test-renderer";
import Leg from '../components/FlightsResult/Leg';

describe("Leg component", () => {
  test("Matches the snapshot", () => {
    const leg1 = {
        "id": "leg_3",
        "departure_airport": "BUD",
        "arrival_airport": "LGW",
        "departure_time": "2020-10-31T22:35",
        "arrival_time": "2020-11-01T00:10",
        "stops": 1,
        "airline_name": "Lufthansa",
        "airline_id": "LH",
        "duration_mins": 155
      };
    const leg = create(<Leg {...leg1}/>);
    expect(leg.toJSON()).toMatchSnapshot();
  });
});