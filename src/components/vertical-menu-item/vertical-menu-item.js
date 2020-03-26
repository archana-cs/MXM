import React from 'react';
import PropTypes from 'prop-types';
import './vertical-menu-item.scss';

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
    * vertical menu item view
    * @param oProps
    * @returns {*}
    * @constructor
    */
const VerticalMenuItem = (oProps) => {
  const bIsSelected = oProps.id === oProps.selectedItemId;
  let sClassName = bIsSelected ? 'verticalMenuItem selected ' : 'verticalMenuItem ';
  sClassName = (oProps.count && (sClassName += 'withCount ')) || sClassName;

  /**
   * if className is present then display custom Icon, o.w. display icon from server
   * @returns {*}
   */
  const getVerticalMenuItemIcon = () => (oProps.className
    ? <div className={`verticalMenuItemIcon ${oProps.className}`} />
    : <img alt="defaultImage" src={oProps.icon} />);

  /**
   * To show icon below conditions are there:
   * 1. vertical menu should be expanded
   * 2. count must be greater than 0
   * @returns {*}
   */
  const getVerticalMenuItemCount = () => {
    const bShowCount = !oProps.isCollapsed && oProps.count;
    return bShowCount ? <div className="count">{oProps.count}</div> : null;
  };

  const getVerticalMenuItemLabel = () => (oProps.isCollapsed
    ? null
    : <div className="verticalMenuItemLabel ellipsis">{oProps.label}</div>);

  return (
    <div className={sClassName} onClick={() => oProps.onClickHandler(oProps.id)}>
      {bIsSelected ? <div className="selectedHighlight" /> : null}
      {getVerticalMenuItemIcon()}
      {getVerticalMenuItemLabel()}
      {getVerticalMenuItemCount()}
    </div>
  );
};

const oVerticalMenuItemDefaultProps = {
  icon: '',
  className: 'defaultImage',
  count: 0,
  isCollapsed: false,
};

VerticalMenuItem.propTypes = oPropTypes;
VerticalMenuItem.defaultProps = oVerticalMenuItemDefaultProps;

export default VerticalMenuItem;
