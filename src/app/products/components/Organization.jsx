const Organization = () => {
  return (
      <div className="ml-[100px] mt-[100px]">
          <h1 className="text-sm mb-3">CUSTOMER STORE</h1>
          <h1 className="text-3xl font-bold mb-11">See how organizations innovate with Microsoft 365</h1>
          <div className="flex justify-center w-[85%] border rounded-2xl shadow-lg shadow-gray-300">
              <div className="w-[50%] p-6">
                  <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/388380-logo-cliffordchance-174x75?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=348&hei=150&qlt=100&fmt=png-alpha&fit=constrain" alt="" className="w-[200px] border rounded-xl" />
                  <h1 className="mt-5 font-extrabold">“We’re already getting a lot of value from Copilot, but we’re just scratching the surface of what it can do. It’s not just about productivity but also about generating greater business value.”</h1>
                  <h1 className="mt-5">Paul Greenwood, Chief Technology Officer, Clifford Chance​</h1>
                  <h1 className="mt-[100px]">Products</h1>
                  <div className="flex gap-5">
                  <div className="flex mt-2">
                      <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/copilot-icon-15x15-359585?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=95" alt="" className="w-[20px] mr-2 mt"/>
                      <h1 className="font-semibold">Microsoft 365 Copilot</h1>
                  </div>
                  <div className="flex mt-2">
                      <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Icon_MSTeam_25x25?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=95" alt="" className="w-[20px] mr-2 mt"/>
                      <h1 className="font-semibold">Microsoft Teams</h1>
                  </div>
                  </div>
                  <div className="mt-4">
                      <button className="bg-black px-4 py-2 text-white font-bold rounded-xl">Watch the video</button>
                      <button className="rounded-xl px-4 py-2 border-[2px] border-black font-bold ml-3">Read the story</button>
                  </div>
              </div>
              <div className="w-[50%] items-center">
                  <img src="https://www.investopedia.com/thmb/3CFad2hRXYCTuRSjWymvg4d1sus=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-459885938-e175bfca62384bdba3266243199b5bd6.jpg" alt="" className="shadow-lg shadow-gray-300 top-11 rounded-xl relative right-3"/>
              </div>
          </div>
    </div>
  )
}
export default Organization