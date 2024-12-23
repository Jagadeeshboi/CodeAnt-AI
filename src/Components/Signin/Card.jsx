import { FaArrowUp } from "react-icons/fa6"
import { AiFillPieChart } from "react-icons/ai";

export const Card = () => {

  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="relative mt-36">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100  max-w-md w-full">
          <div className=" flex items-center text-center border-b-2 border-gray-200 p-6">
            <img
              src="codeant_ai_logo.png"
              className="h-8 w-8 me-3"
              alt="Logo"
            />
            <h1 className="text-xl font-bold text-gray-800 ">
              AI to Detect & Autofix Bad Code
            </h1>
          </div>{/* if we need we use map fuction please note it i will hard coded here*/ }
          <div className="grid grid-cols-3 gap-4 text-center p-6">
            <div>
              <p className="text-lg font-bold text-gray-700">30+</p>
              <p className="text-sm text-gray-900">Language Support</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">10K+</p>
              <p className="text-sm text-gray-900">Developers</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">100K+</p>
              <p className="text-sm text-gray-900">Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="absolute top-40 -right-10 ">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100  max-w-md w-full p-6">
            <div className="flex justify-between w-64">
              <p className="rounded-full w-12 h-12 bg-indigo-200 p-2"><AiFillPieChart className="w-8 h-8 text-indigo-400"/></p>
              <p>
                <span className="text-blue-800 flex gap-1 justify-between items-center font-bold" ><FaArrowUp/> 14%</span>
                <span className="text-xs">This Week</span>
              </p>
            </div>
            <h1 className="text-sm font-medium mt-2">Issued Fixed</h1>
            <h1 className="text-2xl font-bold">500K+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
