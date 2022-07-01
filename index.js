const fs = require('fs/promises');

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

function format (componet) {
    return componet[0].toUpperCase() + componet.substring(1) + '.jsx';
}



module.exports = {
    dir,
};