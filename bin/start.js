require('babel-register')({
    presets: ['env']
})
require('babel-polyfill')
require('./index.js')