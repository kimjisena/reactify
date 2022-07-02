# Reactify

Generate react project directories and files based on your design.

## Installation

**using `npm`**

- `$ npm i -D reactify`

**using `yarn`**

- `$ yarn add --save-dev reactify`

## How to use.

- setup your project using `create-react-app`
- add `reactify.config.js` to your project root directory
- run `npm reactify` to generate your component files

## reactify.config.js

`reactify.config.js` exports a `components` object of this structure:
```js
// ./reactify.config.js

module.exports = {
    components: {
        desktop: [],
        tablet: [],
        mobile: [],
        util: []
    }
};
```

- `components.desktop` - a `string[]` of components specific to the desktop 
version of the project
- `components.tablet` - a `string[]` of components specific to the tablet 
version of the project
- `components.mobile` - a `string[]` of components specific to the mobile 
version of the project
- `components.util` - a `string[]` of utility components which span multiple 
devices