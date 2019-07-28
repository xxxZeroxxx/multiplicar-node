const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log(`Tabla de ${base}`.green);

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducino ${base} o ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${i} = ${base * i} \n`;
        }

        resolve(data);
    });
}

//module.exports.crearArchivo = ....

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducino ${base} o ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}