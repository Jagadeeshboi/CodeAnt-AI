import React, { useState } from 'react';
import { Saas } from './Saas';
import { SelfHosted } from './Selfhosted';

const SignInPage = () => {
  const [Btn, SetBtn] = useState('saas');
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white rounded-lg border border-gray-200 p-8 w-full max-w-xl">
        <div className="flex justify-center items-center mx-auto w-full max-w-md">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            width={90}
          />
          <h1 className="text-gray-900 text-2xl">CodeAnt AI</h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-medium text-gray-800">
            Welcome to CodeAnt AI
          </h1>
        </div>

        <div className="max-w-full flex justify-between  mb-6">
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
        <div className="space-y-4 font-medium h-56">
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
