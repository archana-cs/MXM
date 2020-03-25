import React from 'react';
import PropTypes from 'prop-types';
import './vertical-menu-item.scss';
import '../../../styleguide/_objects.scss';

const oPropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string, // To show icon saved on server side
  className: PropTypes.string, // To show custom icon
  count: PropTypes.number, // additional info related to list item
  onClickHandler: PropTypes.func.isRequired, // To select the clicked item
  selectedItemId: PropTypes.string.isRequired, // To highlight selected item & its background
  isCollapsed: PropTypes.bool, // To hide label and count DOM
};

/**
 * list item view
 * @param oProps
 * @returns {*}
 * @constructor
 */
const VerticalMenuItem = (oProps) => {
  const bIsSelected = oProps.id === oProps.selectedItemId;
  let sClassName = bIsSelected ? 'verticalMenuItem selected ' : 'verticalMenuItem ';
  sClassName = (oProps.count && (sClassName += 'withCount')) || sClassName;
  const bIsExpanded = !oProps.isCollapsed;

  return (
    <div className={sClassName} onClick={() => oProps.onClickHandler(oProps.id)}>
      {bIsSelected ? <div className="selectedHighlight" /> : null}
      {oProps.className ? <div className={`icon ${oProps.className}`} /> : <img alt="" src={oProps.icon} />}
      {bIsExpanded ? <div className="label ellipsis">{oProps.label}</div> : null}
      {bIsExpanded && oProps.count ? <div className="count">{oProps.count}</div> : null}
    </div>
  );
};

VerticalMenuItem.propTypes = oPropTypes;
VerticalMenuItem.defaultProps = {
  icon: '',
  className: 'defaultImage',
  count: 0,
  isCollapsed: false,
};

export default VerticalMenuItem;
