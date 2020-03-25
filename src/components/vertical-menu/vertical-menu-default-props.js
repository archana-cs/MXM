const fDefaultHandler = () => {
  alert('something clicked');
};

const oVerticalMenuDefaultProps = {
  header: {
    id: 'list-header',
    label: 'list-header',
    icon: 'listHeader',
  },
  items: [
    {
      id: `list-item ${Math.random()}`,
      label: 'list-item-label',
      icon: 'defaultIcon',
      count: 0,
      onClickHandler: fDefaultHandler,
    },
    {
      id: `list-item ${Math.random()}`,
      label: 'list-item-label',
      icon: 'defaultIcon',
      count: 0,
      onClickHandler: fDefaultHandler,
    },
  ],
  selectedItemId: '',
  isCollapsed: false,
  listHeaderClickHandler: fDefaultHandler,
  listItemClickHandler: fDefaultHandler,
};

export default oVerticalMenuDefaultProps;
