// import Navigation from "../../FeaturePage/Home/Navigation/Navigation";
// import Footer from "../../FeaturePage/Footer/Footer";
// import Text from "../Text/Text";
// import Price from "./Price";
// import Toggle from "../Toggle/Toggle";

// const loopTest = {
//   1: {
//     price: 4,
//     text: {
//       1: "Perfect plan if you're just starting",
//       2: "out",
//     },
//     data: [
//       "LikendIn Integration",
//       "Twitter Integration",
//       "Real-Time Analytics",
//     ],
//   },
//   2: {
//     price: 12,
//     text: {
//       1: "Perfect plan if you're a heavy",
//       2: "user of social media",
//     },
//     data: [
//       "LikendIn Integration",
//       "Twitter Integration",
//       "Instagram Integration",
//       "Real-Time Analytics",
//     ],
//   },
//   3: {
//     price: 4,
//     text: {
//       1: "Perfect plan if you're just starting",
//       2: "out",
//     },
//     data: ["LikendIn Integration", "Twitter Integration"],
//   },
// };

// const PricePlan = () => {
//   return (
//     <div>
//       <div className="w-11/12">
//         <Navigation />
//       </div>
//       <div>
//         <Text />
//       </div>
//       <div>
//         <Toggle />
//       </div>
//       <div className="w-11/12 ml-16 my-24 flex justify-around">
//         {Object.values(loopTest).map((val) => {
//           console.log(val);
//           return (
//             <Price
//               price={val.price}
//               text1={val.text[1]}
//               text2={val.text[2]}
//               data={val.data}
//             />
//           );
//         })}
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default PricePlan;
