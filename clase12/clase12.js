const autosImportados = require("./autos");

const concesionaria = {
   autos: autosImportados,
   buscarAuto: function (patente) {
      return this.autos.find((auto) => auto.patente === patente) || null;
   },
   venderAuto: function (patente) {
      const autoAVender = this.buscarAuto(patente);
      if (autoAVender) {
         autoAVender.vendido = true;
         return autoAVender;
      }
   },
   autosParaLaVenta: function () {
      return this.autos.filter((auto) => !auto.vendido);
   }
};

console.log(concesionaria.autosParaLaVenta());
