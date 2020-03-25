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

Collapse.propTypes = {
  ChildComponent: PropTypes.element.isRequired,
};
export default Collapse;
