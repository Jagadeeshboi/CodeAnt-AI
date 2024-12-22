import { FaPlus } from 'react-icons/fa6';
import { FiRefreshCw } from "react-icons/fi";

export const BlueBtn = () => {
  return (
    <button
      type="button"
     className="px-3 py-2 text-xs text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
    >
      <FaPlus /> Add Repository
    </button>
  );
};

export const WhiteBtn = () => {
  return (
    <button
      type="button"
     className="py-2  w-auto px-3 me-2 mb-2 text-xs  text-gray-900 focus:outline-none bg-white rounded-lg border inline-flex items-center gap-2 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
    >
      <FiRefreshCw/> Refresh All
    </button>
  );
};
