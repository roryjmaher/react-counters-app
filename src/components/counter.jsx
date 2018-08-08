import React, { Component } from "react";

// Counter Child Component
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // Label Text Conditional Formatting
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  // Conditional Label CSS Class Styling
  getBadgeClasses = () => {
    // Default button classes
    let classes = "badge m-2 badge-";
    // Append appropriate class based on count state
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
}

export default Counter;
