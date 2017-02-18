#!/usr/bin/env node
var b32decode = require('base32-decode')
var str = process.argv[2]
if (!str) {
  console.error('usage: b32tohex <b32string>')
  process.exit(1)
}

try {
  var decoded = b32decode(str, 'RFC3548')
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
console.log(new Buffer(decoded).toString('hex'))
