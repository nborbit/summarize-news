import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    sentiment: PropTypes.number.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label, sentiment },
    } = this;

    return (
      <div
        style={{
          background: isOpen ? '#fae042'  : sentiment < 0 ?  '#b66d5b' : '#6db65b',
          border: '1px solid #97b787',
          padding: '3px 3px',
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              width: '100%',
              background:  '#6db65b',
              border: '1px solid #97b787',
              marginTop: 5,
              padding: '3px 3px',
            }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;