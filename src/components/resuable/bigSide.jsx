const BigSide = () => {
  return (
    <>
      <div className="p-4 rounded-xl bg-slate-800  text-white w-full">
        <h2 className="mb-4">Todays HighLights</h2>
        {/* first div */}
        <div id="first" className="flex flex-col md:flex-row gap-4">
          <div className="p-4 rounded-xl bg-slate-900  text-white  w-full md:w-1/2">
            <div className="flex justify-between items-center">
              <h3 className="block text-xl">Air Quality Index</h3>
              <p className=" px-2 block bg-[#E08AB5] rounded-xl text-lg">
                Very Poor
              </p>
            </div>
            <div className="flex gap-2 mt-6 justify-around">
              <div className="flex flex-col flex-wrap">
                <p>PMSE</p>
                <h5>177</h5>
              </div>
              <div className="flex flex-col">
                <p>PMSE</p>
                <h5>177</h5>
              </div>
              <div className="flex flex-col">
                <p>PMSE</p>
                <h5>177</h5>
              </div>
              <div className="flex flex-col">
                <p>PMSE</p>
                <h5>177</h5>
              </div>
              <div className="flex flex-col">
                <p>PMSE</p>
                <h5>177</h5>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 text-white w-full md:w-1/2">
            <h3 className=" text-xl mb-4">Sunsrise and Sunset</h3>
            <div className="flex gap-2">
              <div id="sunrise" className="flex w-1/2 bg-red-500 rounded-xl">
                <div>
                  <a href="#" />
                </div>
                <div className="flex flex-col">
                  <p>Sunrise</p>
                  <h1>6.46 AM</h1>
                </div>
              </div>
              <div id="sunrise" className="flex w-1/2 bg-red-500 rounded-xl">
                <div>
                  <a href="#" />
                </div>
                <div className="flex flex-col">
                  <p>Sunrise</p>
                  <h1>6.46 AM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second div */}
        <div id="second"></div>
      </div>
    </>
  );
};

export default BigSide;
