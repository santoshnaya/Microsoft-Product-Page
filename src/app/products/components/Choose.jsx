const Choose = () => {
  return (
      <div className="bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/372216-Background-CTAStacked-1600x690?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=4000&hei=1725&qlt=100&fit=constrain')]">
          <div className="flex justify-center px-[100px] pb-[100px]">
              <div className="border flex rounded-xl shadow-xl shadow-blue-300 mt-[60px]">
                    {/* left side */}
              <div className="w-[50%] items-center ml-4 mr-8">
                  <h1 className="text-3xl font-bold relative top-[180px]">Choose your plan</h1>
                      <h1 className="relative top-[200px]">Find the best plan for your organization unique needs.</h1>
                      <div className="relative top-[290px]">
                      <button className="text-white font-bold bg-black px-4 py-3 rounded-xl">See plans and pricing</button>
                      <button className="text-black font-bold border-[2px] border-black px-4 py-3 rounded-xl ml-2">Contact Sales</button>
                      </div>
              </div>

              {/* right side */}
              <div className="w-[50%] rounded-xl">
                  <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/CTAStacked-ChoosePlan-664x498-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=664&qlt=100&fit=stretch" alt="" className="rounded-xl p-3"/>
              </div>
            </div>
          </div>
    </div>
  )
}
export default Choose