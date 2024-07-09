const fs = require('fs');
const path = require('path');

function organizeFiles(sourceFolder) {
    const files = fs.readdirSync(sourceFolder);

    files.forEach(file => {
        const extname = path.extname(file).slice(1); // Obtenemos la extensión del archivo sin el punto inicial

        if (extname) {
            const sourcePath = path.join(sourceFolder, file);
            const targetFolder = path.join(sourceFolder, `${extname}_files`);
            const targetPath = path.join(targetFolder, file);

            if (!fs.existsSync(targetFolder)) {
                fs.mkdirSync(targetFolder);
            }

            fs.renameSync(sourcePath, targetPath);
            console.log(`Archivo ${file} movido a ${targetFolder}`);
        }
    });

    console.log('¡Archivos organizados correctamente!');
}

exports = {
    organizeFiles
};