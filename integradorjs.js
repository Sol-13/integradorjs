/*--------------------------------------------------------------------------------------------------------------------------
           VARIABLES
---------------------------------------------------------------------------------------------------------------------------*/
let = operacion = ""; // la operación que elige el usuario
let listaProductos = [
    [1, "Notebook Lenobo S400", 100, true],
    [2, "Celular Notorola G5", 135, false],
    [3, "Smart TV Filips 43'", 190, true],
    [4, "Sorny PS 7", 215, true],
];

let idProducto = ""; //el producto que elige el usuario para agregarlo al carrito
idProducto= Number(idProducto);
let vistaListaProductos = ""; // string para acumular la lista de productos y mostrarla toda junta
let vistaCarrito = ""; // string para acumular el contenido del carrito y que se muestre todo junto en el alert
let productoEnCarrito =[]; // array de cada producto que va en el carrito, con 5 índices para poder agregar cantidad en el índice 5
let id = 0; // id del producto, en la lista o en el carrito
let producto = ""; // descripción del producto, en la lista o en el carrito
let precio = 0; // precio del producto, en la lista o en el carrito
let descuento = false; // descuento del producto, en la lista o en el carrito
let cantidadUnidadesProducto = 0; // cantidad del producto, en el carrito
const listaCarrito = []; // array que contiene los productos (lista de productoEnCarrito) que el usuario quiere comprar
// let repetir = ""; // guarda la opción de repetir o no en cada operación
let total = 0; // total del carrito
let subtotal = 0; // subtotal de cada producto en el carrito
let cantidadTotalProductos = 0; // cantidad total de productos en el carrito
let cantidadSubtotalProductos = 0; // cantidad subtotal de productos en el carrito
let confirmarEliminar = ""; // string para guardar la opción elegida por el usuario (eliminar sí o no)
let opcionVaciar = ""; // string para guardar la opción elegida por el usuario (vaciar carrito o no)
let opcionCancelar = ""; // string para guardar la opción elegida por el usuario (cancelar compra o no)
let poseeCodigoDescuento = ""; // string para guardar si el usuario tiene código de descuento o no
let codigoDescuentoUsuario = ""; // string para guardar el código de descuento que tenga el usuario
let codigoDescuentoDado = "ADA1234";
let porcentajeDescuento = 10;
let opcionConfirmarCompra = ""; // // string para guardar la opción elegida por el usuario (confirmar compra o no)
let productoValido = 0; // guarda si el id elegido es un producto que está en el carrito o no
let cantidad = 0; // placeholder de cantidad, índice 4 en el producto en carrito
let productoAEliminar; // guarda el producto que se va a eliminar dentro de la función eliminarProducto
let subtotalDescuento = 0; // guarda el subtotal con descuento en la operación Confirmar compra
let totalDescuento = 0; // guarda el total con descuento en la operación Confirmar compra
let subtotalDescuentoVista = 0; // subtotal con descuento solo para mostrarle al usuario al confirmar la compra
/*--------------------------------------------------------------------------------------------------------------------------
           FUNCIONES
---------------------------------------------------------------------------------------------------------------------------*/


const mostrarProducto = () => {
    vistaListaProductos ="";
    for (let i=0; i < listaProductos.length; i++) {
        vistaListaProductos += `
        id: ${listaProductos[i][0]}
                || producto: ${listaProductos[i][1]} 
                || precio: $${listaProductos[i][2]}
                || descuento: ${listaProductos[i][3]}
        -----------------------------------`
    }
    return alert(vistaListaProductos);
}

const volverAElegirProducto = () => {
    elegirProducto()};


const elegirCantidadProducto = () => {
    cantidadUnidadesProducto = prompt(`¿Cuántas unidades quiere llevar?`)
return Number(cantidadUnidadesProducto);
}


const elegirProducto = () => {
 idProducto = prompt(`Coloque el numero de producto`)
    idProducto = Number(idProducto);
    if ((idProducto >= 1 && idProducto <= listaProductos.length)) {
        alert(`El producto elegido es: 
         id: ${listaProductos[idProducto-1][0]}
                || producto:${listaProductos[idProducto-1][1]} 
                || precio: $${listaProductos[idProducto-1][2]}
                || descuento: ${listaProductos[idProducto-1][3]}`);
               
    } else {
        alert("El ID que ingresó no es válido.");
        volverAElegirProducto();
    }
    return Number(idProducto)-1;

}
 

