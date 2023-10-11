import { useState } from 'react';
import { gameSymbols } from '../components/game/constatants';

export const useGameState = () => {
  const [cells, setCells] = useState([...Array(19 * 19)]);
  const [currentStep, setCurrentStep] = useState(0);
  const handleStep = (index, symbol) => {
    if (symbol) {
      return;
    } else {
      const currentSymbol = gameSymbols[currentStep];
      const updatedCells = [...cells];
      updatedCells[index] = currentSymbol;
      setCells(updatedCells);
      setCurrentStep((prev) => {
        if (currentStep === 3) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }
  };
  return {
    cells,
    currentStep,
    handleStep,
  };
};
