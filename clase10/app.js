const bicicletasImportadas = require("./datosBici");

const dhBici = {

    bicicletas: bicicletasImportadas,

    // 2 - a
    buscarBici: function (idABuscar) {
        const bicicletaADevolver = this.bicicletas.find(bicicleta => {
            return bicicleta.id == idABuscar;
        });
        return bicicletaADevolver;
    },

    // 2 - b
    venderBici: function (idABuscar) {
        const biciBuscada = this.buscarBici(idABuscar);
        if (biciBuscada) {
            biciBuscada.vendida = true;
            return biciBuscada;
        } else {
            return ("Bicicleta no encontrada");
        }
    },

    // 2 - c
    biciParaLaVenta: function () {
        const bicicletasSinVender = this.bicicletas.filter(bicicleta => {
            return bicicleta.vendida == false;
        });

        return bicicletasSinVender;
    },

    // 2 - d
    totalDeVentas: function () {
        const bicicletasVendidas = this.bicicletas.filter(bicicleta => {
            return bicicleta.vendida == true;
        });

        const ventaTotal = bicicletasVendidas.reduce((total, actual) => {
            return total + actual.precio;
        }, 0);

        return ventaTotal;
    }
}

// 2 - a
/* console.log(dhBici.buscarBici(1)); */

// 2 - b
/* console.log(dhBici.venderBici(7)); */

// 2 - c
/* console.log(dhBici.biciParaLaVenta()); */

// 2 - d
/* console.log(dhBici.totalDeVentas()); */