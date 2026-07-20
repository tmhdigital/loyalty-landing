const stamps = Array.from({ length: 8 });

const LoyaltyCardStack = () => {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      {/* back card */}
      <div className="absolute -top-6 -right-4 w-full h-56 rounded-3xl bg-secondary/90 rotate-6 shadow-card" />
      {/* mid card */}
      <div className="absolute -top-3 -right-2 w-full h-56 rounded-3xl bg-primaryDark rotate-3 shadow-card opacity-90" />

      {/* front card */}
      <div className="relative w-full h-56 rounded-3xl bg-gradient-to-br from-primary via-primary to-primaryDark shadow-card animate-float p-6 flex flex-col justify-between text-white overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-white/10" />

        <div className="flex items-start justify-between relative z-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
              Digital loyalty card
            </p>
            <p className="text-lg font-semibold mt-1">Cafe Meridian</p>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white/60 flex items-center justify-center text-[11px] font-bold">
            R
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {stamps.map((_, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border border-white/70 ${
                  i < 6 ? "bg-white text-primary animate-stamp" : "text-white/70"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {i < 6 ? "✓" : ""}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">6 / 8 stamps</p>
            <p className="text-sm font-semibold">2 to go — free coffee</p>
          </div>
        </div>
      </div>

      {/* scan beam accent */}
      <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden sm:block">
        <div className="w-10 h-24 rounded-full border-2 border-primary/40 overflow-hidden relative bg-white shadow-card">
          <div className="absolute inset-x-0 h-1/3 bg-primary/70 animate-scan rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCardStack;
