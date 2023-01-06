import { ReactComponent as Checkmark } from "../../Assets/Checkmark.svg";
import Button from "../../UI/Button";

const Price = (props) => {
  return (
    <div className="h-auto w-1/4 p-0">
      <div className="border-solid border-2 border-gray-600 p-2 rounded">
        <div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-4xl mt-3 ">
              ${props.price}
              <span className="ml-0 font-thin text-lg font-sans">
                /{props.prices ? "mon" : "yr"}
              </span>
            </h2>
            <h2 className="font-normal text-2xl mt-3 ">
              Eth
              {props.price}
              <span className="ml-0 font-thin text-lg font-sans">
                /{props.prices ? "mon" : "yr"}
              </span>
            </h2>
          </div>
          <h3 className="text-gray-500 text-base tracking-wide mt-5">
            {props.text1}
            <br />
            {props.text2}
          </h3>
        </div>
        <hr className="my-5 h-px bg-gray-600 border-0" />
        <div>
          {props.data.map((val, i) => {
            return (
              <h3
                className="mt-5 text-gray-500 text-base tracking-wide"
                key={i + 1}
              >
                <span>
                  <Checkmark className="mr-3 inline" />
                </span>
                {val}
              </h3>
            );
          })}
        </div>
        <div className="mx-2 my-7">
          <button
            className="h-12 w-64 rounded mt-4 bg-blue-900 text-white"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
