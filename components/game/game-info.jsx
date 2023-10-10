import clsx from 'clsx';
import { Profile } from '../profile';
import { CrossIcon } from './icons/cross-icon';

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        'px-8 py-4 grid gap-x-10 gap-y-3 grid-cols-2 bg-white border rounded-2xl shadow-heder-shadow'
      )}>
      <div className="flex items-center justify-start gap-3">
        <div className="relative">
          <div className="rounded-full absolute -left-1 -top-1 bg-white w-5 h-5 shadow-circle-shadow flex items-center justify-center">
            <CrossIcon />
          </div>
          <Profile className="w-44" />
        </div>
        <div className="w-px h-6 bg-slate-200"></div>
        <div className="text-lg font-semibold leading-tight text-slate-900">
          1:08
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <div className="text-lg font-semibold leading-tight text-orange-600">
          1:08
        </div>
        <div className="w-px h-6 bg-slate-200 " />
        <Profile className="w-44" />
      </div>
      <div className="flex items-center flex-row-reverse justify-end gap-3">
        <div className="text-lg font-semibold leading-tight text-orange-600">
          1:08
        </div>
        <div className="w-px h-6 bg-slate-200 " />
        <Profile className="w-44" />
      </div>
    </div>
  );
}
