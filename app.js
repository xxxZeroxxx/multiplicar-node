//requires


const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(`${resp}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


//Paquete que se instala y no son nativos de node
//const fs = require('express');

//Requires de archivos que creamos en el proyecto
//const fs = require('./');

//let base = '7';

// console.log(argv);

// let argv2 = process.argv;

// console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1];