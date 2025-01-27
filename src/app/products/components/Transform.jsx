import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const Transform = () => {
  return (
      <div className="px-[100px] mt-8">
          <h1 className="text-sm">SOLUTIONS</h1>
          <h1 className="text-4xl font-bold my-4 mb-7">Transform the way your organization works</h1>
          <div className="flex gap-3">
              <div className="font-semibold px-4 py-2 rounded-full bg-gray-300 text-black hover:text-white hover:bg-black">Securely transform with AI</div>
              <div className="font-semibold px-4 py-2 rounded-full bg-gray-300 text-black hover:text-white hover:bg-black">Create secure foundations</div>
              <div className="font-semibold px-4 py-2 rounded-full bg-gray-300 text-black hover:text-white hover:bg-black">Empower frontline workers</div>
              <div className="font-semibold px-4 py-2 rounded-full bg-gray-300 text-black hover:text-white hover:bg-black">Enable a smart workplace</div>
              <div className="font-semibold px-4 py-2 rounded-full bg-gray-300 text-black hover:text-white hover:bg-black">Future-proof flexible work</div>
          </div>

          <div className="flex mt-[80px]">
              {/* left side */}
              <div className="w-[40%]">
                  <div className="mt-6 font-bold items-center flex">Supercharge productivity <IoIosArrowUp className="ml-1"/>
</div>
                  <div className="mt-6">Find what you need get clearity fast, and stay on top of your day with an AI assistant for work.</div>
                  <div className="my-6 font-semibold items-center flex">Learn more <IoIosArrowForward className="ml-1"/>
</div>
                  <hr />
                  <div className="my-6 font-bold items-center flex">Amplify creativity <IoIosArrowDown className="ml-1"/>
</div>
                  <hr />
                  <div className="my-6 font-bold items-center flex">Customize with agents <IoIosArrowDown className="ml-1"/>
</div>
                  <hr />
                  <div className="my-6 font-bold items-center flex">Measure impact <IoIosArrowDown className="ml-1"/>
</div>
                  <hr />
                  <div className="my-6 font-bold items-center flex">Secure and protect <IoIosArrowDown className="ml-1"/>
</div>
              </div>

              {/* right side */}
              <div className="w-[60%]">
                  <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/372216-accordion-1.1-800x513?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1283&qlt=100&fmt=png-alpha&fit=constrain" alt="" />
              </div>
          </div>
    </div>
  )
}
export default Transform