import PricingSlider from "./PricingSlider";

import Trial from "./Trial";

const Container = () => {
  // const handleToggle = (isMonthly) => {
  //   console.log(`Switched to ${isMonthly ? "monthly" : "yearly"}`);
  //   // You can handle the state change here or pass it to a parent component
  // };
  return (
    <div className="bg-white rounded-lg shadow-lg md:min-w-[540px] w-full font-body">
      <div className="px-4 py-6 flex flex-col items-center w-full">
        <PricingSlider />
        <Trial />
      </div>
    </div>
  );
};

export default Container;
