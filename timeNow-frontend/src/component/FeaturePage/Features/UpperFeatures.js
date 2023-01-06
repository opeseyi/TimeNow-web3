import ImageFace from "./ImageFace";

const UpperFeatures = (props) => {
  return (
    <div className="flex flex-row mt-4 h-64">
      <div className="basis-2/4 ">
        <h2 className="text-blue-800 text-3xl ml-32 mt-8 font-medium">
          TimeNow is used by the most
          <br />
          influential people.
        </h2>
        <div className="ml-28">
          <ImageFace />
        </div>
      </div>
      <div className="basis-2/4">
        <h3 className="text-gray-500 mt-8 ml-14 tracking-wide">
          The most influential people on Facebook, Twitter and
          <br />
          Instagram are using TweetNow to schedule posts when
          <br />
          their followers are most active.
        </h3>
        <h3 className="text-gray-500 mt-4 ml-14 tracking-wide">
          They generally receive 23% more engagement than
          <br />
          normal people who do not
        </h3>
      </div>
    </div>
  );
};

export default UpperFeatures;
