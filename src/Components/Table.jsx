import { FiDatabase } from 'react-icons/fi';
import { RxDotFilled } from 'react-icons/rx';
import { repositories } from '../Utility/data';
import { TableHead } from './TableHead';
export const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto border border-gray-300 shadow-sm sm:rounded-lg">
        <TableHead />
        <div className="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
            {repositories.map((data, i) => (
              <div
                key={i}
                className="bg-white px-4 border-b :bg-gray-800 0 hover:bg-gray-50 cursor-pointer"
              >
                <h1 className="px-4 py-3 font-medium flex justify-btween  items-center text-base font-medium text-gray-900 whitespace-nowrap :text-white">
                  <span>{data.name}</span>
                  <span className=" ml-2 bg-blue-100 text-blue-500 text-xs font-normal border border-blue-200  px-2.5 py-0.3 rounded-full">
                    {data.visibility}
                  </span>
                </h1>
                <div className="flex px-4 gap-10 pb-4 text-xs text-gray-700">
                  <p className="flex items-center">
                    {data.technology}
                    <RxDotFilled className="w-4 h-4 text-blue-500 " />
                  </p>
                  <p>
                    <span className="flex items-center gap-1">
                      <FiDatabase />
                      {data.size}
                    </span>
                  </p>
                  <p>Updated {data.updated}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
