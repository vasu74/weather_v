import MainSection from "./components/resuable/mainsection";
import { Input } from "./components/ui/input";
import "./App.css";

const App = () => {
  return (
    <div className="bg-black p-4 max-h-screen max-w-screen text-white">
      <header className="flex  items-center justify-between py-2 mb-6">
        <div id="logo">
          <a href="#" className="text-2xl md:text-3xl">
            Weather
          </a>
        </div>
        <div id="nav_side" className="flex  gap-4 items-center md:w-[40%] ">
          <Input
            placeholder="Enter City..."
            type="email"
            className="hidden md:block rounded-xl  p-2"
          />

          <button className=" rounded-xl p-2 bg-white md:w-2/3 text-black text-xl">
            Locate Us
          </button>
        </div>
      </header>
      <MainSection />
    </div>
  );
};

export default App;
