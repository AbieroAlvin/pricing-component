import check from "../assets/images/icon-check.svg";

const Trial = () => {
  return (
    <div className="border-t-[1px] border-gray-300 w-full">
      <div className="flex md:flex-row justify-between items-center flex-col gap-6 md:p-4 py-3 px-0 md:text-left text-center">
        <div className="flex flex-col gap-2 text-GrayishBlue ">
          <div className="flex items-center gap-2 text-[15px]">
            <img src={check} alt="" className="w-[5px] h-[5px]" />
            Unlimited websites
          </div>
          <div className="flex items-center gap-2 text-[15px]">
            <img src={check} alt="" className="w-[5px] h-[5px]" />
            100% data ownership
          </div>
          <div className="flex items-center gap-2 text-[15px]">
            <img src={check} alt="" className="w-[5px] h-[5px]" />
            Email reports
          </div>
        </div>
        <div>
          <button className="bg-DarkDesaturatedBlue text-PaleBlue text-[13px] md:px-12 px-6 rounded-full md:p-2.5 p-2">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
