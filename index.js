const {main} = require('./main.js');
const {components} = require('./reactry.config.js');

if (components === undefined) {
    throw {
        name: 'ReactifyConfigError',
        message: 'Can not access reactify.config.js',
        more: 'Are you sure you have reactify.config.js in your project root directory?'
    }
} else {
    main(components);
}