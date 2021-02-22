const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i} \n`;
    }
    if (listar) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (e) {
    throw e;
  }
};

module.exports = { crearArchivo };
