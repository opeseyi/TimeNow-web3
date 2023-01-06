import { NavLink } from "react-router-dom";
import ConnectButton from "../../../../Practice-wagmi/ConnectButton";
import { ReactComponent as Logo } from "../../../Assets/Logo.svg";

const Navigation = () => {
  return (
    <div className="ml-32 mt-10 flex ">
      <div className="mt-4 mr-20 basis-1/2">
        <Logo className=" inline" />
        <NavLink
          style={(active) => {
            return active.isActive
              ? { color: "GrayText", fontWeight: "bold", marginLeft: "3rem" }
              : { color: "GrayText", marginLeft: "3.5rem" };
          }}
          // className=" text-gray-600 ml-12"
          to="/"
        >
          Features
        </NavLink>
        <NavLink className=" text-gray-600  ml-10 " to="/pricepage">
          Pricing
        </NavLink>
      </div>
      <div className="basis-1/2 ml-64 ">
        <div className="ml-48">
          <ConnectButton />
        </div>
        {/* <button
          className="h-12 w-40 ml-64 rounded bg-blue-900 text-white"
          type="button"
        >
          Start Schduling
        </button> */}
      </div>
    </div>
  );
};

export default Navigation;
