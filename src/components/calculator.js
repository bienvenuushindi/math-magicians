import React from 'react';
import Button from './button';
import Display from './display';

const themeColor = {
  bgOperators: 'rgb(237, 128, 46)',
  bgNumbers: '#dfdfdf',
  bgDisplay: '#858393',
  textColor: '#000',
};
const numbersAndOperators = [
  {
    id: 'clear',
    symbol: 'AC',
    category: 'non-numeric',
  },
  {
    id: 'symbol',
    symbol: '+/-',
    category: 'non-numeric',
  },
  {
    id: 'percentage',
    symbol: '&percnt;',
    category: 'non-numeric',
  },
  {
    id: 'divide',
    symbol: '&divide;',
    category: 'operators',
  },
  {
    id: 'seven',
    symbol: '7',
    category: 'number',
  },
  {
    id: 'eight',
    symbol: '8',
    category: 'number',
  },
  {
    id: 'nine',
    symbol: '9',
    category: 'number',
  },
  {
    id: 'multiply',
    symbol: '&times;',
    category: 'operators',
  },
  {
    id: 'four',
    symbol: '4',
    category: 'number',
  },
  {
    id: 'five',
    symbol: '5',
    category: 'number',
  },
  {
    id: 'six',
    symbol: '6',
    category: 'number',
  },
  {
    id: 'subtract',
    symbol: '&minus;',
    category: 'operators',
  },

  {
    id: 'one',
    symbol: '1',
    category: 'number',
  },
  {
    id: 'two',
    symbol: '2',
    category: 'number',
  },
  {
    id: 'three',
    symbol: '3',
    category: 'number',
  },
  {
    id: 'add',
    symbol: '&plus;',
    category: 'operators',
  },
  {
    id: 'zero',
    symbol: '0',
    category: 'number',
  },
  {
    id: 'decimal',
    symbol: '&period;',
    category: 'number',
  },
  {
    id: 'equals',
    symbol: '&equals;',
    category: 'operators',
  },
];

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
    const containerStyle = {
      backgroundColor: themeColor[0],
    };
    return (
      <div className="container mt-5 rounded px-1 py-1 " style={containerStyle}>
        <Display
          literal="0"
          themeColor={themeColor}
        />
        <div className="row">{keyboard}</div>
      </div>
    );
  }
}
