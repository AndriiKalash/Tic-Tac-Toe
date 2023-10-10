import Link from 'next/link';
import { ArrowLeftIcon } from './icons/arrow-left-icon';
import { StarIcon } from './icons/star-icon';
import { UserIcon } from './icons/user-icon';
import { HistoryIcon } from './icons/history-icon';
export function GameTittle() {
  return (
    <div className="pl-2">
      <Link
        href="/"
        className="flex items-center gap-2 text-teal-600 text-xs leading-tight font-normal">
        <ArrowLeftIcon />
        Back to main
      </Link>
      <h1 className="text-4xl leading-tight font-normal text-black">
        Tic-Tac-Toe
      </h1>
      <div className="flex items-center gap-3 text-slate-400 text-xs leading-tight">
        <StarIcon />
        <div className="flex gap-1 items-center">
          <UserIcon />
          <span>2</span>
        </div>
        <div className="flex gap-1 items-center">
          <HistoryIcon />
          <span>1 min for step</span>
        </div>
      </div>
    </div>
  );
}
