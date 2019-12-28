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
let productoAEliminar = 0; // producto según su posición en el carrito
let opcionVaciar = ""; // string para guardar la opción elegida por el usuario (vaciar carrito o no)
let opcionCancelar = ""; // string para guardar la opción elegida por el usuario (cancelar compra o no)
let poseeCodigoDescuento = ""; // string para guardar si el usuario tiene código de descuento o no
let codigoDescuentoUsuario = ""; // string para guardar el código de descuento que tenga el usuario
let codigoDescuentoDado = "ADA1234";
let porcentajeDescuento = 10;
let opcionConfirmarCompra = ""; // // string para guardar la opción elegida por el usuario (confirmar compra o no)
let productoValido = true; // booleano para guardar si el id elegido es un producto que está en el carrito o no
let cantidad = 0; // placeholder de cantidad, índice 4 en el producto en carrito
let productoQueSeEliminara; // guarda el producto que se va a eliminar dentro de la función eliminarProducto
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

  
// const agregarProducto = (productoElegido) => {
//     productoElegido = elegirProducto(); //CUANDO REPITO LA OPERACIÓN, ME SUMA EL DOBLE DEL SEGUNDO PRODUCTO. REVISAR
//     // cantidadUnidadesProducto = elegirCantidadProducto();
//     console.log(`productoElegido x idProducto ${productoElegido}`);
//         // if (listaCarrito.length < 1) {
//         //     productoEnCarrito = [listaProductos[productoElegido][0], listaProductos[productoElegido][1], listaProductos[productoElegido][2], listaProductos[productoElegido][3], (listaProductos[productoElegido][4] = cantidadUnidadesProducto)];
//         //     listaCarrito.push(productoEnCarrito);
//         //     console.log(`listaCarrito en agregarProducto ${listaCarrito}`);
//         // } else {
//     // let carritoLength = listaCarrito.length;
//         //     for (let i = 0; i < listaCarrito.length; i++){
//         //         if (listaCarrito[i][0] === productoElegido) {
//         //             listaCarrito[i][4] += cantidadUnidadesProducto;
//         //             console.log(`agregarProducto si el producto ya está en el carrito ${listaCarrito}`);
                               
//         //         } else {
//         //             productoEnCarrito = [listaProductos[productoElegido][0], listaProductos[productoElegido][1], listaProductos[productoElegido][2], listaProductos[productoElegido][3], (listaProductos[productoElegido][4] = cantidadUnidadesProducto)];
//         //             listaCarrito.push(productoEnCarrito);
//         //             console.log(`agregarProducto si el producto no estaba en el carrito ${listaCarrito}`);
//         //         }
//         //     // }    
//         // }
//     productoEnCarrito = [listaProductos[productoElegido][0],
//                                 listaProductos[productoElegido][1],
//                                 listaProductos[productoElegido][2],
//                                 listaProductos[productoElegido][3],
//                         ];
//             console.log(`definición de productoEnCarrito ${productoEnCarrito}`);

//         // for (let i = 0; i < listaCarrito.length; i++) 
//         for (let i = 0; i < listaCarrito.length; i++) {
//             if (listaCarrito.length === 0) {
//                 productoEnCarrito[4] = elegirCantidadProducto();
//                 listaCarrito.push(productoEnCarrito);
//                 console.log(`listaCarrito si es la lista inicial ${listaCarrito}`);
//             } else {
//                 if (listaCarrito[i][0] === productoElegido) {
//                     listaCarrito[i][4] += elegirCantidadProducto();
//                     console.log(`listaCarrito cuando el producto ya está ${listaCarrito}`);
//                 } else {
//                     productoEnCarrito[4] = elegirCantidadProducto();
//                     listaCarrito.push(productoEnCarrito);
//                     console.log(`listaCarrito cuando la lista no es la inicial y el producto no está en el carrito ${listaCarrito}`);
//                 }
//             }
//         }
            
//     return listaCarrito;
//     }



// 

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


