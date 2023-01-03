const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCKFIYOFJBBDMYCXCWMT5XNWVRVBYFF6F7PNFJY")

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)
