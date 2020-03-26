import React from 'react';
import PropTypes from 'prop-types';
import './collapse.scss';

const Collapse = (ChildComponent) => {
  if (!ChildComponent) {
    throw new Error('Component not found');
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
      this.setState(
        { isCollapsed: !isCollapsed },
      );
    }

    render() {
      const { isCollapsed } = this.state;
      const sClassName = isCollapsed ? 'collapsible-wrapper collapsed' : 'collapsible-wrapper expanded';

      return (
        <div className={sClassName}>
          <ChildComponent {...this.props} {...this.state} />
          <div className="collapsible-footer" onClick={this.onClickHandler.bind(this)}>
            <div className="expand-collapse-icon" />
            {isCollapsed ? null : <div className="collapsible-footer-label ellipsis">Collapse</div>}
          </div>
        </div>
      );
    }
  }

  return WrapperComponent;
};

Collapse.propTypes = {
  ChildComponent: PropTypes.element.isRequired,
};
export default Collapse;
