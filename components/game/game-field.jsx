import { ZeroIcon } from './icons/zero-icon';
import { CrossIcon } from './icons/cross-icon';
import { TriangleIcon } from './icons/triangle-icon';
import { SquareIcon } from './icons/square-icon';
import { UiButton } from '../uikit/ui-button';
import { useState } from 'react';

const gameSymbols = ['zero', 'cross', 'triangle', 'square'];

export function GameField() {
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
  const renderSymbol = (symbol) => {
    switch (symbol) {
      case 'zero':
        return <ZeroIcon />;
      case 'cross':
        return <CrossIcon />;
      case 'triangle':
        return <TriangleIcon />;
      case 'square':
        return <SquareIcon />;
      default:
        return null;
    }
  };

  return (
    <GameLayout>
      <GameStepInfo
        renderSymbol={renderSymbol}
        step={currentStep}
        actions={
          <div className="flex gap-3">
            <UiButton size="md" variant="primary">
              Draw
            </UiButton>
            <UiButton size="md" variant="outline">
              Surrender
            </UiButton>
          </div>
        }
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            key={i}
            handleStep={() => handleStep(i, symbol)}
            renderSymbol={() => renderSymbol(symbol)}
          />
        ))}
      </GameGrid>
    </GameLayout>
  );
}

const GameLayout = ({ children }) => (
  <div className="px-8 pt-5 pb-7  bg-white border rounded-2xl shadow-heder-shadow">
    {children}
  </div>
);

const GameStepInfo = ({ actions, renderSymbol, step }) => (
  <div className="flex justify-between items-center mb-3 ">
    <div>
      <div className=" flex items-center gap-1 text-xl font-semibold leading-tight">
        Step: {renderSymbol(gameSymbols[step])}
      </div>
      <div className=" flex items-center gap-1 leading-tight text-xs font-normal text-slate-400">
        Next: {renderSymbol(gameSymbols[(step + 1) % 4])}
      </div>
    </div>
    {actions}
  </div>
);

const GameGrid = ({ children }) => (
  <div className="grid grid-cols-game-field grid-rows-game-field pl-px pt-px">
    {children}
  </div>
);

const GameCell = ({ handleStep, renderSymbol }) => (
  <button
    className="border border-solid w-[30px] h-[30px] border-slate-200 -ml-px -mt-px flex items-center justify-center "
    onClick={handleStep}>
    {renderSymbol()}
  </button>
);
