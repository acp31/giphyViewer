import React, { PropTypes } from 'react';
import ClientContainer from './ClientContainer';
import update from 'react-addons-update';
import 'babel-polyfill';

function App(props) {
  return (
   <div>
     {props.children}
   </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;


