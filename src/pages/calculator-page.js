import React from 'react';
import Calculator from '../components/calculator';

const CalculatorPage = () => (
  <div className="calculator-page d-flex" style={{ justifyContent: 'space-between' }}>
    <h2> Let&apos;s do some Math!</h2>
    <div style={{ maxWidth: '500px', border: '1px solid #000' }}>
      <Calculator />
    </div>
  </div>
);
export default CalculatorPage;
