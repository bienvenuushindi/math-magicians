import React from 'react';
import Button from './button';
import Display from './display';
import { numbersAndOperators, themeColor } from '../modules/data';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const keyboard = numbersAndOperators.map((item) => (
      <Button
        key={item.id}
        id={item.id}
        category={item.category}
        label={item.symbol}
        themeColor={themeColor}
      />
    ));
    return (
      <div className="container mt-5 rounded px-1 py-1 ">
        <Display
          literal="0"
          themeColor={themeColor}
        />
        <div className="row">{keyboard}</div>
      </div>
    );
  }
}
