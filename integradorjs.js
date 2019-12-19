let listaProductos = [
    [1, "Notebook Lenobo S400", 100, true],
    [2, "Celular Notorola G5", 135, false],
    [3, "Smart TV Filips 43'", 190, true],
    [4, "Sorny PS 7", 215, true],
];
let idProducto = "";
idProducto= Number(idProducto);

const agregarProducto = (idProducto) => {
    if ((idProducto >= 1 && idProducto <= listaProductos.length)) {
        for (let i = 0; i < listaProductos.length; i++) {

            if (listaProductos[i][0] == (idProducto)) {
                listaCarrito.push(listaProductos[i]);
            }
        }
        console.log(listaCarrito)
    }
}
const listaCarrito = [];

const elegirProducto = () => {
 idProducto = prompt(`Coloque el numero de producto`)
    console.log(idProducto)
    idProducto = Number(idProducto);
    agregarProducto(idProducto);
    alert(idProducto)
}

elegirProducto()


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
