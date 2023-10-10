import Image from 'next/image';
import logoSrc from './img/logo.svg';
import { Profile } from '../profile';
import { ArowDownIcon } from './icons/arrow-down-icon';
import { UiButton } from '../uikit/ui-button';

export function Header() {
  return (
    <header className="flex items-center  h-24 px-8 bg-white shadow-heder-shadow ">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 mx-6 bg-slate-200" />
      <UiButton
        className="flex justify-center items-center"
        variant="primary"
        size="lg">
        Play
      </UiButton>
      <button className="flex items-center ml-auto gap-2 text-teal-600">
        <Profile />
        <ArowDownIcon />
      </button>
    </header>
  );
}
