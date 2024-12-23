import { DropDown } from './DropDown';
import { NavLink } from 'react-router-dom';
import { SidebarContent } from '../../Utility/data';

export const SideList = ({ handleClick, open }) => {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed bg-white top-0 left-0 z-40 w-full lg:w-64 h-8/12 lg:h-screen pt-4 transition-transform -translate-y-full ${
        open && 'translate-y-0  '
      }border-r  border-gray-200 lg:translate-y-0 :bg-gray-800 :border-gray-700"
        pt-16 lg:pt-2`}
      aria-label="Sidebar"
    >
      {open && (
        <div
          className="fixed h-screen -z-40 inset-0 bg-gray-400 bg-opacity-20 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in lg:hidden "
          onClick={handleClick}
        ></div>
      )}

      <div className="h-full lg:flex lg:flex-col lg:justify-between px-3 pb-4 overflow-y-auto font-medium bg-white ">
        <ul className="space-y-2 pt-12 lg:pt-4">
          <div className="hidden  space-y-4 lg:block">
            <div className="flex itmes-center">
              <img
                src="codeant_ai_logo.png"
                className="h-8 me-3"
                alt="codeant Logo"
              />
              <h1 className="text-xl font-normal">CodeAnt AI</h1>
            </div>
          </div>
            <div className="w-full">
              <DropDown />
            </div>
          {SidebarContent.slice(0, 5).map((data, i) => (
            <li key={i} onClick={handleClick}>
              <NavLink
                to={data.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-blue-600 rounded-lg flex items-center p-2'
                    : 'text-black hover:bg-gray-100 group rounded-lg flex items-center p-2 '
                }
              >
                <p className="transition duration-75 group-hover:text-gray-900 ">
                  <data.icon className="w-5 h-5" />
                </p>
                <span className="ms-3">{data.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 ">
          {SidebarContent.slice(5, 8).map((data, i) => (
            <li key={i}>
              <NavLink
                to={data.path}
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group "
              >
                <p className="text-black transition duration-75 group-hover:text-gray-900 ">
                  <data.icon className="w-5 h-5" />
                </p>
                <span className="ms-3 text-black ">{data.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
