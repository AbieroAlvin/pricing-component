import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

const dataPoints = [
  { value: "10k", price: 8 },
  { value: "50k", price: 12 },
  { value: "100k", price: 16 },
  { value: "500k", price: 24 },
  { value: "1m", price: 36 },
];

const PricingSlider = () => {
  const [selectedData, setSelectedData] = useState(dataPoints[0]);
  const [isYearly, setIsYearly] = useState(false);

  const handleChange = (e) => {
    const selectedValue = dataPoints[parseInt(e.target.value, 10)];
    setSelectedData(selectedValue);
  };

  const calculateTotalPrice = () => {
    const basePrice = selectedData.price;
    const discount = isYearly ? 0.75 : 1;
    return (basePrice * discount).toFixed(2);
  };

  const handleToggleSwitch = (isMonthly) => {
    setIsYearly(!isMonthly);
  };
  return (
    <div>
      <div className="font-body">
        <div className="flex justify-between items-center mb-4 w-full">
          <div className="text-gray-700 font-semibold flex items-center justify-between w-full">
            <div className="flex items-center gap-1 text-[12px] uppercase">
              {selectedData.value}
              <span className="uppercase">page views</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl">${calculateTotalPrice()}</span>{" "}
              <span>/ month</span>
            </div>
          </div>
        </div>
        <div className="slider-container relative">
          {/* <div className="selected-range absolute bg-green-500 rounded-full h-5 w-full"></div> */}
          <input
            type="range"
            min="0"
            max={dataPoints.length - 1}
            step="1"
            value={dataPoints.indexOf(selectedData)}
            onChange={handleChange}
            className="slider w-full h-5 cursor-pointer"
          />
          {/* <div className="slider-thumb absolute z-20 bg-white border border-gray-300 rounded-full h-8 w-8 -mt-1.5 cursor-pointer shadow-md"></div> */}
        </div>
      </div>
      <ToggleSwitch onToggle={handleToggleSwitch} />
    </div>
  );
};

export default PricingSlider;
