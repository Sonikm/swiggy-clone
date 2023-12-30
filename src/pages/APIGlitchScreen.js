import { Link } from "react-router-dom";
import api_glitch from "../assets/api_glitch.png"

function APIGlitchScreen() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center api_glitch_screen">
     <img className="h-[230px] mb-5" src={api_glitch} alt=""/>
      <h1 className="text-3xl font-bold">We'll be back shortly</h1>
      <p className="text-gray-500">We are fixing a temporary glitch. Sorry for the inconvenience.</p>
      <Link to="/" className="mt-2">
        <button className=" bg-orange-500 p-3 py-2 text-white">Go Back</button>
      </Link>
    </div>
  );
}

export default APIGlitchScreen;