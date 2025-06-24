// src/components/Calculator.js

import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('❌ Please enter valid numbers');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(a + b);
        break;
      case 'subtract':
        setResult(a - b);
        break;
      case 'multiply':
        setResult(a * b);
        break;
      case 'divide':
        b === 0 ? setResult('❌ Cannot divide by 0') : setResult(a / b);
        break;
      default:
        setResult('❌ Invalid operation');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>React Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ padding: '10px', width: '200px' }}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ padding: '10px', width: '200px' }}
      />
      <br /><br />
      <button onClick={() => calculate('add')}>Add</button>
      <button onClick={() => calculate('subtract')}>Subtract</button>
      <button onClick={() => calculate('multiply')}>Multiply</button>
      <button onClick={() => calculate('divide')}>Divide</button>
      <br /><br />
      <div><strong>Result:</strong> {result}</div>
    </div>
  );
};

export default Calculator;
