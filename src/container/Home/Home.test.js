import { render, screen } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import Home from './Home';

test('Test Home Instruction Title', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Home/>, root);
  //after rendering our component
  // use DOM APIs (query selector) to make assertions
  expect(root.querySelector('h1').textContent).toBe('Banking Workflow')
});
