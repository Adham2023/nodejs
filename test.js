// 'use strict'

const strict = (function() { console.log(this); return !this}())

console.log(strict)