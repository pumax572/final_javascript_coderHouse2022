function VerEdad(){
  console.log(document.getElementById("edad").value);
  }
  

const Bienvenido = ()=> {

};

function limpiar(){
  document.getElementById('miFormulario').reset();
}
function sumar(){
  let x= parseInt(document.getElementById('valor1').value);
  let y= parseInt(document.getElementById('valor2').value);
  
  document.getElementById('el-resultado').innerHTML=x+y;
}
function restar(){
  let x= parseInt(document.getElementById('valor1').value);
  let y= parseInt(document.getElementById('valor2').value);
  
  document.getElementById('el-resultado').innerHTML=x-y;
}
function multiplicar(){
  let x= parseInt(document.getElementById('valor1').value);
  let y= parseInt(document.getElementById('valor2').value);
  
  document.getElementById('el-resultado').innerHTML=x*y;
}
function dividir(){
  let x= parseInt(document.getElementById('valor1').value);
  let y= parseInt(document.getElementById('valor2').value);
  
  document.getElementById('el-resultado').innerHTML=x/y;
}
function calcularPorcentaje (numero, porcentaje){
  return numero / 100* porcentaje;

}
function pesosDolares(valNum) {
  document.getElementById("inputDolares").value=valNum*1;
}
function dolaresPesos(valNum) {
  document.getElementById("inputPesos").value=valNum*180;
}


const a=["COCO", "MARACUYA","ARANDANOS" ]
console.log(a);
console.log(a.length)
console.log(a [1])
const Nombre1={
  nombre : "Maximiliano",
  apellido: "Vega",
  edad: "35",
  soltero: false,
}

let NombreString=JSON.stringify(Nombre1);
let NombreStr=JSON.parse(NombreString);

console.log(Nombre1);
console.log(Nombre1.nombre);
console.log(Nombre1.edad); 
console.log(Nombre1.apellido);
console.log(Nombre1.soltero);


let NumerosPrimeros = ['Luis',"Tus compras son por trimestre:", '18', '15', '19'];
let NumerosSegundos = ['Juan', "Tus compras son por trimestre:",'15', '19', '17'];
let NumerosTerceros= ['Pedro',"Tus notas son por trimestre:", '10', '19', '18'];
let NumerosFinales = NumerosPrimeros.concat(NumerosSegundos).concat(NumerosTerceros);
console.log(NumerosFinales)



Bienvenido();






document.querySelector(".first").addEventListener('click', function(){
Swal.fire("GRACIAS POR FORMAR PARTE DE NUESTRO DIA");
});

document.querySelector(".second").addEventListener('click', function(){
Swal.fire("SONRIE", "HOY ES UN GRAN DIA PARA SER FELIZ");
});

document.querySelector(".third").addEventListener('click', function(){
Swal.fire("SOMOS POSITIVOS", "JUNTOS SOMOS IMPARABLES", "RECICLAMOS");
});

//Aplicando una API

/*let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
let countryName = "India";
let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
console.log(finalURL)
fetch(finalURL).then((response) => response.json())
.then((data) => {
  console.log(data[0]);
  console.log(data[0].capital[0]);
  console.log(data[0].flags.svg);
  console.log(data[0].name.common);
  console.log(data[0].continents[0])
  console.log(Object.keys(data[0].currencies)[0]);
  console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
  console.log(Object.values(data[0].languages).toString().split(",").join(", "));
  result.innerHTML=`<img src="${data[0].flags.svg}" class="flag-img>`;
})
})*/

