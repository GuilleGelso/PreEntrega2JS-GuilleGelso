let productos = [
  { id: 2, nombre: "Disco", categoria: "Componentes", stock: 11, precio: 530 },
  { id: 3, nombre: "Monitor", categoria: "Monitores", stock: 15, precio: 690 },
  { id: 5, nombre: "Mouse", categoria: "Perisfericos", stock: 9, precio: 250 },
  { id: 7, nombre: "Teclado", categoria: "Perisfericos", stock: 18, precio: 220 },
  { id: 9, nombre: "Pendrive", categoria: "Accesorios", stock: 151, precio: 320 },
  { id: 12, nombre: "Cargador celular", categoria: "accesorios", stock: 19, precio: 73 },
  { id: 15, nombre: "Memoria Ram", categoria: "Componentes", stock: 16, precio: 7800 },
  { id: 17, nombre: "Gabinetes", categoria: "Componentes", stock: 12, precio: 26530 },
]

let total = []

let carrito = []

let mensaje = "Bienvenido a tienda GCG\n1 - Productos\n2 - Agregar producto al carrito\n3 - Filtrar por categoría \n4 - Carrito\n0 - SALIR"

let opcion

do {
  opcion = Number(prompt(mensaje))
  if (opcion === 1) {
    alert(listar(productos))
  } else if (opcion === 2) {
    let id = Number(prompt("Seleccione id del producto a comprar\n" + listar(productos)))
    let productoBuscado = productos.find(prod => prod.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(prod => prod.id === productoBuscado.id)

    if (posicionProductoEnCarrito === -1) {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnitario: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio
      })
    } else {
      carrito[posicionProductoEnCarrito].unidades++
      carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precioUnitario * carrito[posicionProductoEnCarrito].unidades
    }

   
    console.log(carrito)
  } if (opcion === 3) {
    let categoria = prompt("Selecciones categoria: Componentes Perisfericos Accesorios o Monitores")
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    alert(listar(productosFiltrados))

    

  } if (opcion === 4) {
    if (carrito.length > 0) {
      alert(listar2(carrito))
    } else {
      alert("Primero debe agregar productos al carrito")
    }
  }

  
  
} while (opcion !== 0)

function listar(arrayAListar) {
  let listado = "ID - Nombre\n"
  arrayAListar.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + "\n"
  })
  return listado
}

function listar2(arrayAListar) {
  let listado = "ID - Nombre - Precio\n"
  arrayAListar.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + " - " + " $ " + element.precioUnitario +  "\n"
  })
  return listado
}