const agregarProducto = (productoElegido) => {
    productoElegido = elegirProducto();
    cantidadUnidadesProducto = elegirCantidadProducto();
        for(let i = 0; i <listaCarrito.length; i++){
            if (listaCarrito[i][0] === listaProductos[productoElegido][0]) {
                listaCarrito[i][4] = listaCarrito[i][4]+cantidadUnidadesProducto;
                console.log(listaCarrito);
                return listaCarrito;
            }
        }

    productoEnCarrito = [listaProductos[productoElegido][0], listaProductos[productoElegido][1], listaProductos[productoElegido][2], listaProductos[productoElegido][3], cantidadUnidadesProducto];
    listaCarrito.push(productoEnCarrito);
    console.log(listaCarrito);
    return listaCarrito;

    }

const mostrarCarrito = (listaCarrito) => {
    vistaCarrito = "";
    cantidadSubtotalProductos = 0;
    cantidadTotalProductos = 0;
    cantidadTotalProductos = 0;
    total = 0;
    if (listaCarrito.length > 0) {
            for (let i = 0; i < listaCarrito.length; i++) {
                
                vistaCarrito += `
                Producto: ${listaCarrito[i][1]}
                || id: ${listaCarrito[i][0]}
                || Precio: $${listaCarrito[i][2]}
                || Cantidad: ${cantidadSubtotalProductos = listaCarrito[i][4]}
                || Subtotal: $${subtotal = listaCarrito[i][2] * listaCarrito[i][4]}
                -----------------------------------------------------------------`
                cantidadTotalProductos += cantidadSubtotalProductos;  
                total += subtotal;
                
            }
            return alert(`Contenido del carrito:
                
            ${vistaCarrito}
                CANT. PRODUCTOS: ${cantidadTotalProductos}
                IMPORTE TOTAL:   $${total}`);
    } else {
        return alert("El carrito está vacío.");
    }
}


const repetir = () => {
    opcionElegida = prompt("¿Quiere repetir la operación? [SÍ/NO]");
    return opcionElegida;
}


const eliminarProducto = (listaCarrito) => { 
    
    idProducto = prompt(`Indique el id del producto que desea eliminar.`)
    idProducto = Number(idProducto);
    productoValido = 0;
    console.log(`listaCarrito en eliminarProducto ${listaCarrito}`);
        for(let i = 0; i < listaCarrito.length; i++) {
            if (listaCarrito[i][0] === Number(idProducto)) {
                alert(`El producto a eliminar es: 
                id: ${listaCarrito[i][0]}
            
                || producto:${listaCarrito[i][1]} 
                || precio: $${listaCarrito[i][2]}
                || cantidad: ${listaCarrito[i][4]}`);
                
                productoValido++;
                productoAEliminar = i;
                console.log(`producto a eliminar: ${productoAEliminar}`);             
            } 
        }
            if (productoValido > 0) {
                confirmarEliminar = prompt(`¿Desea eliminar este producto?`);
                    if (confirmarEliminar === "SÍ") {
                    listaCarrito.splice(productoAEliminar,1);
                    console.log(`listaCarrito si se confirma eliminación ${listaCarrito}`);
                    console.log(listaCarrito);
                    alert(`El producto ${listaProductos[idProducto-1][1]} se eliminó del carrito.`);
                    } else {
                        alert("La operación fue cancelada por el usuario.");
                    }
                console.log(`listaCarrito después de toda la operación de eliminar producto ${listaCarrito}`);
                console.log(listaCarrito);

            } else {
                alert("El ID que ingresó no es válido.")
            }
        
    return listaCarrito;
}


const vaciarCarrito = (listaCarrito) => {
    opcionVaciar = prompt("¿Confirma que desea vaciar el carrito?");
        if (opcionVaciar === "SÍ") {
            // for (let i = 0; i <= listaCarrito.length; i++) {
                listaCarrito.splice(0);
            // }
            alert("Se eliminó todo el contenido del carrito.");
        } else {
            alert("Acción cancelada por el usuario.");
        }
    return listaCarrito;
}

const cancelarCompra = () => {
    opcionCancelar = prompt("Se va a cancelar la compra. ¿Confirmar?");
        if (opcionCancelar === "SÍ") {
            alert("Gracias por visitar la tiendita de ElectrocutAdas ϟϟϟ. Vuelva pronto.");
            throw "Cancelado por el usuario.";
            
        } else {
            alert("Acción cancelada por el usuario.");
        }
    return opcionCancelar;
}


