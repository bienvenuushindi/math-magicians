import React from 'react';
import Button from './button';
import Display from './display';
import { numbersAndOperators, themeColor } from '../modules/data';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: 'Wait 2 Seconds....',
      displayTimeout: '',
      calculatorData: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.calculateExpression = this.calculateExpression.bind(this);
    this.clearWaitingMessage = this.clearWaitingMessage.bind(this);
  }

  componentDidMount() {
    this.clearWaitingMessage();
  }

  componentDidUpdate() {
    const { displayTimeout } = this.state;
    clearTimeout(displayTimeout);
  }

  clearWaitingMessage() {
    this.setState({
      displayTimeout: setTimeout(() => {
        this.setState({
          expression: '0',
        });
      }, 2000),
    });
  }

  calculateExpression(buttonName) {
    const { calculatorData } = this.state;
    const { next, total, operation } = calculate(calculatorData, buttonName);
    this.setState({
      expression: next || total || '0',
      calculatorData: { total, next, operation },
    });
  }

  render() {
    const keyboard = numbersAndOperators.map((item) => (
      <Button
        key={item.id}
        id={item.id}
        category={item.category}
        label={item.symbol}
        themeColor={themeColor}
        calculateExpression={this.calculateExpression}
      />
    ));
    const { expression } = this.state;
    return (
      <div className="container mt-5 rounded px-2 py-1 ">
        <Display
          literal={expression.substring(0, 20)}
          themeColor={themeColor}
        />
        <div className="row">{keyboard}</div>
      </div>
    );
  }
}
