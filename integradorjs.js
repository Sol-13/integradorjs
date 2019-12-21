/*--------------------------------------------------------------------------------------------------------------------------
           VARIABLES
---------------------------------------------------------------------------------------------------------------------------*/

let listaProductos = [
    [1, "Notebook Lenovo S400", 100, true],
    [2, "Celular Motorola G5 ", 135, false],
    [3, "Smart TV Philips 43'", 190, true],
    [4, "Sony PS 7              ", 215, true],
];

let idProducto = ""; //el producto que elige el usuario para agregarlo al carrito
idProducto= Number(idProducto);
let vistaCarrito = ""; // string para acumular el contenido del carrito y que se muestre todo junto en el alert
let productoEnCarrito =[5]; // array de cada producto que va en el carrito, con 5 índices para poder agregar cantidad en el índice 5
let id = 0; // id del producto, en la lista o en el carrito
let producto = ""; // descripción del producto, en la lista o en el carrito
let precio = 0; // precio del producto, en la lista o en el carrito
let descuento = false; // descuento del producto, en la lista o en el carrito
let cantidad = 0; // cantidad del producto, en el carrito
const listaCarrito = []; // array que contiene los productos (lista de productoEnCarrito) que el usuario quiere comprar

/*--------------------------------------------------------------------------------------------------------------------------
           FUNCIONES
---------------------------------------------------------------------------------------------------------------------------*/

const agregarProducto = (productoElegido) => {    
        productoElegido = elegirProducto();
        for (let i = 0; i < listaProductos.length; i++) {
            if (listaProductos[i][0] == productoElegido) {
                let j = 0;
                do {
                    if (listaCarrito[j] == productoEnCarrito) {
                        cantidad = cantidad + 1;
                    } else {
                        cantidad = 1;
                    }
                    j++;
                }
                while (j < listaCarrito.length);
                productoEnCarrito = [listaProductos[i][0], listaProductos[i][1], listaProductos[i][2], listaProductos[i][3], cantidad];
                listaCarrito.push(productoEnCarrito);
            }
        }
    return listaCarrito;
}



const elegirProducto = () => {
 idProducto = prompt(`Coloque el numero de producto`)
    idProducto = Number(idProducto);
    if ((idProducto >= 1 && idProducto <= listaProductos.length)) {
    alert(`El producto elegido es: 
         ID: ${listaProductos[idProducto-1][0]}
         Descrip.: ${listaProductos[idProducto-1][1]} 
         Precio: $${listaProductos[idProducto-1][2]}
         ¿Descuento? ${listaProductos[idProducto-1][3]}`);
    } else {
        alert("El ID que ingresó no es válido.");
    }
    return idProducto;
}


const mostrarCarrito = () => {
    for (let i = 0; i < listaCarrito.length; i++) {
        vistaCarrito += `
        ${listaCarrito[i][1]}        $${listaCarrito[i][2]}     ${listaCarrito[i][3]}      ${listaCarrito[i][4]}`
    }
    return alert(`Contenido del carrito:
        Producto                          Precio      Dto.   Cant.
    ${vistaCarrito}`);
}


/*--------------------------------------------------------------------------------------------------------------------------
           CÓDIGO
---------------------------------------------------------------------------------------------------------------------------*/
agregarProducto();
console.log(listaCarrito);
mostrarCarrito();


/*const mostrarProductos = () => {
    let lista = "";

    for (let i = 0; i < listaProductos.length; i++) {
        lista += `
        ${listaProductos[i][0]} ${listaProductos[i][1]}`
    }
    return alert(lista)
}

mostrarProductos()



const agregarProducto = () => {
    lista.push()
}





prompt(`Bienvenidos a la tiendita de ElectrocutAdas

Que desea hacer?

✚ [AGREGAR] un producto
📄 [MOSTRAR] compra
✂ [ELIMINAR] un producto del carrito
🗑️ [VACIAR] carrito
🚪 [CANCELAR] compra
✔️ [CONFIRMAR] compra`
)
*/