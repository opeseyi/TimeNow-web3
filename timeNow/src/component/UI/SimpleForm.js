import Button from "./Button";

const SimpleForm = () => {
  return (
    <div className="h-20 w-2/3 ml-8 border-solid border-2 border-gray-400 rounded">
      <div className="ml-0 w-full mb-12 ">
        <input
          className=" test-lg ml-1 h-12 w-32 focus:outline-none focus:border-b-2 "
          type="text"
          placeholder="Email Address"
        />
        <div className="ml-10 inline">
          <Button text="Start Schduling" color="blue" />
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
