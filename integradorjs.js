let listaProductos = [
    [1, "Notebook Lenovo S400", 100, true],
    [2, "Celular Motorola G5 ", 135, false],
    [3, "Smart TV Philips 43'", 190, true],
    [4, "Sony PS 7              ", 215, true],
];

let idProducto = "";
idProducto= Number(idProducto);
let vistaCarrito = "";
let productoEnCarrito =[5];
let id = 0;
let producto = "";
let precio = 0;
let descuento = false;
let cantidad = 0;
const listaCarrito = [];

const agregarProducto = (productoElegido) => {    
        productoElegido = elegirProducto();
        for (let i = 0; i < listaProductos.length; i++) {
            if (listaProductos[i][0] == productoElegido) {
                productoEnCarrito = [listaProductos[i][0], listaProductos[i][1], listaProductos[i][2], listaProductos[i][3], 1]
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