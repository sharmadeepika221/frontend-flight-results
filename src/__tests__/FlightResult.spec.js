import React from "react";
import { create } from "react-test-renderer";
import FlightResult from '../components/FlightsResult/FlightsResult';

describe("FlightResult component", () => {
  test("Matches the snapshot", () => {
    const flightResult = create(<FlightResult />);
    expect(flightResult.toJSON()).toMatchSnapshot();
  });
});