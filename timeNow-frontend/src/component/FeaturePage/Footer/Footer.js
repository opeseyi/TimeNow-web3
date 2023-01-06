import SimpleForm from "../../UI/SimpleForm";
import FooterComponent from "./FooterComponent";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";

const DATA = {
  1: {
    heading: "Product",
    first: "Homepage",
    second: "Price",
    third: "Feature",
  },
  2: {
    heading: "Help",
    first: "Live Chat",
    second: "Send Email",
    third: "FAQ",
  },
  3: {
    heading: "Company",
    first: "About",
    second: "Customer",
    third: "Blog",
  },
};

const Footer = () => {
  return (
    <div className="h-64">
      <Logo className="ml-32 mt-7" />
      <div className="flex justify-around items-stretch">
        <div className="basis-1/6  h-48 ">
          <div className="ml-20">
            <FooterComponent
              heading={DATA[1].heading}
              first={DATA[1].first}
              second={DATA[1].second}
              third={DATA[1].third}
            />
          </div>
        </div>
        <div className="basis-1/6 ml-7 ">
          <FooterComponent
            heading={DATA[2].heading}
            first={DATA[2].first}
            second={DATA[2].second}
            third={DATA[2].third}
          />
        </div>
        <div className="basis-1/6 -ml-7">
          <FooterComponent
            heading={DATA[3].heading}
            first={DATA[3].first}
            second={DATA[3].second}
            third={DATA[3].third}
          />
        </div>
        <div className="basis-5/12 ">
          <h4 className="text-lg font-semibold mb-4 pl-8 pt-8 ">
            Try TweetNow
          </h4>
          <SimpleForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
