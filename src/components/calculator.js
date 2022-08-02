import React, { useEffect, useState } from 'react';
import Button from './button';
import Display from './display';
import { numbersAndOperators, themeColor } from '../modules/data';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [expression, setExpression] = useState('Wait 2 Seconds....');
  const [displayTimeout, setDisplayTimeout] = useState('');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpression('0');
    }, 2000);
    setDisplayTimeout(timeout);
    return clearTimeout(displayTimeout);
  }, [expression]);
  const calculateExpression = (buttonName) => {
    const { next, total, operation } = calculate(calculatorData, buttonName);
    setExpression(next || total || '0');
    setCalculatorData({ total, next, operation });
  };

  const keyboard = numbersAndOperators.map((item) => (
    <Button
      key={item.id}
      id={item.id}
      category={item.category}
      label={item.symbol}
      themeColor={themeColor}
      calculateExpression={calculateExpression}
    />
  ));
  return (
    <div className="container mt-5 rounded px-2 py-1 ">
      <Display
        literal={expression.substring(0, 20)}
        themeColor={themeColor}
      />
      <div className="row">{keyboard}</div>
    </div>
  );
};

export default Calculator;
