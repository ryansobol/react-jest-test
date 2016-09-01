import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App.jsx';

it('App renders', () => {
  // Render a checkbox with label in the document
  const app = TestUtils.renderIntoDocument(
    <App />
  );

  const appNode = ReactDOM.findDOMNode(app);

  // Verify that it's Off by default
  expect(appNode.textContent).toEqual('Hello world');

  // ...
});
