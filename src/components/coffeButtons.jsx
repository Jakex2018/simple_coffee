const coffeButtons = ({ showAll, showAvailable }) => {
  return (
    <div className="flex gap-3 mt-5">
      <button
        onClick={showAll}
        className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-[#6F757C] px-6 font-medium text-neutral-200 transition "
      >
        <span>All Products</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
      <button
        onClick={showAvailable}
        className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md px-6 font-medium text-neutral-200 transition "
      >
        <span>Available Now</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    </div>
  );
};

export default coffeButtons;
