import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    sentiment: PropTypes.number.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label, count, sentiment },
    } = this;

    return (
      <div class={"p-1 " + (sentiment < 0 ? "bg-red-200" : "bg-green-200")}>

        <div onClick={onClick} class={"cursor-pointer text-md " + ( sentiment < 0 ? "hover:bg-red-100" : "hover:bg-green-100" )}>
          {label} ({count})
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div class={"border-1 " + (sentiment < 0 ? "bg-red-100" : "bg-green-100")}
            style={{
              width: '100%',
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