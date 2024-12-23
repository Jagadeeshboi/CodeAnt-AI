import { repositories } from '../../Utility/data';
import IconSearchBar from '../Searchbar';
import { BlueBtn, WhiteBtn } from '../Buttons';

export const TableHead = () => {
  return (
    <div
      id="head-table"
      className=" px-4 py-3 border-b border-gray-300 bg-white"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-xl/relaxed font-medium">Repositories</h1>
          <p className="text-sm text-gray-700">
            {repositories.length} Repositories
          </p>
        </div>
        <div>
          <WhiteBtn />
          <BlueBtn />
        </div>
      </div>
      <div id="search-bar" className="w-full md:w-4/12 sm:pt-4 lg:mb-2">
        <IconSearchBar />
      </div>
    </div>
  );
};
