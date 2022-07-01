const fs = require('fs/promises');
const {components} = require('./reactify.config.js');

// create a directory and files
function dir (name, files) {
    let path = `./src/components/${name}/`;

    const helper = async () => {
        try {
            await fs.mkdir(path, {recursive: true});

            for (let f of files) {
                const handle = await fs.open((path + format(f)), 'w+');
                // todo: add boilerplate
                await handle.close();
            }
        } catch (err) {
            throw err;
        }
    }

    helper();

    return 0;
}

function dis (compts) {
    let uniq = new Set();
    for (let compt of compts) {
        if (typeof compt === 'string') {
            uniq.add(compt);
        } else if (typeof compt === 'object') {
            let key = Object.keys(compt)[0]
            uniq.add(key);
            for (let dep of compt[key]) {
                uniq.add(dep);
            }
        }
    }

    return Array.from(uniq.values());
}

function format (componet) {
    return componet[0].toUpperCase() + componet.substring(1) + '.jsx';
}
function main () {
    let des, mob, tab, ut;

    if (components.desktop !== undefined) {
        des = dis(components.desktop);
        dir('desktop', des);
    }

    if (components.tablet !== undefined) {
        tab = dis(components.tablet);
        dir('tablet', tab);
    }

    if (components.mobile !== undefined) {
        mob = dis(components.mobile);
        dir('mobile', mob);
    }

    if (components.util !== undefined) {
        ut = dis(components.util);
        dir('util', ut);
    }

    return 0;
}


module.exports = {
    main,
};