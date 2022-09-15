
const carrito = []

const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito")

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carrito.push(producto)
        console.log(carrito);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p> 
                            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button id="eliminar${producto.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
        contenedorCarrito.appendChild(div)
    }

    renderProductosCarrito()
}


