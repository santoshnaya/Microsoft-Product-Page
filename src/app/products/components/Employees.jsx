import { IoIosArrowForward } from "react-icons/io";
import { FaArrowUpRightDots } from "react-icons/fa6";


const Employees = () => {
  return (
      <div className="mx-[100px]">
          <div className="flex justify-between">
              <h1 className="font-sm text-sm mb-5">WHAT'S INCLUDED</h1>
              <div className="font-semibold">View all</div>
          </div>

          <div className="flex gap-2 mb-6">
              <div className="px-6 py-2 bg-gray-200 hover:bg-black text-black hover:text-white rounded-full fonboldd
              ">Security</div>
              <div className="px-6 py-2 bg-gray-200 hover:bg-black text-black hover:text-white rounded-full fonboldd
              ">Productivity</div>
              <div className="px-6 py-2 bg-gray-200 hover:bg-black text-black hover:text-white rounded-full fonboldd
              ">AI</div>
              <div className="px-6 py-2 bg-gray-200 hover:bg-black text-black hover:text-white rounded-full fonboldd
              ">Performance</div>
          </div>

          <div className="flex w-[100%]">
              {/* left side */}
              <div className="w-[42%] border rounded-lg mr-3 shadow-lg shadow-gray-200 bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Cardgrid_bingchat_new?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1464&hei=2091&qlt=95&fit=constrain')] bg-cover">
                  <div className="relative top-[570px] px-5">
                  <h1 className="text-3xl text-white">Microsoft Copilot</h1>
                  <h1 className="text-white">Work confidently using AI-powered chat with enterprise data protection.</h1>
                  <button className="px-4 py-2 rounded-lg bg-black text-white">learn more</button>
                  </div>
              </div>
              {/* right side */}
              <div className="flex flex-wrap gap-3">
                  <div className="p-8 w-[300px] border rounded-lg shadow-lg shadow-gray-200">
                  <FaArrowUpRightDots />
                    <h1 className="font-bold text-3xl mt-10">Defender for Endpoint</h1>
                    <h1 className="pt-4">Discover and help secure endpoint devices across your multiplatform enterprise</h1>
                    <h1 className="pt-[50px]">Lean more</h1>
                  </div>
                  <div className="p-8 w-[300px] border rounded-lg shadow-lg shadow-gray-200">
                  <FaArrowUpRightDots />
                    <h1 className="font-bold text-3xl mt-10">Defender for Endpoint</h1>
                    <h1 className="pt-4">Discover and help secure endpoint devices across your multiplatform enterprise</h1>
                    <h1 className="pt-[50px]">Lean more</h1>
                  </div>
                  <div className="p-8 w-[300px] border rounded-lg shadow-lg shadow-gray-200">
                  <FaArrowUpRightDots />
                    <h1 className="font-bold text-3xl mt-10">Defender for Endpoint</h1>
                    <h1 className="pt-4">Discover and help secure endpoint devices across your multiplatform enterprise</h1>
                    <h1 className="pt-[50px]">Lean more</h1>
                  </div>
                  <div className="p-8 w-[300px] border rounded-lg shadow-lg shadow-gray-200">
                  <FaArrowUpRightDots />
                    <h1 className="font-bold text-3xl mt-10">Defender for Endpoint</h1>
                    <h1 className="pt-4">Discover and help secure endpoint devices across your multiplatform enterprise</h1>
                    <h1 className="pt-[50px]">Lean more</h1>
                  </div>
                  <div className="p-8 w-[300px] border rounded-lg shadow-lg shadow-gray-200">
                  <FaArrowUpRightDots />
                    <h1 className="font-bold text-3xl mt-10">Defender for Endpoint</h1>
                    <h1 className="pt-4">Discover and help secure endpoint devices across your multiplatform enterprise</h1>
                    <h1 className="pt-[50px]">Lean more</h1>
                  </div>
                  <div className="p-8 w-[300px] border rounded-lg shadow-lg shadow-gray-200">
                  <FaArrowUpRightDots />
                    <h1 className="font-bold text-3xl mt-10">Defender for Endpoint</h1>
                    <h1 className="pt-4">Discover and help secure endpoint devices across your multiplatform enterprise</h1>
                    <h1 className="pt-[50px]">Lean more</h1>
                  </div>
                  
              </div>
          </div>
    </div>
  )
}
export default Employees