/* Moralis init code */
const serverUrl = "https://omvfqvcn9c8w.usemoralis.com:2053/server";
const appId = "p18sOxPTHfIPo6rqfaMpEffK3QIwVMpnzq9ee12J";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


// Get Bsc token price

const binancePrice = {
  address: "0x31d0a7ada4d4c131eb612db48861211f63e57610",
  chain: "bsc",
  exchange: "PancakeSwapv2"
};


async function getPrice() {

//Get token price on PancakeSwap v2 BSC

const price = await Moralis.Web3API.token.getTokenPrice(binancePrice);
  
  console.log(price)
}

getPrice() 


// get AVAX token price

//Get token price on PancakeSwap v2 BSC


const avaxPrice = {
  address: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
  chain: "bsc",
 exchange: "PancakeSwapv2",
to_block: 13359177
};


async function getP() {

//Get token price on PancakeSwap v2 BSC

const p = await Moralis.Web3API.token.getTokenPrice(avaxPrice);
  
  console.log(p)
}

getP() 






  
  
 

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
