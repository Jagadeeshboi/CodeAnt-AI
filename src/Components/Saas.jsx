import { VscAzureDevops } from 'react-icons/vsc';
import { DiBitbucket } from 'react-icons/di';
import { FaGitlab } from 'react-icons/fa';
export const Saas=()=>
{
  return (
    <>
    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
      <img
        src="https://img.icons8.com/ios-filled/50/000000/github.png"
        alt="GitHub"
        className="w-5 h-5 mr-3"
      />
      Sign in with GitHub
    </button>
    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
      <DiBitbucket  className="w-5 h-5 mr-3 text-blue-700"/>
      Sign in with Bitbucket
    </button>
    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
      <VscAzureDevops  className="w-5 h-5 mr-3 text-blue-700"/>
      Sign in with Azure DevOps
    </button>
    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
      <FaGitlab  className="w-5 h-5 mr-3 text-orange-500"/>
      Sign in with GitLab
    </button>
    </>
  );
}