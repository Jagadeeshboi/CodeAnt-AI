import { Card } from "./Card";

const BackgroundComponent = () => {
  return (
    <div className="relative h-screen bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0  ">
        <img
          src="codeant_ai_bg.png"
          className="w-64"
          alt="Logo"
        />
      </div>
      
      <div className="relative z-10 flex justify-center items-center h-full">
      <Card />
      </div>
    </div>
  );
};

export default BackgroundComponent;
