import cardFront from "../assets/rewaldo-card-green-front.png";

const LoyaltyCardStack = () => {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      {/* back card */}
      <div className="absolute -top-6 -right-4 w-full h-56 rounded-3xl bg-secondary/90 rotate-6 shadow-card" />
      {/* mid card */}
      <div className="absolute -top-3 -right-2 w-full h-56 rounded-3xl bg-primaryDark rotate-3 shadow-card opacity-90" />

      {/* front card */}
      <div className="relative w-full h-56 rounded-3xl shadow-card animate-float overflow-hidden">
        <img
          src={cardFront}
          alt="Rewaldo loyalty card"
          className="w-full h-full object-cover rounded-3xl"
        />
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
