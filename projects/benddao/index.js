const sdk = require("@defillama/sdk");

const { getTVL, getBorrowed } = require("../helper/benddao");

async function tvl(timestamp, block, chainBlocks) {
  const balances = {};

  await getTVL(balances, "ethereum", timestamp, chainBlocks);

  return balances;
}

async function borrowed(timestamp, block, chainBlocks) {
  const balances = {};

  await getBorrowed(balances, "ethereum", timestamp, chainBlocks);

  return balances;
}

module.exports = {
  timetravel: true,
  methodology: `Counts the tokens locked in the contracts to be used as collateral to borrow or to earn yield. Borrowed coins are not counted towards the TVL`,
  ethereum: {
    tvl,
    borrowed,
  },
};
