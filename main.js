let listaDiscos = [
  {
    id: 0,
    src: "/css/img/discos/Beauty_love_and_justice.jpg",
    titulo: "Ex1",
    precio: 4.99,
    cantidad: 0,
    categoria: "pop",
  },
  {
    id: 1,
    src: "/css/img/discos/Beauty_love_and_justice.jpg",
    titulo: "Ex2",
    precio: 21,
    cantidad: 0,
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
    <p>${disco.precio}</p>
    <footer>
      <button>
        <img
          class="imagen-logo"
          src="css/img/iconos/carrito-de-compras.png"
          alt="Logo carritos de compras"
        />
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
  let cartas = document.querySelector(".cartas");
  cartas.innerHTML = "";
  let listaFiltrada = filtrarCategoria(listaDiscos, nombre);
  listaFiltrada.forEach(function (disco) {
    const carta = document.createElement("article");
    carta.innerHTML = crearCarta(disco);
    cartas.append(carta);
  });
}
