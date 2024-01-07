import pattern from "../assets/images/pattern-circles.svg";

const Heading = () => {
  return (
    <div className="my-8 font-body p-8 z-20 w-full">
      <div className="relative z-20 w-full ">
        <div className="text-center flex flex-col items-center justify-center text-DarkDesaturatedBlue">
          <h1 className="md:text-3xl text-xl font-bold mb-4">
            Simple, traffic-based pricing
          </h1>
          <p className="px-6 md:px-4">
            Sign-up for our 30-day trial. No credit card required
          </p>
        </div>
        <div className="z-[-1] absolute top-[-2rem] md:left-[35%] left-[30%]">
          <img src={pattern} alt="circle patterns background" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
