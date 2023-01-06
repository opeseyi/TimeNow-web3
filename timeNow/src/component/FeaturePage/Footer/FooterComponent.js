const FooterComponent = (props) => {
  return (
    <div className="p-8">
      <h4 className="text-lg font-semibold mb-4 ">{props.heading}</h4>
      <h4 className="text-black-500 mt-2 tracking-wide">
        <a href="#">{props.first}</a>
      </h4>
      <h4 className="text-black-500 mt-2 tracking-wide">
        <a href="#">{props.second}</a>
      </h4>
      <h4 className="text-black-500 mt-2 tracking-wide">
        <a href="#">{props.third}</a>
      </h4>
    </div>
  );
};

export default FooterComponent;
