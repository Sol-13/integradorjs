/*--------------------------------------------------------------------------------------------------------------------------
           VARIABLES
---------------------------------------------------------------------------------------------------------------------------*/
let = operacion = ""; // la operación que elige el usuario
let listaProductos = [
    [1, "Notebook Lenovo S400", 100, true],
    [2, "Celular Motorola G5 ", 135, false],
    [3, "Smart TV Philips 43'", 190, true],
    [4, "Sony PS 7", 215, true],
];

let idProducto = ""; //el producto que elige el usuario para agregarlo al carrito
idProducto= Number(idProducto);
let vistaListaProductos = ""; // string para acumular la lista de productos y mostrarla toda junta
let vistaCarrito = ""; // string para acumular el contenido del carrito y que se muestre todo junto en el alert
let productoEnCarrito =[5]; // array de cada producto que va en el carrito, con 5 índices para poder agregar cantidad en el índice 5
let id = 0; // id del producto, en la lista o en el carrito
let producto = ""; // descripción del producto, en la lista o en el carrito
let precio = 0; // precio del producto, en la lista o en el carrito
let descuento = false; // descuento del producto, en la lista o en el carrito
let cantidad = 0; // cantidad del producto, en el carrito
const listaCarrito = []; // array que contiene los productos (lista de productoEnCarrito) que el usuario quiere comprar
// let repetir = ""; // guarda la opción de repetir o no en cada operación
let nuevaListaCarrito = [];
let newNuevaListaCarrito = [];



/*--------------------------------------------------------------------------------------------------------------------------
           FUNCIONES
---------------------------------------------------------------------------------------------------------------------------*/


const mostrarProducto = () => {
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
    }
    return idProducto;
}

    const agregarProducto = (productoElegido) => {       // HAY QUE REPETIR ELEGIR PRODUCTO Y CUANDO ESTÉ LISTO, RECIÉN AGREGAR, SINO REPITE LOS PRODUCTOS
        productoElegido = elegirProducto();
        productoEnCarrito = [listaProductos[productoElegido][0], listaProductos[productoElegido][1], listaProductos[productoElegido][2], listaProductos[productoElegido][3], cantidad+1];
        listaCarrito.push(productoEnCarrito);
        nuevaListaCarrito = listaCarrito.slice();
        console.log(listaCarrito);
        return listaCarrito;
        
        }






        // for (let i = 0; i < listaProductos.length; i++) {
        //     if (listaProductos[i][0] == productoElegido) {
        //        productoEnCarrito = [listaProductos[i][0], listaProductos[i][1], listaProductos[i][2], listaProductos[i][3], cantidad];
        //        listaCarrito.push(productoEnCarrito);
        //        for (j = 0; j < listaCarrito.length; j++) {
        //            if (listaCarrito[j] == productoEnCarrito) {
        //                 cantidad = cantidad + 1;
        //             } else {
        //                 cantidad = 1;
        //             }
        //        } 
                
                
                // let j = 0;
                // do {
                //     if (listaCarrito[j] == productoEnCarrito) {
                //         cantidad = cantidad + 1;
                //     } else {
                //         cantidad = 1;
                //     }
                //     j++;
                // }
                // while (j < listaCarrito.length);
                // productoEnCarrito = [listaProductos[i][0], listaProductos[i][1], listaProductos[i][2], listaProductos[i][3], cantidad];
                // listaCarrito.push(productoEnCarrito);
//             }
//         }
//     return listaCarrito;
// }






const mostrarCarrito = (listaCarrito) => {

    for (let i = 0; i < listaCarrito.length; i++) {
        
        vistaCarrito += `
        Prod: ${listaCarrito[i][1]} --- Precio: $${listaCarrito[i][2]} --- Cant.: ${listaCarrito[i][4]}
        -----------------------------------------------------------------`
    }
    return alert(`Contenido del carrito:
        
    ${vistaCarrito}`);
}


const repetir = () => {
    opcionElegida = prompt("¿Quuiere repetir la operación? [SÍ/NO]");
    return opcionElegida;
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
            
        } while (repetir() !== "NO");    
        
        break;

        case "MOSTRAR":
            newNuevaListaCarrito = nuevaListaCarrito.slice();
            mostrarCarrito(nuevaListaCarrito);
            console.log(nuevaListaCarrito);

        break;

        case "ELIMINAR":
            do {

            
        
        } while (repetir() !== "NO");
        break;

        case "VACIAR":
            do {

            
        
        } while (repetir() !== "NO");
        break;

        case "CANCELAR":
            do {

            
        
        } while (repetir() !== "NO");
        break;

        case "CONFIRMAR":
            do {

            
        
        } while (repetir() !== "NO");
        break;

        default: 
        break;
    }


} while (operacion !== "SALIR");


//https://github.com/Ada-IT/bootcamp-frontend/blob/master/integradores/Integrador%203.%20Funciones.md