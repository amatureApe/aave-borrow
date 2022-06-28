const { getWeth } = require("../scripts/getWeth");

async function main() {
  await getWeth()
  const { deployer } = await getNamedAccounts();

}

async function getLendingPool() {

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })