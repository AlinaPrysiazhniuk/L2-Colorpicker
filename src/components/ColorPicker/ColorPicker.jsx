import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 3,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__tittle">Color Picker</h2>
        <p>Вибраний колір: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className="ColorPicker__option"
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
