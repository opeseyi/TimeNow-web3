import UA1 from "../../Assets/UA1.png";
import UA2 from "../../Assets/UA2.png";
import UA3 from "../../Assets/UA3.png";
import UA4 from "../../Assets/UA4.png";
import UA5 from "../../Assets/UA5.png";
import UA6 from "../../Assets/UA6.png";
import UA7 from "../../Assets/UA7.png";
import UA8 from "../../Assets/UA8.png";

const ImageFace = () => {
  const imageFace = [UA1, UA2, UA3, UA4, UA5, UA6, UA7, UA8];
  return (
    <>
      {imageFace.map((val, i) => {
        return <img className="w-12 ml-3 mt-5 inline" src={val} key={i + 1} />;
      })}
    </>
  );
};

export default ImageFace;
