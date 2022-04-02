const MyContract = artifacts.require('MyContract')

/*
  This script allows for a Chainlink request to be created from
  the requesting contract. Defaults to the Chainlink oracle address
  on this page: https://docs.chain.link/docs/decentralized-oracles-ethereum-mainnet/#testnets
*/

const oracleAddress =
  process.env.TRUFFLE_CL_BOX_ORACLE_ADDRESS ||
  '0x7AFe1118Ea78C1eae84ca8feE5C65Bc76CcF879e'
const jobId =
  process.env.TRUFFLE_CL_BOX_JOB_ID || '6d1bfe27e7034b1d87b5270556b17277'
const payment = process.env.TRUFFLE_CL_BOX_PAYMENT || '1000000000000000000'
const url =
  process.env.TRUFFLE_CL_BOX_URL ||
  'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
const path = process.env.TRUFFLE_CL_BOX_JSON_PATH || 'USD'
const times = process.env.TRUFFLE_CL_BOX_TIMES || '100'

module.exports = async callback => {
  const mc = await MyContract.deployed()
  console.log('Creating request on contract:', mc.address)
  const tx = await mc.createRequestTo(
    oracleAddress,
    web3.utils.toHex(jobId),
    payment,
    url,
    path,
    times,
  )
  callback(tx.tx)
}
