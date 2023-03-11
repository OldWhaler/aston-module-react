import { useState } from 'react';

export const useBasicMathOperations = (min: number, max: number, initialValue = 1) => {
  const [number, setNumber] = useState(initialValue);

  const increment = () => {
    setNumber(prev => prev === max ? min : prev + 1);
  };

  const decrement = () => {
    setNumber(prev => prev === min ? max : prev - 1);
  };

  return {
    number,
    increment,
    decrement
  };
};
