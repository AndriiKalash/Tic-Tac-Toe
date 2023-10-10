import Image from 'next/image';
import userSrc from './img/user.png';
import clsx from 'clsx';

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        'flex items-center gap-2 text-teal-600 text-start'
      )}>
      <Image src={userSrc} alt="avatar" />
      <div>
        <p className="text-lg leading-tight  font-normal">Paromovevg</p>
        <p className="text-slate-400 text-xs leading-tight">Rating: 1230</p>
      </div>
    </div>
  );
}
