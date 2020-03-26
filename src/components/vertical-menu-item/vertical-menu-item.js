import React from 'react';
import PropTypes from 'prop-types';
import './vertical-menu-item.scss';

const oPropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string, // To show icon saved on server side
  className: PropTypes.string, // To show custom icon
  count: PropTypes.number, // additional info related to list item
  menuItemClick: PropTypes.func.isRequired, // To select the clicked item
  isSelected: PropTypes.string.isRequired, // To highlight selected item & its background
  isCollapsed: PropTypes.bool, // To hide label and count DOM
};

/**
    * vertical menu item view
    * @param oProps
    * @returns {*}
    * @constructor
    */
const VerticalMenuItem = (oProps) => {
  let sClassName = oProps.isSelected ? 'vertical-menu-item selected ' : 'vertical-menu-item ';
  sClassName = (oProps.count && (sClassName += 'with-count ')) || sClassName;

  /**
   * if className is present then display custom Icon, o.w. display icon from server
   * @returns {*}
   */
  const getVerticalMenuItemIcon = () => (oProps.className
    ? <div className={`vertical-menu-item-icon ${oProps.className}`} />
    : <img alt="" src={oProps.icon} />);

  /**
   * To show icon count must be greater than 0
   * @returns {*}
   */
  const getVerticalMenuItemCount = () => (oProps.count ? <div className="vertical-menu-item-count">{oProps.count}</div> : null);

  const getVerticalMenuItemLabel = () => <div className="vertical-menu-item-label ellipsis">{oProps.label}</div>;

  return (
    <div className={sClassName} onClick={() => oProps.menuItemClick(oProps.id)}>
      {oProps.isSelected ? <div className="selected-highlight" /> : null}
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
