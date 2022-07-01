const fs = require('fs');

// create a directory and files
function dir (name, files) {
    let path = `./src/components/${name}/`;

    fs.mkdir(path, {recursive: true}, (err) => {
        if (err) {
            throw err;
        }

        for (let f of files) {
            fs.open((path + f), 'w+', (err, fd) => {
                if (err) {
                    throw err;
                }
                // todo: add boilerplate
                fs.close(fd, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            });
        }
    });

    return 0;
}

module.exports = {
    dir,
};