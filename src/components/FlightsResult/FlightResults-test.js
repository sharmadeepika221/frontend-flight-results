import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import FlightsResult from './FlightsResult';

describe('FlightsResult', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<FlightsResult />, div);
  });

//   it('should render correctly', () => {
//     const renderer = new ShallowRenderer();
//     renderer.render(<FlightsResult />);

//     expect(renderer.getRenderOutput()).toMatchSnapshot();
//   });
});
