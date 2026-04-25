import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  readonly board: BingoSquareData[];
  readonly winningSquareIds: Set<number>;
  readonly hasBingo: boolean;
  readonly onSquareClick: (squareId: number) => void;
  readonly onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-cyberpunkBg font-cyberpunk">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-cyberpunk-panel neon-border">
        <button
          onClick={onReset}
          className="text-neonBlue text-sm px-3 py-1.5 rounded neon-border hover:bg-neonBlue/10"
        >
          190 Back
        </button>
        <h1 className="font-bold text-neonPink neon-glow">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-neonBlue text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-neonYellow text-cyberpunkBg text-center py-2 font-semibold text-sm neon-glow">
          389 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
