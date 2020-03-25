import React from 'react';
import './Pill.scss';
import PropTypes from 'prop-types';

/**
 * This view is use to render a Pill.
 *
 */
const Pill = (oProps) => {
  const getPillTypeClass = () => {
    switch (oProps.type) {
      case 'red':
        return 'red-pill';
      case 'orange':
        return 'orange-pill';
      default:
        return 'green-pill';
    }
  };

  const pillTypeClass = getPillTypeClass();
  return (
    <span className={`pill ${pillTypeClass}`}>
      {oProps.label}
    </span>
  );
};

Pill.propTypes = {
  /**
   * Label for Pill
   */
  label: PropTypes.string.isRequired,
  /**
   * Type of the Pill
   */
  type: PropTypes.string,
};

Pill.defaultProps = {
  type: 'green',
};

export default Pill;
