import Button from "../../UI/Button";

const LowerFeatures = (props) => {
  return (
    <div className="flex flex-row mt-0  h-auto bg-blue-200">
      <div className="basis-2/4  ml-28 p-3">
        <h3 className="text-blue-600 text-base font-bold mt-10">
          Unified Dashboard
        </h3>
        <h2 className="text-blue-500 text-3xl font-medium mt-4">
          Cuztomizable dashboard
          <br />
          for all platforms.
        </h2>
        <h3 className="text-gray-500 tracking-wide mt-5">
          Use Twitter and Instagram but not LinkedIn? You can
          <br />
          customize your dashboard to your liking. You can even
          <br />
          schedule the same post to individual platforms instead of
          <br />
          all platforms.
        </h3>
        <div className="mb-5 mt-4">
          <Button text="Start Scheduling" color="blue" />
        </div>
      </div>
      <div className="basis-2/4 ml-0 p-1">
        <h3 className="text-blue-600 text-base font-bold mt-10">
          Enhanced Analysis{" "}
        </h3>
        <h2 className="text-blue-500 text-3xl font-medium mt-4">
          Real-time data that tells
          <br />
          you everything.
        </h2>
        <h3 className="text-gray-500 tracking-wide mt-5">
          Get detailed reports of whats working and what isn't.
          <br />
          Engagement rates, impressions, views and much more
          <br />
          data is available to you through our in-depth dashboard
          <br />
          tool.
        </h3>
        <div className="mb-5 mt-4">
          <Button text="View Live Demo" color="white" />
        </div>
      </div>
    </div>
  );
};

export default LowerFeatures;
