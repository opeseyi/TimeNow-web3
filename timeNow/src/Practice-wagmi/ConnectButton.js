import { BeatLoader } from "react-spinners";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { goerli } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";

const splitAddress = (address) => {
  const addr = address.trim();
  const stringifyInArray = [...addr];
  const firstHalf = stringifyInArray.slice(0, 3);
  const secondHalf = stringifyInArray.slice(-4);
  return `${firstHalf.join("")}...${secondHalf.join("")}`;
};

const connector = new InjectedConnector({
  chains: [goerli],
});
const ConnectButton = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect } = useConnect({
    connector: connector,
  });
  const { disconnect } = useDisconnect();

  const onConnectHandler = () => {
    connect();
  };
  const onDisconnectHandler = () => disconnect();

  if (isConnecting) {
    return (
      <button
        className="h-12 w-40 rounded bg-blue-900 text-white"
        type="button"
      >
        <BeatLoader color="#fff" size={10} />
      </button>
    );
  }

  if (isConnected) {
    return (
      <div className="flex">
        <div className="border-solid border-1 border-gray-300 bg-gray-300 p-2 h-12 mr-1 text-gray-500 text-xl rounded">
          {splitAddress(address)}
        </div>
        <button
          className="h-12 w-40 rounded bg-blue-900 text-white"
          type="button"
          onClick={onDisconnectHandler}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      className="h-12 w-40 rounded bg-blue-900 text-white"
      type="button"
      onClick={onConnectHandler}
    >
      Connect
    </button>
  );
};

export default ConnectButton;
