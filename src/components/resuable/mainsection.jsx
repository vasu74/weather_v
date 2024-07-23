import { Divide } from "lucide-react";
import { Separator } from "../ui/separator";
import BigSide from "./bigSide";
const MainSection = () => {
  return (
    <div id="main_section" className="flex w-full flex-col md:flex-row gap-6">
      <div
        id="sidebarsection"
        className="flex flex-col gap-6  md:w-2/3 lg:w-1/5"
      >
        {/* card section  */}
        <div
          id="weathercard"
          className="p-4 rounded-xl bg-slate-800  text-white w-full"
        >
          <p className="text-3xl mb-4">Now</p>
          <h2 className="text-6xl mt-2 mb-4">- 41_C</h2>
          <p id="weather" className="text-3xl">
            Fog
          </p>
          <Separator className="my-4 bg-gray-300" />
          <p className="text-xl mb-2">Thrusday, 2, Mar</p>
          <p className="text-xl">London, uUK</p>
        </div>

        <h3 className="text-2xl">5 Days Forecast</h3>
        <div className="p-4 rounded-xl bg-slate-800 flex flex-col gap-4  text-white w-full">
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          <div className="flex justify-between">
            <p className="block">5C</p>
            <p className="block">2 Mar</p>
            <p className="block">Thrusday</p>
          </div>
          s
        </div>
      </div>
      {/*  Second Sidebar  */}
      <div className="flex flex-col gap-2 w-full">
        <BigSide />
      </div>
    </div>
  );
};

export default MainSection;
