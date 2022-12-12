let nombre = prompt("Ingrese su nombre: ");
alert("¡Bienvenidx a De Mil Amoles, " + nombre + '!');

let productos = []
function eleccion() {
   let ask = prompt("¿Qué productos desea llevar?");
   while (ask !== "" && ask !== undefined && ask !== null) {
      productos.push(ask);
      ask = prompt("¿Qué otro producto deseas llevar? Si ya terminó de elegir, pulse ENTER u 'OK'");
   }
}
function makeList() {
   let prodList = '';
   for (let index = 0; index < productos.length; index++) {
      if (index == 0 || index == productos.length) {
         prodList = prodList + productos[index].toString();
      } else {
         prodList = prodList + ", " + productos[index].toString();
      }
   }
   if (prodList.length == 0) {
      alert("Agregue un producto");
      eleccion();
      makeList();
   } else {
      alert("Los productos que vas a llevar son: " + prodList + ". Pronto serás contactado. ¡Muchas gracias!");
   }
}

eleccion();
makeList();

