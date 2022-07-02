# Reactry

Generate react project directories and files based on your components.

## Installation

**using `npm`**

- `$ npm i -D reactry`

**using `yarn`**

- `$ yarn add --save-dev reactry`

## How to use.

- setup your project using `create-react-app`
- add `reactry.config.js` to your project root directory
- run `npm reactry` to generate your component files

## reactify.config.js

`reactry.config.js` exports a `components` object of this structure:
```js
// ./reactry.config.js

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