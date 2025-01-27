import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="text-center pt-[100px] justify-center pb-[80px] bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/hero-background-for-enterprise-370238?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1600&hei=680&qlt=100&fit=constrain')] text-black">
      <div className="font-mono text-sm">MICROSOFT 365 FOR ENTERPRISE</div>
      <div className="font-bold text-5xl my-5">
        Become an AI-powered organization
      </div>
      <div className="mb-10">
        Empower your teams to drive better business results with Microsoft 365.
        Then supercharge <br /> it with Microsoft 465 Copilot, you AI assistant
        for work.
      </div>
      <div className="flex gap-3 justify-center mb-10">
        <button className="px-4 py-3 bg-black text-white font-semibold rounded-lg">
          See plans and pricing
        </button>
        <button className="px-4 py-3 border-[2px] border-black rounded-lg">
          Contact Sales
        </button>
      </div>
      <div className="flex justify-center gap-7">
        <h1 className="px-[80px] py-[20px] rounded-full border hover:text-white hover:bg-black flex items-center gap-1 border-black">
          For home <IoIosArrowForward />
        </h1>
        <h1 className="px-[80px] py-[20px] rounded-full border hover:text-white hover:bg-black flex items-center gap-1 border-black">
          For business <IoIosArrowForward />
        </h1>
        <h1 className="px-[80px] py-[20px] rounded-full border hover:text-white hover:bg-black flex items-center gap-1 border-black">
          For enterprise <IoIosArrowForward />
        </h1>
        <h1 className="px-[80px] py-[20px] rounded-full border hover:text-white hover:bg-black flex items-center gap-1 border-black">
          For education <IoIosArrowForward />
        </h1>
      </div>
    </div>
  );
};
export default Hero;
