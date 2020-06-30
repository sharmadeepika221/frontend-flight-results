import React from "react";
import { create } from "react-test-renderer";
import ItineraryFooter from '../components/FlightsResult/ItineraryFooter';

describe("ItineraryFooter component", () => {
  test("Matches the snapshot", () => {
    const itinerarySample = {
      "itineraries": [
        {
          "id": "it_1",
          "legs": [
            "leg_1",
            "leg_4"
          ],
          "price": "£35",
          "agent": "Wizzair.com",
          "agent_rating": 9.1
        }]};
    const itineraryFooter = create( <ItineraryFooter {...itinerarySample} />);
    expect(itineraryFooter.toJSON()).toMatchSnapshot();
  });
});