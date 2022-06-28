const { getNamedAccounts } = require("hardhat");

async function getWeth() {
  const { deployer } = await getNamedAccounts();

  const iWeth = await ethers.getContractAt("IWeth", "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", deployer);
}

module.exports = { getWeth }