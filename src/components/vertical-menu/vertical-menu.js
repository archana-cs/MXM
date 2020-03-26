import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './vertical-menu.scss';
import VerticalMenuItem from '../vertical-menu-item/vertical-menu-item';
import Collapse from '../collapse/collapse';

const oPropTypes = {
  menuItemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.string,
      count: PropTypes.string,
      className: PropTypes.string,
    }),
  ).isRequired,
  menuHeaderItem: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
  }),
  selectedItemId: PropTypes.string.isRequired,
  isCollapsed: PropTypes.bool,
  menuHeaderItemClick: PropTypes.func,
  menuItemClick: PropTypes.func,
};

/**
 * @description this view will return 2 modules
 * 1. vertical menu list
 * 2. vertical menu list with collapse functionality
 * @param oProps
 * @returns {*}
 * @constructor
 */
const VerticalMenu = (oProps) => {
  const sSelectedItemId = oProps.selectedItemId;
  const [selectedItemId, setSelectedItemId] = useState(sSelectedItemId);

  const onMenuItemClick = (sItemId) => {
    setSelectedItemId(sItemId);
    if (oProps.menuItemClick) {
      oProps.menuItemClick(sItemId);
    }
  };

  const getMenuHeaderIcon = (oHeader) => {
    const sClassName = oHeader.className;

    if (sClassName) {
      return (
        <div
          className={`vertical-menu-item-icon header ${sClassName}`}
          onClick={oProps.menuHeaderItemClick}
        />
      );
    }

    return <img alt="" src={oHeader.icon} />;
  };

  /**
   * @description if header data comes in props then only it will prepare header view
   * @returns {null|*}
   */
  const getMenuHeaderItem = (oHeader) => {
    if (!oHeader) {
      return null;
    }

    return (
      <div className="vertical-menu-item header">
        {getMenuHeaderIcon(oHeader)}
        <div className="vertical-menu-item-label header ellipsis">{oHeader.label}</div>
      </div>
    );
  };

  /**
   * This function will render vertical menus items list
   * @param aItemList
   * @returns {*}
   */
  const getMenuItems = (aItemList) => aItemList.map((oMenuItem) => {
    const bIsSelected = oMenuItem.id === selectedItemId;

    return (
      <VerticalMenuItem
        key={`item-${oMenuItem.id}`}
        {...oMenuItem}
        menuItemClick={onMenuItemClick}
        isSelected={bIsSelected}
        isCollapsed={oProps.isCollapsed}
      />
    );
  });

  return (
    <div className="vertical-menu">
      {getMenuHeaderItem(oProps.menuHeaderItem)}
      {getMenuItems(oProps.menuItemList)}
    </div>

  );
};

const oVerticalMenuDefaultProps = {
  menuHeaderItem: {
    id: 'vertical-menu-id',
    label: 'vertical-menu-label',
    icon: 'vertical-menu-icon',
  },
  isCollapsed: false,
  menuHeaderItemClick: () => {},
  menuItemClick: () => {},
};

VerticalMenu.propTypes = oPropTypes;
VerticalMenu.defaultProps = oVerticalMenuDefaultProps;

export const verticalMenu = VerticalMenu;
export const collapsibleVerticalMenu = Collapse(VerticalMenu);
