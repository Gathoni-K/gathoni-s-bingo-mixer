interface BingoModalProps {
  readonly onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-cyberpunkBg/90 flex items-center justify-center p-4 z-50">
      <div className="cyber-panel p-6 max-w-xs w-full text-center animate-[bounce_0.5s_ease-out]">
        <div className="text-5xl mb-4 neon-glow">389</div>
        <h2 className="text-3xl font-bold text-neonPink mb-2 neon-glow">BINGO!</h2>
        <p className="text-neonBlue mb-6">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-neonBlue text-cyberpunkBg font-semibold py-3 px-6 rounded-lg neon-glow hover:bg-neonPink hover:text-white transition-colors"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
