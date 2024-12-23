import { IoKeyOutline } from "react-icons/io5";
import { FaGitlab } from 'react-icons/fa';
export const SelfHosted=()=>
{
  return(
    <>
    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
      <FaGitlab  className="w-5 h-5 mr-3 text-orange-500"/>
      Sign in with GitLab
    </button>
      <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
      <IoKeyOutline  className="w-5 h-5 mr-3 text-gray-700"/>
      Sign in with SSO
    </button>
    </>
  )
}