const eliminarProducto = (listaCarrito) => {    //después de haber eliminado una vez correctamente, si repito eliminar en el mismo loop o saliendo y volviendo a entrar a esta operación, elimina el producto según su ubicación, no su id de producto. Interpreta "1" como la posición 0 en el carrito, aunque el producto id 1 esté en 2do o 3er lugar.
    
    idProducto = prompt(`Indique el id del producto que desea eliminar.`)
    idProducto = Number(idProducto);
    productoValido = true;
    console.log(`listaCarrito en eliminarProducto ${listaCarrito}`);
        for(let i = 0; i < listaCarrito.length; i++) {
            if (listaCarrito[i][0] === Number(idProducto)) {
            //     productoValido = false;
            //     // alert("El ID que ingresó no es válido.")
            // } else {
                // productoValido = true;
        //         productoQueSeEliminara = listaCarrito[i];
        //     }
        // }

        // if (productoValido === true) { 
                productoAEliminar = listaCarrito[i];
                alert(`El producto a eliminar es: 
                id: ${listaCarrito[i][0]}
            
                || producto:${listaCarrito[i][1]} 
                || precio: $${listaCarrito[i][2]}
                || cantidad: ${listaCarrito[i][4]}`);
                confirmarEliminar = prompt(`¿Desea eliminar este producto?`);
                    if (confirmarEliminar === "SÍ") {
                    listaCarrito.splice(productoAEliminar,1)
                    console.log(`listaCarrito si se confirma eliminación ${listaCarrito}`);
                    console.log(listaCarrito);
                    alert(`El producto ${listaProductos[idProducto-1][1]} se eliminó del carrito.`);
                    } else {
                        alert("La operación fue cancelada por el usuario.");
                    }
                console.log(`listaCarrito después de toda la operación de eliminar producto ${listaCarrito}`);
                console.log(listaCarrito);                
            
            } else {
                productoValido = false;
            }
        }
            if (productoValido !== true) {
                alert("El ID que ingresó no es válido.")
            }
        
    return listaCarrito;
}


const vaciarCarrito = (listaCarrito) => {
    opcionVaciar = prompt("¿Confirma que desea vaciar el carrito?");
        if (opcionVaciar === "SÍ") {
            for (let i = 0; i <= listaCarrito.length; i++) {
                listaCarrito.splice(listaCarrito[i], 1);
            }
            alert("Se eliminó todo el contenido del carrito.");
        } else {
            alert("Acción cancelada por el usuario.");
        }
    return listaCarrito;
}

const cancelarCompra = () => {
    opcionCancelar = prompt("Se va a cancelar la compra. ¿Confirmar?");
        if (opcionCancelar === "SÍ") {
            alert("Gracias por visitar la tiendita de ElectrocutAdas. Vuelva pronto.");
            throw "Cancelado por el usuario.";
            
        } else {
            alert("Acción cancelada por el usuario.");
        }
    return opcionCancelar;
}


const confirmarCompra = (listaCarritoConfirmar) => {
    listaCarritoConfirmar = listaCarrito;
    mostrarCarrito(listaCarritoConfirmar);
    
    poseeCodigoDescuento = prompt("¿Tiene algún código de descuento?");
    if (poseeCodigoDescuento === "SÍ") {
        codigoDescuentoUsuario = prompt("Ingrese el código de descuento que posee: ");
        if (codigoDescuentoUsuario === codigoDescuentoDado) {
            alert("El código ingresado es correcto.");
            for (let i = 0; i < listaCarritoConfirmar.length; i++) {
                if (listaCarrito[i][3] === true) {
                    // listaCarrito[i][2] = listaCarrito[i][2] - (listaCarrito[i][2] * 10 / 100);
                vistaCarrito += `
                Producto: ${listaCarrito[i][1]}
                || id: ${listaCarrito[i][0]}
                || Precio: $${listaCarrito[i][2]}
                || Cantidad: ${cantidadSubtotalProductos = listaCarrito[i][4]}
                || Subtotal: $${subtotal = listaCarrito[i][2] * listaCarrito[i][4]}
                || Subtotal con descuento: $${subtotal = subtotal -(subtotal * 10/100)};
                -----------------------------------------------------------------`
                cantidadTotalProductos += cantidadSubtotalProductos;  
                total += subtotal;
                
                }
            }
                
                alert(`Contenido del carrito:
                
                ${vistaCarrito}
                CANT. PRODUCTOS: ${cantidadTotalProductos}
                IMPORTE TOTAL:   $${total}`);
            
        } else {
            alert("El código ingresado no es correcto.");
        }
    }
            
        opcionConfirmarCompra = prompt("¿Desea confirmar la compra?");
        if (opcionConfirmarCompra === "SÍ") {
            alert(`Muchas gracias por su compra. Vuelva pronto.
                         ElectrocutAdas ⚡⚡⚡`);
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