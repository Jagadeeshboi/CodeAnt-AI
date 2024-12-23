import BackgroundComponent from './BgComponent';
import SignInPage from './Signin';

export const SigninPage = () => {
  return (
    <div className="max-w-full  lg:grid lg:grid-cols-2">
      <div className=" hidden lg:block bg-gray-100 border-r border-gray-300">
        <BackgroundComponent/>
      </div>
      <div>
        <SignInPage />
      </div>
    </div>
  );
};
