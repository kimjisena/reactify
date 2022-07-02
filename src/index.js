#! /usr/bin/env node
const {main} = require('./main.js');
const path = require('path');

let config = path.resolve('./reactry.config.js');

try {
    const {components} = require(config);
    main(components);
} catch (err) {
    console.log('Can not find reactify.config.js\n');
    console.log('Are you sure you have reactify.config.js in your project root directory?');
}