import { UiButton } from '../uikit/ui-button';
import { renderSymbol } from '../../utils/renderSymbol';
import { useGameState } from '../../hooks/useGameState';
import { gameSymbols } from './constatants';

export function GameField() {
  const { cells, currentStep, handleStep } = useGameState();
  return (
    <GameLayout>
      <GameStepInfo
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
            symbol={symbol}
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

const GameStepInfo = ({ actions, step }) => {
  const stepSymbol = renderSymbol(gameSymbols[step], 'w-5 h-5');
  const nextSymbol = renderSymbol(gameSymbols[(step + 1) % 4], 'w-3 h-3');
  return (
    <div className="flex justify-between items-center mb-3 ">
      <div>
        <div className=" flex items-center gap-1 text-xl font-semibold leading-tight">
          Step: {stepSymbol}
        </div>
        <div className=" flex items-center gap-1 leading-tight text-xs font-normal text-slate-400">
          Next: {nextSymbol}
        </div>
      </div>
      {actions}
    </div>
  );
};

const GameGrid = ({ children }) => (
  <div className="grid grid-cols-game-field grid-rows-game-field pl-px pt-px">
    {children}
  </div>
);

const GameCell = ({ handleStep, symbol }) => {
  const cellSymboll = renderSymbol(symbol, 'w-5 h-5');
  return (
    <button
      className="border border-solid w-[30px] h-[30px] border-slate-200 -ml-px -mt-px flex items-center justify-center "
      onClick={handleStep}>
      {cellSymboll}
    </button>
  );
};
