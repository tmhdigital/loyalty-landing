const PhoneMockup = ({ children, className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-[260px] sm:w-[280px] rounded-[2.5rem] bg-secondary p-2.5 shadow-card select-none ${className}`}
    >
      <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-24 h-5 rounded-full bg-secondary z-20" />
      <div className="relative rounded-[2rem] overflow-hidden bg-white h-[540px] flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;