const confirmarCompra = (listaCarritoConfirmar) => {  
    listaCarritoConfirmar = listaCarrito;
    mostrarCarrito(listaCarritoConfirmar);
    vistaCarrito ="";
    total = 0;
    subtotal = 0;
    subtotalDescuento = 0;
    subtotalDescuentoVista = 0;
    totalDescuento = 0;
    poseeCodigoDescuento = prompt("¿Tiene algún código de descuento?");
    if (poseeCodigoDescuento === "SÍ") {
        codigoDescuentoUsuario = prompt("Ingrese el código de descuento que posee: ");
        if (codigoDescuentoUsuario === codigoDescuentoDado) {
            alert("El código ingresado es correcto.");
            
                for (let i = 0; i < listaCarritoConfirmar.length; i++) {
                    subtotal = listaCarrito[i][2] * listaCarrito[i][4];
                    if (listaCarrito[i][3] === true) {
                        subtotalDescuentoVista = subtotal - (subtotal * 10 /100)
                        } else {
                            subtotalDescuentoVista = 0;
                        }

                    vistaCarrito += `
                    Producto: ${listaCarrito[i][1]}
                    || Precio: $${listaCarrito[i][2]}
                    || Cantidad: ${cantidadSubtotalProductos = listaCarrito[i][4]}
                    || Descuento: ${listaCarrito[i][3]}
                    || Subtotal: $${subtotal}
                    || Subtotal con dto. 10%: $${subtotalDescuentoVista}
                    -----------------------------------------------------------------`
                    total += subtotal;
                }
                
                for (let i = 0; i < listaCarritoConfirmar.length; i++) {
                                                        
                   if (listaCarrito[i][3] === true) {
                       subtotalDescuento = listaCarrito[i][2] * listaCarrito[i][4]
                       totalDescuento += subtotalDescuento - (subtotalDescuento * 10/100)
                   } 
                }
                
                
                alert(`Contenido del carrito:
                
                ${vistaCarrito}
                CANT. PRODUCTOS: ${cantidadTotalProductos}
                IMPORTE TOTAL:   $${total}
                TOTAL CON DTO.: $${totalDescuento}`);
            
        } else {
            alert("El código ingresado no es correcto.");
        }
    }
            
        opcionConfirmarCompra = prompt("¿Desea confirmar la compra?");
        if (opcionConfirmarCompra === "SÍ") {
            alert(`Muchas gracias por su compra. Vuelva pronto.
                         ElectrocutAdas ϟϟϟ`);
        } else {
            alert("Operación cancelada por el usuario.");
        }
        return;
    }
    

/*--------------------------------------------------------------------------------------------------------------------------
           CÓDIGO
---------------------------------------------------------------------------------------------------------------------------*/

do {
operacion = prompt(`Bienvenidos a la tiendita de ElectrocutAdas. ¿Qué desea hacer?
-----------------------------------------------
✚ [AGREGAR] un producto
📄 [MOSTRAR] compra
✂ [ELIMINAR] un producto del carrito
🗑️  [VACIAR] carrito
🚪  [CANCELAR] compra
✔️ [CONFIRMAR] compra
✖️ [SALIR] del menú`);

    switch (operacion) {
        case "AGREGAR":
            do {
            mostrarProducto();
            agregarProducto();
            console.log(`listaCarrito en ejecución de Agregar ${listaCarrito}`);
            
        } while (repetir() === "SÍ");    
        break;

        case "MOSTRAR":
            mostrarCarrito(listaCarrito);
            console.log(`listaCarrito en ejecución de Mostrar ${listaCarrito}`);
        break;

        case "ELIMINAR":
            do {
                console.log(`listaCarrito en ejecución antes de Eliminar ${listaCarrito}`);
                eliminarProducto(listaCarrito);
                console.log(`listaCarrito en ejecución después de Eliminar ${listaCarrito}`);
        } while (repetir() === "SÍ");
        break;

        case "VACIAR":
            vaciarCarrito(listaCarrito);
            console.log(`listaCarrito en ejecución después de Vaciar ${listaCarrito}`);
        break;

        case "CANCELAR":
            cancelarCompra();
            console.log(`listaCarrito en ejecución después de Cancelar ${listaCarrito}`);
            
        break;

        case "CONFIRMAR":
            confirmarCompra();
        break;

        default: 
        break;
    }


} while (operacion !== "SALIR");


//https://github.com/Ada-IT/bootcamp-frontend/blob/master/integradores/Integrador%203.%20Funciones.md