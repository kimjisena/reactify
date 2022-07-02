const fs = require('fs/promises');
const path = require('path');

function dir (name, files) {
    let pth = path.resolve(`./src/components/${name}`);
    console.log(pth);

    const helper = async () => {
        let blp;
        try {
            await fs.mkdir(pth, {recursive: true});

            for (let f of files) {
                f = format(f);
                const handle = await fs.open((pth + '/' + f + '.jsx'), 'w+');
                blp = `import React from 'react';\n\nfunction ${f} (props) {\n\n    return (\n        <>\n        </>\n    );\n}\n\nexport default ${f};`;
                await handle.writeFile(blp, 'utf8');
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