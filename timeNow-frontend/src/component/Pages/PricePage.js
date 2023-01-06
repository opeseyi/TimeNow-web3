import Navigation from "../FeaturePage/Home/Navigation/Navigation";
import Text from "../PricePage/Text/Text";
import Price from "../PricePage/PricePlans/Price";
import Footer from "../FeaturePage/Footer/Footer";
import Toggle from "../PricePage/Toggle/Toggle";
import { useState } from "react";

const PricePage = () => {
  const [maintainToggle, setMaintainToggle] = useState(true);

  const loopTest = {
    1: {
      price: maintainToggle ? 4 : 48,
      text: {
        1: "Perfect plan if you're just starting",
        2: "out",
      },
      data: [
        "LikendIn Integration",
        "Twitter Integration",
        "Real-Time Analytics",
      ],
    },
    2: {
      price: maintainToggle ? 12 : 144,
      text: {
        1: "Perfect plan if you're a heavy",
        2: "user of social media",
      },
      data: [
        "LikendIn Integration",
        "Twitter Integration",
        "Instagram Integration",
        "Real-Time Analytics",
      ],
    },
    3: {
      price: maintainToggle ? 7 : 84,
      text: {
        1: "Perfect plan if you're just starting",
        2: "out",
      },
      data: ["LikendIn Integration", "Twitter Integration"],
    },
  };

  const toggleHandler = (data) => {
    setMaintainToggle(data);
  };

  const classNameValueMonthly = maintainToggle
    ? "-ml-10 text-sm font-medium text-gray-900 dark:text-gray-300"
    : "-ml-10 text-sm text-gray-900 dark:text-gray-300";

  const classNameValueYearly = !maintainToggle
    ? "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
    : "ml-3 text-sm text-gray-900 dark:text-gray-300";

  return (
    <div>
      <div className="w-11/12">
        <Navigation />
      </div>
      <div>
        <Text />
      </div>
      <div className="mt-7 flex justify-center">
        <span className={classNameValueMonthly}>Billed Monthly</span>
        <Toggle onToggleCheckedPos={toggleHandler} />
        <span className={classNameValueYearly}>Billed Yearly</span>
      </div>
      <div className="w-11/12 ml-16 my-24 flex justify-around">
        {Object.values(loopTest).map((val, i) => {
          return (
            <Price
              price={val.price}
              text1={val.text[1]}
              text2={val.text[2]}
              data={val.data}
              prices={maintainToggle}
            />
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PricePage;
