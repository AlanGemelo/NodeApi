const fs = require('fs');
require('colors');

const generarTabla = (base, hasta = 10) => {
    let salida = '';
    for (let n = 1; n <= hasta; n++) {
        salida += `${base} x ${n} = ${base * n}\n`;
    }
    return salida;
};

const mostrarEncabezado = (base) => {
    console.log('========================== ');
    console.log(`   Tabla del ${base}   `);
    console.log('========================== ');
};

const guardarArchivo = (nombreArchivo, contenido) => {
    const dir = './salida';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(`${dir}/${nombreArchivo}`, contenido);
};

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        mostrarEncabezado(base);
        const salida = generarTabla(base, hasta);

        if (listar) {
            console.log(String(salida).rainbow.underline.bold);
        }

        const nombreArchivo = `tabla-${base}.txt`;
        guardarArchivo(nombreArchivo, salida);
        return nombreArchivo;
    } catch (error) {
        return error;
    }
};

module.exports = {
    crearArchivo
};
