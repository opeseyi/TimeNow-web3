import { useContractRead, useNetwork } from "wagmi";
import Address from "../constants/networkMapping.json";
import ContractAbi from "../constants/timeNow.json";

const ReadAndWrite = () => {
  const { chain } = useNetwork();
  // useContractRead({
  //   address: Address[31337].TimeNow.join(""),
  //   abi:
  //   })
  console.log(ContractAbi);
  return (
    <div>
      <button
        className="h-12 w-40 rounded mt-4 bg-blue-900 text-white"
        type="button"
      >
        Subscribe
      </button>
    </div>
  );
};

export default ReadAndWrite;
