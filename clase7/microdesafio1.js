const operacionesBancarias = [
    1000,
    2000,
    -500,
    5000,
    -2000,
    2800,
    -400,
    10500,
    -4700,
    -3800
];

/**
 * 
 * @param {array} operaciones 
 * @returns {array} 0 -> depositos | 1 -> retiros | 2 -> saldoActual 
 */
function calcularSaldos(operaciones) {
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;

    for (let index = 0; index < operaciones.length; index++) {
        if (operaciones[index] > 0) {
            depositos += operaciones[index];
        } else {
            retiros -= operaciones[index];
        }
        saldoActual += operaciones[index];
    }

    return [
        depositos,
        retiros,
        saldoActual
    ];
}

/**
 * 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {array} operaciones 
 * @param {function} callback 
 * @returns {array} 0 -> nombreCompleto | 1 -> depositos | 2 -> retiros | 3 -> saldoActual  
 */
function obtenerEstadoDeCuenta(nombre, apellido, operaciones, callback) {
    const saldos = callback(operaciones);

    const nombreCompleto = nombre + ' ' + apellido;
    const depositos = saldos[0];
    const retiros = saldos[1];
    const saldoActual = saldos[2];

    return [
        nombreCompleto,
        depositos,
        retiros,
        saldoActual
    ];
}

const resumen = obtenerEstadoDeCuenta('Pepe', 'Argento', operacionesBancarias, calcularSaldos);
const resumen2 = obtenerEstadoDeCuenta('Moni', 'Argento', operacionesBancarias, calcularSaldos);

console.log("Estimad@ " + resumen[0] + ':');
console.log("El monto total de los depósitos es de: $" + resumen[1]);
console.log("El monto total de los retiros es de: $" + resumen[2]);
console.log("Por lo tanto, su saldo actual en la cuenta es de: $" + resumen[3]);
