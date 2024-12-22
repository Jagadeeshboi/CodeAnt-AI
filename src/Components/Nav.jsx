import { MdOutlineMenu } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

export const Navbar = ({ handleClick,open }) => {
  return (
    <nav className="fixed lg:hidden top-0 z-50 w-full bg-white border-b border-gray-200 bg-gray-100">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <a href="https://www.codeant.ai" className="flex ms-2 md:me-24">
              <img
                src="data:image/jpeg;base64,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"
                className="h-8 me-3"
                alt="codeant Logo"
              />
              <span className="self-center text-xl lg:text-2xl whitespace-nowrap :text-white">
                CodeAnt AI
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden"
                  onClick={handleClick}
                >
                  <span className="sr-only">Open sidebar</span>
                  {open ? (
                    <RxCross2 className="w-6 h-6" />
                  ) : (
                    <MdOutlineMenu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
