import { useState, useEffect } from "react";

const BookingCard = ({ service, isInitiallyPicked, onPickService }) => {
  const [isPicked, setIsPicked] = useState(isInitiallyPicked);

  // Update if the initial picked state changes (like after localStorage load)
  useEffect(() => {
    setIsPicked(isInitiallyPicked);
  }, [isInitiallyPicked]);
  
  const handlePick = () => {
    const newPickedState = !isPicked;
    setIsPicked(newPickedState);
    onPickService(service, newPickedState);
  };
  return (
    <>
      <div className="flex flex-col bg-white rounded-3xl">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                {service.service}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {service.description}
              </p>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-5xl font-light tracking-tight text-black">
                  {service.price}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8" onClick={handlePick}>
          <button
            aria-describedby="tier-company"
            className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            {isPicked ? "✓" : "Pick"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