function iniciarMap(){
let coord = {lat:-34.5956145 ,lng: -58.4431949};
let map = new google.maps.Map(document.getElementById('map'),{
  zoom: 10,
  center: coord
});
let marker = new google.maps.Marker({
  position: coord,
  map: map
});
}
document.addEventListener('DOMContentLoaded', () => {

  // Variables
  const baseDeDatos = [
      {
          id: 1,
          nombre: 'COCO',
          precio: 1,
          imagen: ''
      },
      {
          id: 2,
          nombre: 'MARACUYA',
          precio: 1.2,
          imagen: ''
      },
      {
          id: 3,
          nombre: 'ARANDANDOS',
          precio: 2.1,
          imagen: ''
      },
     

  ];

  let carrito = [];
  const divisa = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const miLocalStorage = window.localStorage;

  // Funciones

  /**
  * Dibuja todos los productos a partir de la base de datos
  */
  function renderizarProductos() {
      baseDeDatos.forEach((info) => {
          // Estructura
          const miNodo = document.createElement('div');
          miNodo.classList.add('card', 'col-sm-4');
          // Body
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('card-body');
          // Titulo
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.textContent = info.nombre;
          // Imagen
          const miNodoImagen = document.createElement('img');
          miNodoImagen.classList.add('img-fluid');
          miNodoImagen.setAttribute('src', info.imagen);
          // Precio
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.textContent = `${info.precio}${divisa}`;
          // Boton 
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = '+';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
          // Insertamos
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          DOMitems.appendChild(miNodo);
      });
  }

  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
      // Anyadimos el Nodo a nuestro carrito
      carrito.push(evento.target.getAttribute('marcador'))
      // Actualizamos el carrito 
      renderizarCarrito();
      // Actualizamos el LocalStorage
      guardarCarritoEnLocalStorage();
  }

  /**
  * Dibuja todos los productos guardados en el carrito
  */
  function renderizarCarrito() {
      // Vaciamos todo el html
      DOMcarrito.textContent = '';
      // Quitamos los duplicados
      const carritoSinDuplicados = [...new Set(carrito)];
      // Generamos los Nodos a partir de carrito
      carritoSinDuplicados.forEach((item) => {
          // Obtenemos el item que necesitamos de la variable base de datos
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              // ¿Coincide las id? Solo puede existir un caso
              return itemBaseDatos.id === parseInt(item);
          });
          // Cuenta el número de veces que se repite el producto
          const numeroUnidadesItem = carrito.reduce((total, itemId) => {
              // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
              return itemId === item ? total += 1 : total;
          }, 0);
          // Creamos el nodo del item del carrito
          const miNodo = document.createElement('li');
          miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
          miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
          // Boton de borrar
          const miBoton = document.createElement('button');
          miBoton.classList.add('btn', 'btn-danger', 'mx-5');
          miBoton.textContent = 'X';
          miBoton.style.marginLeft = '1rem';
          miBoton.dataset.item = item;
          miBoton.addEventListener('click', borrarItemCarrito);
          // Mezclamos nodos
          miNodo.appendChild(miBoton);
          DOMcarrito.appendChild(miNodo);
      });
      // Renderizamos el precio total en el HTML
      DOMtotal.textContent = calcularTotal();
  }

  /**
  * Evento para borrar un elemento del carrito
  */
  function borrarItemCarrito(evento) {
      // Obtenemos el producto ID que hay en el boton pulsado
      const id = evento.target.dataset.item;
      // Borramos todos los productos
      carrito = carrito.filter((carritoId) => {
          return carritoId !== id;
      });
      // volvemos a renderizar
      renderizarCarrito();
      // Actualizamos el LocalStorage
      guardarCarritoEnLocalStorage();

  }

  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */
  function calcularTotal() {
      // Recorremos el array del carrito 
      return carrito.reduce((total, item) => {
          // De cada elemento obtenemos su precio
          const miItem = baseDeDatos.filter((itemBaseDatos) => {
              return itemBaseDatos.id === parseInt(item);
          });
          // Los sumamos al total
          return total + miItem[0].precio;
      }, 0).toFixed(2);
  }

  /**
  * Varia el carrito y vuelve a dibujarlo
  */
  function vaciarCarrito() {
      // Limpiamos los productos guardados
      carrito = [];
      // Renderizamos los cambios
      renderizarCarrito();
      // Borra LocalStorage
      localStorage.clear();

  }
  
function finalizarCompra(){

}
  function guardarCarritoEnLocalStorage () {
      miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage () {
      // ¿Existe un carrito previo guardado en LocalStorage?
      if (miLocalStorage.getItem('carrito') !== null) {
          // Carga la información
          carrito = JSON.parse(miLocalStorage.getItem('carrito'));
      }
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});
const envio = document.getElementById("envio")

function miFunc() {
Swal.fire({
title: 'Quiere finalizar su compra?',
text: "Se procesara su compra",
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Si comprar'
}).then((result) => {
if (result.isConfirmed) {
Swal.fire(
'Su compra fue procesada', 
'PROCESO EXITOSO',
'success'

)
}
else{
Swal.fire(
'Su compra ha sido cancelada'

)
}


})
}

// Prueba para suscribir un mail
function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		Swal.fire('Email no valido');
	}
	else Swal.fire('Se ha suscripto a nuestro newsletter');
}

//Aplicando una API

/*let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = "India";
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL)
  fetch(finalURL).then((response) => response.json())
  .then((data) => {
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].flags.svg);
    console.log(data[0].name.common);
    console.log(data[0].continents[0])
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(Object.values(data[0].languages).toString().split(",").join(", "));
    result.innerHTML=`<img src="${data[0].flags.svg}" class="flag-img>`;
  })
})*/

function iniciarMap(){
  let coord = {lat:-34.5956145 ,lng: -58.4431949};
  let map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  let marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}
