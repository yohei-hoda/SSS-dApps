const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCKFIYOFJBBDMYCXCWMT5XNWVRVBYFF6F7PNFJY")

console.log("Hello Symbol")
console.log(`Your Address : ${address.plain()}`)
