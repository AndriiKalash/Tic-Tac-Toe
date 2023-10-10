import { ZeroIcon } from './icons/zero-icon';
import { CrossIcon } from './icons/cross-icon';
import { UiButton } from '../uikit/ui-button';

export function Gamefield() {
  return (
    <div className="px-8 pt-5 pb-7  bg-white border rounded-2xl shadow-heder-shadow">
      <div className="flex justify-between items-center pb-3 ">
        <div>
          <div className=" flex items-center gap-1 text-xl font-semibold leading-tight">
            Step: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className=" flex items-center gap-1 leading-tight text-xs font-normal text-slate-400">
            Next: <CrossIcon />
          </div>
        </div>
        <div className="flex gap-3">
          <UiButton size="md" variant="primary">
            Draw
          </UiButton>
          <UiButton size="md" variant="outline">
            Surrender
          </UiButton>
        </div>
      </div>
      <div className="grid grid-cols-game-field grid-rows-game-field">
        {[...Array(361)].map((_, i) => (
          <div
            key={i}
            className="border border-solid w-[30px] h-[30px] border-slate-200 "></div>
        ))}
      </div>
    </div>
  );
}
