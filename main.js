let listaDiscos = [
  {
    id: 0,
    src: "/css/img/discos/Beauty_love_and_justice.jpg",
    titulo: "Beauty love and justice",
    precio: 5.99,
    categoria: "pop",
  },
  {
    id: 1,
    src: "/css/img/discos/Zahorí.jpg",
    titulo: "Zahorí",
    precio: 21,
    categoria: "rock",
  },
  {
    id: 2,
    src: "/css/img/discos/Valientes.jpg",
    titulo: "Valientes",
    precio: 1.99,
    categoria: "pop",
  },
  {
    id: 3,
    src: "/css/img/discos/Nuevo mundo.jpg",
    titulo: "Nuevo Mundo",
    precio: 5.99,
    categoria: "rock",
  },
  {
    id: 4,
    src: "/css/img/discos/Estoy perdido.jpg",
    titulo: "Estoy perdido",
    precio: 3.99,
    categoria: "jazz",
  },
  {
    id: 5,
    src: "/css/img/discos/Este es mi hip-hop.jpg",
    titulo: "Este es mi hip-hop",
    precio: 2.99,
    categoria: "pop",
  },
  {
    id: 6,
    src: "/css/img/discos/Playgrouds.jpg",
    titulo: "Playgrounds",
    precio: 2.99,
    categoria: "reggae",
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
  return `
  <article class="ficha">
    <h1>${disco.titulo}</h1>
    <img
    class="imagen-disco"
    src="${disco.src}"
    alt="Logo de Beauty_love_and_justice"
    />
  </article>
  `;
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
