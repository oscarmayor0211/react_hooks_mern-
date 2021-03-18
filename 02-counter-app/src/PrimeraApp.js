import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
const PrimeraApp = ({value , subtitulo }) => {

  return (
    <Fragment>
      <h1>{ value }</h1>
      <p>{ subtitulo }</p>
    </Fragment>
  );
};

PrimeraApp.propTypes = {
    value : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo : 'soy un subtitulo'
}
export default PrimeraApp;