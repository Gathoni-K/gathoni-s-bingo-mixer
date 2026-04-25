interface StartScreenProps {
  readonly onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-cyberpunkBg font-cyberpunk">
      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold text-neonPink mb-2 neon-glow">Bingo Mixer</h1>
        <p className="text-lg text-neonBlue mb-8">Find your people!</p>
        
        <div className="cyber-panel p-6 mb-8">
          <h2 className="font-semibold text-neonYellow mb-3 neon-glow">How to play</h2>
          <ul className="text-left text-neonGreen text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-neonPink text-white font-semibold py-4 px-8 rounded-lg text-lg neon-glow hover:bg-neonBlue hover:text-cyberpunkBg transition-colors"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
