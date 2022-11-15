const { ethers } = require("ethers");
// 1st step : connect to provider or metamask
// connect to metamask
// const provider = new ethers.providers.Web3Provider(window.ethereum)
//connect to rpc server
const rpcUrl = "https://bsc-dataseed.binance.org/"; // bnb
const contractWallet = "0x96734B59e5C44cCBE026D835e090a96F9f1B69FD";
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

// Look up the current block number
const numberBlock = async () =>{
    nro = await provider.getBlockNumber();
    console.log("🚀 ~~ Bloque Nro :", nro);
};

// Get the balance of an account (by address or ENS name, if supported by network)
const balance = async () =>{
    const bal = await provider.getBalance(contractWallet);
    console.log("🚀 ~~ Balance :", ethers.utils.formatEther(bal));
};

numberBlock();
balance();


