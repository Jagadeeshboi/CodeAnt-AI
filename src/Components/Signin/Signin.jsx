import { useState } from 'react';
import { Saas } from './Saas';
import { SelfHosted } from './Selfhosted';


const SignInPage = () => {
  const [Btn, SetBtn] = useState('saas');
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-lg border border-gray-200 p-8 w-full max-w-xl">
        <div className="flex justify-center gap-2 items-center mx-auto w-full max-w-md mb-6">
          <img
            src="codeant_ai_logo.png"
            alt="logo"
            width={40}
          />
          <h1 className="text-gray-900 text-2xl">CodeAnt AI</h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-medium text-gray-800">
            Welcome to CodeAnt AI
          </h1>
        </div>

        <div className="max-w-full w-full border-b-2 border-gray-200 pb-6 flex justify-between">
          <button
            className={`w-1/2 px-4 py-2  ${
              Btn === 'saas' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
            } rounded-md`}
            onClick={() => SetBtn('saas')}
          >
            SAAS
          </button>
          <button
            className={`px-4 w-1/2 py-2 ${
              Btn === 'self' ? 'bg-blue-600 text-white rounded-md' : 'bg-gray-100 text-gray-600 rounded-r-md'
            } `}
            onClick={() => SetBtn('self')}
          >
            Self Hosted
          </button>
        </div>
        <div className="space-y-4 font-medium h-56 mt-4 ">
          {Btn === 'saas' ? <Saas /> : <SelfHosted />}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          By signing up you agree to the{' '}
          <a href="#" className="text-black font-bold">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
