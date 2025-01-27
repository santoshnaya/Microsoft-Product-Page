const Discover = () => {
  return (
      <div className="mx-[100px] mt-[80px] mb-[100px]">
          <h1 className="font-sm my-[20px]">FEATURED NEWS</h1>
          <h1 className="text-4xl font-bold my-[10px] mb-[30px]">Discover what's happening with Microsoft 365</h1>
          <div className="flex  border rounded-[30px] items-center shadow-xl shadow-gray-300">
              {/* left side */}
              <div className="w-[50%] items-center ml-4 mr-8">
                  <h1 className="text-3xl font-semibold mb-5">Explore the newest Microsoft 365 Copilot capabilities</h1>
                  <h1>Drive AI transformation across your business with the latest innovations <br /> announced at ignite.</h1>
                  <button className="relative top-[150px] rounded-lg px-3 py-2 bg-black text-white font-semibold items-end">Read the blog</button>
              </div>

              {/* right side */}
              <div className="w-[50%]">
                  <img className="rounded-[30px] p-3" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/388622-FeaturedNewsImage-1328x996?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=15000&qlt=100&fmt=png-alpha&fit=constrain" alt="" />
              </div>
          </div>

          {/* products */}
          <div className="flex justify-center gap-2 mt-11 flex-wrap ">
          <div className="w-[400px] border rounded-lg shadow-lg shadow-gray-300">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Work-Trend-AI-416x179?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=416&hei=179&qlt=100&fmt=png-alpha&fit=constrain" alt="" className="rounded-xl p-2"/>
          <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">2024 Work Trend Index​: AI for work is here</div>
                  <div className="mb-3">75% of knowledge workers around the world use generative AI at work. Are business leaders ready?</div>
                  <div><button className="mb-4 px-4 py-2 rounded-lg bg-black text-white font-semibold mt-[75px]">Read the report</button></div>
              </div>
          </div>
          <div className="w-[400px] border rounded-lg shadow-lg shadow-gray-300">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Copilot-adoption-vp4-832x357?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=416&hei=179&qlt=100&fmt=png-alpha&fit=constrain" alt="" className="rounded-lg p-2"/>
          <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">Jump-start your AI transformation</div>
                  <div className="mb-3">Tap into expert guidance—inspired by companies leading the way—to empower everyone in your organization with Microsoft 365 Copilot.
</div>
                  <div><button className="relative bottom-6 rounded-lg mb-4 px-4 py-2 bg-black text-white font-semibold mt-[75px]">Learn more</button></div>
              </div>
          </div>
          <div className="w-[400px] border rounded-lg shadow-lg shadow-gray-300">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/HomeCTAStacked4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1664&hei=716&qlt=100&fit=constrain" alt="" className="rounded-xl p-2"/>
          <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">Shifting tactics fuel surge in business email compromise</div>
                  <div className="mb-3">Learn about the latest security research and how to help strengthen your business’s protection against emerging cyberthreats.</div>
                  <div><button className="mb-4 px-4 py-2 rounded-lg bg-black text-white font-semibold mt-[75px]">Read the article</button></div>
              </div>
          </div>
         



          
            </div>
    </div>
  )
}
export default Discover