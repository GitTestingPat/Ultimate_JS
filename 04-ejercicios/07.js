/**
 * Crear un programa de retorne
 * el precio de un producto
 * mas el impuesto
 */

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);