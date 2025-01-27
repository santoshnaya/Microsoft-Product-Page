import { CiMoneyBill } from "react-icons/ci";
import { PiWarningOctagonLight } from "react-icons/pi";
import { BsPersonPlus } from "react-icons/bs";


const More = () => {
  return (
    <div className="text-center mt-[100px]">
      <h1 className="text-sm mb-4">DEMOS</h1>
      <h1 className="text-3xl mb-4">Get more done with Copilot</h1>
      <h1 className="mb-4">
        Work more productively, boost efficiency, and improve business outomes
        with Microsoft <br /> 365 Copilot.
      </h1>
      <div className="flex justify-center flex-wrap mb-11">
        <div className="w-[200px] border py-4 hover:bg-black hover:text-white">
          Microsoft 365 Copilot
        </div>
        <div className="w-[200px] border py-4 hover:bg-black hover:text-white">
          Copilot Studio
        </div>
        <div className="w-[200px] border py-4 hover:bg-black hover:text-white">
          Copilot Pages
        </div>
        <div className="w-[200px] border py-4 hover:bg-black hover:text-white">
          Copilot in Excel
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">
        Sperk creativity and increase productivity
      </h1>
      <h1 className="mb-11">Microsoft 365 Copilot</h1>

      <div className="flex justify-center">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/381919-ms-copilo-sizzle-august-moment-english_tbmnl_en-us?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=4000&qlt=100&fit=constrain"
          alt="Example Image"
          className="w-[800px] rounded-[30px]"
        />
          </div>
          
          {/* lower section */}
          <h1 className="text-sm mt-[100px]">BUSINESS VALUE</h1>
          <h1 className="text-3xl font-bold my-3">Reduce costs and save time</h1>
          <h1 className="text-sm font-thin">Consolidate your IT stack with Microsoft 365</h1>

          <div className="flex justify-evenly gap-5 mt-11">
              <div className="flex gap-1 w-[250px]">
                  <div><CiMoneyBill className="text-5xl text-blue-600"/>
</div>
                  <div>
                  <div>USD$86.25 per-user licensing savings per month.<sup>2</sup></div>
                  <div className="text-sm mt-3">Read the study</div>
                 </div>
              </div>
              <div className="flex gap-1 w-[250px]">
                  <div><PiWarningOctagonLight className="text-5xl text-blue-600"/>
</div>
                  <div>
                  <div>50% reduced risk of data branch.<sup>2</sup></div>
                  <div className="text-sm mt-3">Read the study</div>
                  </div>
              </div>
              <div className="flex gap-1 w-[250px]">
                  <div><BsPersonPlus className="text-5xl text-blue-600"/>
</div>
                  <div>
                  <div>50% reduction in help desk calls.<sup>2</sup></div>
                  <div className="text-sm mt-3">Read the study</div>
                  </div>
              </div>
              
          </div>
    </div>
  );
};
export default More;
