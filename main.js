/*simulador de smartphones*/

const Producto = function(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
};

let producto1 = new Producto("iphone 14", 650000, 8);
let producto2 = new Producto("samsung s23", 580000, 6);
let producto3 = new Producto("motorola edge 40pro", 290000, 5);
let producto4 = new Producto("apple smartwatch", 99000, 19);
let producto5 = new Producto("apple macbook", 820000, 8);

let lista = [producto1, producto2, producto3, producto4, producto5];

const carrito = {
    productos: [],
    total: 0,

    agregarProducto: function(producto, cantidad) {
    if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        this.total += producto.precio * cantidad;
        this.productos.push({ producto, cantidad });
        console.log(`Se agregaron ${cantidad} unidades de ${producto.nombre} al carrito.`);
    } else {
        console.log(`No hay suficiente stock de ${producto.nombre}.`);
    }
    },

    calcularTotal: function() {
    return this.total;
    },

    mostrarCarrito: function() {
    console.table(this.productos);
    console.log(`Total del carrito: $${this.calcularTotal()}`);
    },
};

function filtrarProductos() {
    let palabraClave = prompt("bienvenido. Ingrese el producto que desea buscar").trim().toUpperCase();
    let resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));

    if (resultado.length > 0) {
    console.table(resultado);
    let agregarAlCarrito = confirm("¿Desea agregar algún producto al carrito?");
    if (agregarAlCarrito) {
        let productoSeleccionado = prompt("Ingrese marca y modelo del producto que desea agregar al carrito:");
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea agregar al carrito:"));

        let productoEncontrado = lista.find((producto) => producto.nombre.toUpperCase() === productoSeleccionado.trim().toUpperCase());

        if (productoEncontrado) {
        carrito.agregarProducto(productoEncontrado, cantidad);
        } else {
        alert("El producto seleccionado no se encontró en la lista.");
        }
    }
    } else {
    alert("No se encontró ninguna coincidencia con: " + palabraClave);
    }
}

filtrarProductos();
