import { useState } from "react";

const ToggleSwitch = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
    onToggle(!isMonthly); // Pass the current state to the parent component if needed
  };
  return (
    <div className="my-3">
      <label className="flex items-center cursor-pointer">
        <div className="ml-3 text-gray-700 font-medium text-[13px]">
          Monthly Billing
        </div>
        <div className="relative ml-3">
          <input
            type="checkbox"
            className="hidden"
            checked={isMonthly}
            onChange={handleToggle}
          />
          <div
            className={`toggle__line w-11 h-5 bg-${
              isMonthly ? "Toggle" : "StrongCyan"
            } hover:bg-StrongCyan rounded-full shadow-inner transition-background-color relative flex items-center px-1`}
          >
            <div
              className={`toggle__dot absolute w-3 h-3 bg-LightGrayishBlue rounded-full shadow transition-transform duration-300 ease-in-out transform ${
                isMonthly ? "translate-x-0" : "translate-x-6"
              }`}
            ></div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="ml-3 text-gray-700 font-medium text-[13px]">
            Yearly Billing
          </div>
          <div className="text-LightRed text-[10px] rounded-full px-[4px] py-[2px] flex gap-1 bg-LightGrayishRed">
            -25% <span className="hidden md:flex">discount</span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
