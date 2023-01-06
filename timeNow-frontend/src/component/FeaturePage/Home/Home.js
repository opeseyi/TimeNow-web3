import LeftHome from "./LeftHome";
import Navigation from "./Navigation/Navigation";
import RightHome from "./RightHome";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <Navigation />
      </div>
      <div className="flex flex-row ">
        <div className="basis-2/4  ">
          <LeftHome />
        </div>
        <div className="basis-2/4 bg-blue-400 h-screen">
          <RightHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
