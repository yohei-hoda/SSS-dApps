const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCKFIYOFJBBDMYCXCWMT5XNWVRVBYFF6F7PNFJY")

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)

const EPOCH = 1637848847
const XYM_ID = '72C0212E67A08BCE'
const NODE_URL = 'https://marrons-xym-farm001-test.com:3001/chain/info'
const NET_TYPE = symbol.NetworkType.TEST_NET

const repositoryFactory = new symbol.RepositoryFactoryHttp(NODE_URL)
const accountHttp = repositoryFactory.createAccountRepository()

accountHttp.getAccountInfo(address)
  .toPromise()
  .then((accountInfo) => {
    for (let m of accountInfo.mosaics) {
      if (m.id.id.toHex() === XYM_ID) {
        const dom_xym = document.getElementById('wallet-xym')
        dom_xym.innerText = `XYM Balance : ${m.amount.compact() / Math.pow(10, 6)}`
      }
    }
  })
