// import mockup from "../../Assets/Mockup.png";
// import { ReactComponent as Logo } from "../../Assets/Logo.svg";
import { ReactComponent as Sheild } from "../../Assets/Shield.svg";
import Button from "../../UI/Button";

const LeftHome = () => {
  return (
    <div className="ml-32 mt-40">
      <h1 className="text-blue-800 text-6xl font-medium">
        Post when your
        <br />
        audience is most
        <br />
        active.
      </h1>
      <p className="text-gray-500 mt-4 tracking-wide">
        with TimeNow, automatically scheledule your post on
        <br />
        Twitter, LinkedIn and Instagram to post when your
        <br />
        followers are most active.
      </p>
      <div>
        <Button text="Start Scheleduling" color="blue" />
        <Button text="View Demo" color="white" />
      </div>
      <div className="mt-4 inline-flex">
        <Sheild />
        <h3 className="text-gray-500 mx-2">TimeNow does not sell your data.</h3>
        <a href="#" className="underline text-gray-800">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LeftHome;
