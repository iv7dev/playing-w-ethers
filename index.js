require('dotenv').config();
const { ethers } = require("ethers");
// 🚀 1st step : connect to provider or metamask
// connect to metamask
// const provider = new ethers.providers.Web3Provider(window.ethereum)
//connect to rpc server
// if production not used dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const contractWallet = process.env.ACCOUNT1;
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_BINANCE);

// 🚀 Look up the current block number
const numberBlock = async () =>{
    nro = await provider.getBlockNumber();
    console.log("🚀 ~~ Bloque Nro :", nro);
};

// 🚀 Get the balance of an account (by address or ENS name, if supported by network)
const balance = async () =>{
    const bal = await provider.getBalance(contractWallet);
    console.log("🚀 ~~ Balance :", ethers.utils.formatEther(bal));
};

// 🚀 Send 1 ether to an ens name.
// const tx = signer.sendTransaction({
//     to: "ricmoo.firefly.eth",
//     value: ethers.utils.parseEther("1.0")
// });



numberBlock();
balance();


