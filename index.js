const {components} = require('./reactify.config.js');
const {main} = require('./main.js');

if (components === undefined) {
    throw {
        name: 'ReactifyConfigError',
        message: 'Can not access reactify.config.js'
    }
} else {
    main(components);
}