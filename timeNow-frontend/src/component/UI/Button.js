import { Link } from "react-router-dom";

const Button = (props) => {
  let classColor =
    props.color === "blue"
      ? "h-12 w-40 rounded mt-4 bg-blue-900 text-white"
      : "h-12 w-40 rounded mt-4 bg-gray-100 text-gray-700";
  return (
    <button className={classColor} type="button">
      <Link to="/pricepage">{props.text}</Link>
    </button>
  );
};

export default Button;
