import { Divide } from "lucide-react";
import { Separator } from "../ui/separator";
const MainSection = () => {
  return (
    <div id="main_section" className="flex w-full flex-col md:flex-row gap-6">
      <div id="sidebarsection" className="flex  w-full md:w-1/3">
        {/* card section  */}
        <div
          id="weathercard"
          className="p-4 rounded-xl bg-slate-800  text-white w-full"
        >
          <p>Now</p>
          <h2 className="md:text-6xl text-3xl mt-2 mb-2">-41_C</h2>
          <p id="weather">Fog</p>
          <Separator className="my-4 bg-gray-300" />
          <p>Thrusday, 2, Mar</p>
          <p>London, UK</p>
        </div>
      </div>
      {/*  Second Sidebar  */}
      <div className="flex w-full">
        <h1>Hello </h1>
      </div>
    </div>
  );
};

export default MainSection;
