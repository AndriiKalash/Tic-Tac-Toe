import { CrossIcon } from '../components/game/icons/cross-icon';
import { SquareIcon } from '../components/game/icons/square-icon';
import { TriangleIcon } from '../components/game/icons/triangle-icon';
import { ZeroIcon } from '../components/game/icons/zero-icon';

export const renderSymbol = (symbol, className) => {
  switch (symbol) {
    case 'zero':
      return <ZeroIcon className={className} />;
    case 'cross':
      return <CrossIcon className={className} />;
    case 'triangle':
      return <TriangleIcon className={className} />;
    case 'square':
      return <SquareIcon className={className} />;
    default:
      return null;
  }
};
