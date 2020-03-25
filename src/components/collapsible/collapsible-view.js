import React from 'react';
import PropTypes from 'prop-types';
import './collapsible-view.scss';

const CollapsibleView = (ChildComponent) => {
  if (!ChildComponent) {
    throw new Element();
  }

  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isCollapsed: false,
      };
    }

    onClickHandler() {
      const { isCollapsed } = this.state;
      const bIsCollapsed = !isCollapsed;
      this.setState(
        { isCollapsed: bIsCollapsed },
      );
    }

    render() {
      const { isCollapsed } = this.state;
      const sClassName = isCollapsed ? 'collapsibleViewWrapper collapsed' : 'collapsibleViewWrapper expanded';

      return (
        <div className={sClassName}>
          <ChildComponent {...this.props} {...this.state} />
          <div className="collapsibleViewFooter" onClick={this.onClickHandler.bind(this)}>
            <div className="icon" />
            {isCollapsed ? null : <div className="label ellipsis">Collapse</div>}
          </div>
        </div>
      );
    }
  }

  return WrapperComponent;
};

CollapsibleView.propTypes = {
  ChildComponent: PropTypes.element.isRequired,
};
export default CollapsibleView;
