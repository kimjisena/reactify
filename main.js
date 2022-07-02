const fs = require('fs/promises');

function dir (name, files) {
    let path = `./src/components/${name}/`;

    const helper = async () => {
        let boiler;
        try {
            await fs.mkdir(path, {recursive: true});

            for (let f of files) {
                f = format(f);
                const handle = await fs.open((path + f + '.jsx'), 'w+');
                boiler = `import React from 'react';\n\nfunction ${f} (props) {\n\n    return (\n        <>\n        </>\n    );\n}\n\nexport default ${f};`;
                await handle.writeFile(boiler, 'utf8');
                await handle.close();
            }
        } catch (err) {
            throw err;
        }
    }

    helper();

    return 0;
}

function format (componet) {
    return componet[0].toUpperCase() + componet.substring(1);
}
function main (compts) {
    let des, mob, tab, utl;

    des = compts.desktop;
    mob = compts.mobile;
    tab = compts.tablet;
    utl = compts.util;

    if (des !== undefined) {
        dir('desktop', des);
    }

    if (tab !== undefined) {
        dir('tablet', tab);
    }

    if (mob !== undefined) {
        dir('mobile', mob);
    }

    if (utl!== undefined) {
        dir('util', utl);
    }

    return 0;
}


module.exports = {
    main,
};