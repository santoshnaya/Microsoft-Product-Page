const Header = () => {
  return (
      <div className="flex justify-between px-[100px] h-[60px] mb-[80px] items-center border-b">
          <div className="flex gap-9 font-semibold">
              <div>Solution</div>
              <div>Featured news</div>
              <div>What's included</div>
              <div>Demos</div>
              <div>Plans</div>
              <div>Customer stories</div>
          </div>


          <div className="flex gap-2">
              <div className="text-white font-semibold px-3 py-2 bg-black rounded-lg">See plans and pricing</div>
              <div className="text-black font-semibold px-3 py-2 border-[2px] border-black rounded-lg">Contact Sales</div>
          </div>
    </div>
  )
}
export default Header