import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './vertical-menu.scss';
import VerticalMenuItem from '../vertical-menu-item/vertical-menu-item';
import oVerticalMenuDefaultProps from './vertical-menu-default-props';
import CollapsibleView from '../collapsible/collapsible-view';

const oPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.string,
      count: PropTypes.string,
      className: PropTypes.string,
    }),
  ).isRequired,
  header: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
  }),
  selectedItemId: PropTypes.string,
  isCollapsed: PropTypes.bool,
  listHeaderClickHandler: PropTypes.func,
  listItemClickHandler: PropTypes.func,
};

/**
 * @description this view will render the list
 * @param oProps
 * @returns {*}
 * @constructor
 */
const VerticalMenu = (oProps) => {
  const sSelectedItemId = oProps.selectedItemId;
  const [selectedItemId, setSelectedItemId] = useState(sSelectedItemId);

  const onItemClickHandler = (sClickedItemId) => {
    setSelectedItemId(sClickedItemId);
    if (oProps.listItemClickHandler) {
      oProps.listItemClickHandler(sClickedItemId);
    }
  };

  /**
   * @description if header data comes in props the it will prepare header view
   * @returns {null|*}
   */
  const getHeaderDOM = () => {
    const oHeader = oProps.header;
    if (!oHeader) {
      return null;
    }

    const sClassName = oHeader.className;
    const bIsCollapsed = oProps.isCollapsed;

    return (
      <div className="verticalMenuHeader">
        {sClassName ? <div className={`verticalMenuHeaderIcon ${sClassName}`} /> : <img alt="noImageFound" src={oHeader.icon} />}
        {bIsCollapsed ? null : <div className="verticalMenuHeaderLabel">{oHeader.label}</div>}
      </div>
    );
  };

  return (
    <div className="verticalMenu">
      {getHeaderDOM()}
      {oProps.items.map((oItem) => (
        <VerticalMenuItem
          key={`item-${oItem.id}`}
          {...oItem}
          onClickHandler={onItemClickHandler}
          selectedItemId={selectedItemId}
          isCollapsed={oProps.isCollapsed}
        />
      ))}
    </div>

  );
};

VerticalMenu.propTypes = oPropTypes;
VerticalMenu.defaultProps = oVerticalMenuDefaultProps;

export default CollapsibleView(VerticalMenu);
