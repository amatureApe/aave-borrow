const { getWeth } = require("../scripts/getWeth");

async function main() {
  await getWeth()
  const { deployer } = await getNamedAccounts();

}

async function getLendingPool(account) {
  const lendingPoolAddressesProvider = await ethers.getContractAt("ILendingPool", "0xBx53C1a33016B2DC2fF365450bfF1848a5158c5", account);

  const lendingPoolAddress = await lendingPoolAddressesProvider.getLendingPool();
  const lendingPool = await ethers.getContractAt("")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })