
import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  readonly square: BingoSquareData;
  readonly isWinning: boolean;
  readonly onClick: () => void;
}
export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center neon-border rounded transition-all duration-150 select-none min-h-[60px] text-xs leading-tight font-cyberpunk';

  let stateClasses = '';
  if (square.isMarked) {
    stateClasses = isWinning
      ? 'bg-neonYellow text-cyberpunkBg shadow-neon'
      : 'bg-neonGreen text-cyberpunkBg shadow-neonGreen';
  } else {
    stateClasses = 'bg-cyberpunkPanel text-neonBlue hover:bg-neonBlue/10 active:bg-neonBlue/20';
  }

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm neon-glow' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-neonGreen text-xs">&#10003;</span>
      )}
    </button>
  );
}
