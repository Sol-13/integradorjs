let listaProductos = [
    [1, "Notebook Lenobo S400", 100, true],
    [2, "Celular Notorola G5", 135, false],
    [3, "Smart TV Filips 43'", 190, true],
    [4, "Sorny PS 7", 215, true],
];

const mostrarProductos = () => {
    for (let i = 0; listaProductos.length; i++) {
        return listaProductos
    }
}
console.log(listaProductos)



prompt(`Bienvenidos a la tiendita de ElectrocutAdas
Que desea hacer?
✚[AGREGAR] un producto
📄[MOSTRAR] compra
✂[ELIMINAR] un producto del carrito
🗑️ [VACIAR] carrito
🚪 [CANCELAR] compra
✔️ [CONFIRMAR] compra`
)
