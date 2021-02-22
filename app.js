const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
console.log('base: yargs', argv.base);
// const base = 4;

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
  .then((salida) => console.log(salida, 'creado'))
  .catch((err) => console.log(err));
