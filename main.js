let listaDiscos = [
  {
    id: 0,
    src: "/css/img/discos/Beauty_love_and_justice.jpg",
    titulo: "Ex1",
    precio: 4.99,
    categoria: "pop",
  },
  {
    id: 1,
    src: "/css/img/discos/Beauty_love_and_justice.jpg",
    titulo: "Ex2",
    precio: 21,
    categoria: "rock",
  },
];

function filtrarCategoria(listaDiscos, NombreCategoria) {
  let lista = [];
  listaDiscos.forEach(function (disco) {
    if (disco.categoria === NombreCategoria) {
      lista.push(disco);
    }
  });
  return lista;
}

function crearCarta(disco) {
  return `
    <h3>${disco.titulo}</h3>
    <img
      class="imagen-disco"
      src="${disco.src}"
      alt="Logo de Beauty_love_and_justice"
    />
    <p>${disco.precio} €</p>
    <footer>
      <button onclick="addCarritoCompra(${disco.id})">
        <img
          class="imagen-logo"
          src="css/img/iconos/carrito-de-compras.png"
          alt="Logo carritos de compras"
        />
      </button>
      <button onclick="verFicha(${disco.id})">
        Ver
      </button>
      <button>
        <img
          class="imagen-logo"
          src="css/img/iconos/me-gusta.png"
          alt="Logo carritos de compras"
        />
      </button>
    </footer>`;
}

function filtrar(nombre) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  let cartas = document.createElement("article");
  cartas.classList.add("cartas");
  let listaFiltrada = filtrarCategoria(listaDiscos, nombre);
  listaFiltrada.forEach(function (disco) {
    const carta = document.createElement("article");
    carta.innerHTML = crearCarta(disco);
    cartas.append(carta);
  });
  main.append(cartas);
}

function crearFicha(disco) {
  return `<h1>${disco.titulo}</h1>`;
}

function verFicha(id) {
  listaDiscos.forEach(function (disco) {
    if (disco.id === id) {
      const main = document.querySelector("main");
      main.innerHTML = "";
      const ficha = document.createElement("article");
      ficha.classList.add("ficha");
      console.log(disco);
      ficha.innerHTML = crearFicha(disco);
      main.append(ficha);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  let cartas = document.createElement("article");
  cartas.classList.add("cartas");
  /* Una vez cargado la pag de inicio, mostrar todos los discos */
  listaDiscos.forEach(function (disco) {
    const carta = document.createElement("article");
    carta.innerHTML = crearCarta(disco);
    cartas.append(carta);
  });
  document.querySelector("main").append(cartas);
});
