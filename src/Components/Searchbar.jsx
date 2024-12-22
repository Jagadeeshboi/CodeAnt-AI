import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const IconSearchBar = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="w-full max-w-full">
      <div className="relative ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Repositories"
          className="w-full text-sm px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <FiSearch className="absolute left-3 top-3 text-gray-500" />
      </div>
    </div>
  );
};
export default IconSearchBar;
