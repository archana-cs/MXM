import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * This is a default button component
 */
const Button = (oProps) => {
  return (
    <button
      onClick={() => oProps.onClick()}
      className='mcm-button'
      disabled={oProps.disabled}
    >
      {oProps.label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Label for Button
   */
  label: PropTypes.string,
  /**
   * To disable the button
   */
  disabled: PropTypes.bool
};

Button.defaultProps = {
  label: 'Button',
  disabled: false
};

export default Button;
