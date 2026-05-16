'use strict';

// ===== PRODUCTOS =====
const productos = [
  // PROTEÍNAS — potes con imagen real
  { id: 1,  marca: "STAR NUTRITION", nombre: "Platinum Whey 2lb - Chocolate", categoria: "proteinas", precio: 55000, stock: 1,  icono: "🏋️", imagen: "https://starnutrition.com.ar/cdn/shop/files/PWP-2Lb-Chocolate.png?v=1718218508" },
  { id: 2,  marca: "STAR NUTRITION", nombre: "Platinum Whey 2lb - Frutilla",   categoria: "proteinas", precio: 55000, stock: 1,  icono: "🏋️", imagen: "https://starnutrition.com.ar/cdn/shop/files/PWP-2Lb-Strawberry.png?v=1718218511" },
  { id: 3,  marca: "STAR NUTRITION", nombre: "Platinum Whey 2lb - Vainilla",   categoria: "proteinas", precio: 55000, stock: 1,  icono: "🏋️", imagen: "https://starnutrition.com.ar/cdn/shop/files/PWP-2Lb-Vainilla.png?v=1718218509" },
  { id: 4,  marca: "STAR NUTRITION", nombre: "Platinum Whey 2lb - Banana",     categoria: "proteinas", precio: 55000, stock: 1,  icono: "🏋️", imagen: "https://starnutrition.com.ar/cdn/shop/files/PWP-2Lb-Banana.png?v=1718218509" },
  { id: 5,  marca: "STAR NUTRITION", nombre: "Platinum Whey 2lb - Cookies",    categoria: "proteinas", precio: 55000, stock: 1,  icono: "🏋️", imagen: "https://starnutrition.com.ar/cdn/shop/files/PWP-2Lb-Cookies.png?v=1718218508" },
  // PROTEÍNAS — doypacks (placeholder)
  { id: 6,  marca: "STAR NUTRITION", nombre: "Platinum Whey DOYPACK - Chocolate", categoria: "proteinas", precio: 52500, stock: 2,  icono: "💪", imagen: null },
  { id: 7,  marca: "STAR NUTRITION", nombre: "Platinum Whey DOYPACK - Vainilla",  categoria: "proteinas", precio: 52500, stock: 2,  icono: "💪", imagen: null },
  { id: 8,  marca: "STAR NUTRITION", nombre: "Platinum Whey DOYPACK - Frutilla",  categoria: "proteinas", precio: 52500, stock: 2,  icono: "💪", imagen: null },
  { id: 9,  marca: "STAR NUTRITION", nombre: "Platinum Whey DOYPACK - Cookies",   categoria: "proteinas", precio: 52500, stock: 2,  icono: "💪", imagen: null },
  { id: 10, marca: "STAR NUTRITION", nombre: "Platinum Whey DOYPACK - Banana",    categoria: "proteinas", precio: 52500, stock: 2,  icono: "💪", imagen: null },
  { id: 11, marca: "ENA",            nombre: "100% Whey Protein 2lb - Choc/Vainilla/Frutilla", categoria: "proteinas", precio: 48000, stock: 3,  icono: "🏋️", imagen: "https://acdn-us.mitiendanube.com/stores/005/005/839/products/1-fa708618c716997f6a17365349098006-640-0.webp" },
  { id: 12, marca: "MAX FORCE",      nombre: "Whey Protein 910g - Vainilla/Chocolate/Frutilla", categoria: "proteinas", precio: 25500, stock: 6,  icono: "🏋️", imagen: "https://dcdn-us.mitiendanube.com/stores/005/542/784/products/whey-protein-vainilla-1-9306f3264a8d57e69c17597542124119-640-0.webp" },

  // CREATINAS
  { id: 13, marca: "STAR NUTRITION", nombre: "Creatina Monohidratada 150g",          categoria: "creatinas", precio: 16500, stock: 2,  icono: "⚡", imagen: "https://starnutrition.com.ar/cdn/shop/files/Creatine_300.png?v=1719589258" },
  { id: 14, marca: "STAR NUTRITION", nombre: "Creatina Monohidratada 300g Pote",     categoria: "creatinas", precio: 26500, stock: 3,  icono: "⚡", imagen: "https://starnutrition.com.ar/cdn/shop/files/Creatine_300.png?v=1719589258" },
  { id: 15, marca: "STAR NUTRITION", nombre: "Creatina Monohidratada 300g Doypack",  categoria: "creatinas", precio: 24900, stock: 3,  icono: "⚡", imagen: "https://starnutrition.com.ar/cdn/shop/files/Creatine_300.png?v=1719589258" },
  { id: 16, marca: "BODY ADVANCE",   nombre: "Creatina Monohidrato 300g Doypack",    categoria: "creatinas", precio: 20000, stock: 3,  icono: "⚡", imagen: null },
  { id: 17, marca: "BODY ADVANCE",   nombre: "Creatina Monohidrato 300g Pote",       categoria: "creatinas", precio: 20000, stock: 3,  icono: "⚡", imagen: null },
  { id: 18, marca: "MAX FORCE",      nombre: "Creatina Pura 250g",                   categoria: "creatinas", precio: 15000, stock: 4,  icono: "⚡", imagen: "https://dcdn-us.mitiendanube.com/stores/005/542/784/products/creatinamonohidrato-tuttifrutti-1-0da0580cbca6627e9517597534068631-640-0.webp" },
  { id: 19, marca: "AKER",           nombre: "Creatina 300g",                        categoria: "creatinas", precio: 20000, stock: 10, icono: "⚡", imagen: "https://acdn-us.mitiendanube.com/stores/005/378/900/products/sabor-chocolate-1800-x-1350-px-7-e7a2b1ab2007edfd4217635050260105-640-0.webp" },
  { id: 20, marca: "ALMAFIT",        nombre: "Creatina 300g",                        categoria: "creatinas", precio: 20000, stock: 6,  icono: "⚡", imagen: "https://acdn-us.mitiendanube.com/stores/005/790/005/products/22102025091957_19-a9f924f964d2138d7e17611356943929-640-0.webp" },

  // COLÁGENO
  { id: 21, marca: "MAX FORCE", nombre: "Colágeno 300g", categoria: "colageno", precio: 20000, stock: 4, icono: "🦴", imagen: null },
  { id: 22, marca: "ALMAFIT",   nombre: "Colágeno",      categoria: "colageno", precio: 19500, stock: 5, icono: "🦴", imagen: "https://acdn-us.mitiendanube.com/stores/005/790/005/products/22102025091957_19-a9f924f964d2138d7e17611356943929-640-0.webp" },

  // PRE-ENTRENO
  { id: 23, marca: "ALMAFIT",   nombre: "Pre Entreno",          categoria: "pre-entreno", precio: 20000, stock: 5, icono: "🔥", imagen: "https://acdn-us.mitiendanube.com/stores/005/790/005/products/22102025091957_19-a9f924f964d2138d7e17611356943929-640-0.webp" },
  { id: 24, marca: "MAX FORCE", nombre: "Ripper Force 60 caps", categoria: "pre-entreno", precio: 15000, stock: 2, icono: "🔥", imagen: null },

  // VITAMINAS
  { id: 25, marca: "STAR NUTRITION", nombre: "Cafeína 200 - 30 caps",               categoria: "vitaminas", precio: 10000, stock: 2, icono: "☕", imagen: null },
  { id: 26, marca: "GENTECH",        nombre: "ZMA Recovery 60 comp",                categoria: "vitaminas", precio: 12500, stock: 1, icono: "😴", imagen: null },
  { id: 27, marca: "MAX FORCE",      nombre: "Multivitamínico 60 comp",              categoria: "vitaminas", precio: 9500,  stock: 4, icono: "🌿", imagen: null },
  { id: 28, marca: "MAX FORCE",      nombre: "Magnesio Citrato 150g",                categoria: "vitaminas", precio: 9500,  stock: 4, icono: "🧲", imagen: null },
  { id: 29, marca: "ALMAFIT",        nombre: "Omega 3",                              categoria: "vitaminas", precio: 18700, stock: 5, icono: "🐟", imagen: "https://acdn-us.mitiendanube.com/stores/005/790/005/products/22102025091957_19-a9f924f964d2138d7e17611356943929-640-0.webp" },
  { id: 30, marca: "BODY ADVANCE",   nombre: "Creagline 150g (creatina+glutamina)",  categoria: "vitaminas", precio: 13900, stock: 3, icono: "💊", imagen: null },

  // OTROS
  { id: 31, marca: "AKER", nombre: "Pancakes Proteicos 400g", categoria: "otros", precio: 11900, stock: 6, icono: "🥞", imagen: null },
];

// Aplicar stock del panel admin (localStorage)
(function () {
  const ovr = JSON.parse(localStorage.getItem('valhallaStock') || '{}');
  productos.forEach(p => { if (ovr[p.id] !== undefined) p.stock = ovr[p.id]; });
})();

// ===== ESTADO GLOBAL =====
let carrito = [];
let categoriaActiva = 'todos';
let busqueda = '';
let costoEnvio = 0;
let cpDestino  = '';
const ENVIO_GRATIS_DESDE = 40000;

function calcularZonaEnvio(cp) {
  const n = parseInt(cp, 10);
  if (isNaN(n) || cp.length < 4) return null;
  if ((n >= 1600 && n <= 1699) || (n >= 1700 && n <= 1799)) return { zona: 1, costo: 2500 };
  if ((n >= 1800 && n <= 1999) || (n >= 1400 && n <= 1599)) return { zona: 2, costo: 3500 };
  if ((n >= 1000 && n <= 1399) || (n >= 2000 && n <= 2999)) return { zona: 3, costo: 4500 };
  if  (n >= 3000 && n <= 7999)                               return { zona: 4, costo: 6500 };
  if ((n >= 8000 && n <= 9999) || (n >= 4000 && n <= 4999)) return { zona: 5, costo: 8500 };
  return { zona: 4, costo: 6500 }; // fallback interior
}

// ===== DOM REFS =====
const productsGrid   = document.getElementById('productsGrid');
const noResults      = document.getElementById('noResults');
const cartBadge      = document.getElementById('cartBadge');
const cartBtn        = document.getElementById('cartBtn');
const cartSidebar    = document.getElementById('cartSidebar');
const cartOverlay    = document.getElementById('cartOverlay');
const cartClose      = document.getElementById('cartClose');
const cartItems      = document.getElementById('cartItems');
const cartEmpty      = document.getElementById('cartEmpty');
const cartFooter     = document.getElementById('cartFooter');
const cartTotal      = document.getElementById('cartTotal');
const btnWhatsapp    = document.getElementById('btnWhatsapp');
const searchInput    = document.getElementById('searchInput');
const searchClear    = document.getElementById('searchClear');
const navbar         = document.getElementById('navbar');
const navHamburger   = document.getElementById('navHamburger');
const navMenu        = document.getElementById('navMenu');
const navSearchBtn   = document.getElementById('navSearchBtn');
const navSearchBar   = document.getElementById('navSearchBar');
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu   = document.getElementById('dropdownMenu');

// ===== UTILS =====
function formatPrecio(n) {
  return '$' + n.toLocaleString('es-AR');
}

function getProductosFiltrados() {
  return productos.filter(p => {
    const matchCat  = categoriaActiva === 'todos' || p.categoria === categoriaActiva;
    const q         = busqueda.toLowerCase().trim();
    const matchBusq = !q ||
      p.nombre.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q);
    return matchCat && matchBusq;
  });
}

// ===== RENDERIZADO =====
function getCardMedia(p) {
  const ph = `
    <div class="product-img-placeholder" style="display:none;">
      <span class="ph-icon">${p.icono}</span>
      <span class="ph-nombre">${p.nombre}</span>
      <span class="ph-marca">${p.marca}</span>
    </div>`;

  if (p.imagen) {
    return `
      <img src="${p.imagen}" alt="${p.marca} ${p.nombre}" loading="lazy" referrerpolicy="no-referrer"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
      ${ph}`;
  }
  return `
    <div class="product-img-placeholder">
      <span class="ph-icon">${p.icono}</span>
      <span class="ph-nombre">${p.nombre}</span>
      <span class="ph-marca">${p.marca}</span>
    </div>`;
}

// Render products grid
function renderProductos() {
  const lista = getProductosFiltrados();
  productsGrid.innerHTML = '';

  noResults.style.display = lista.length ? 'none' : 'flex';
  if (!lista.length) return;

  lista.forEach((p, i) => {
    const sinStock  = p.stock === 0;
    const stockBajo = p.stock > 0 && p.stock <= 2;

    let stockHtml = '';
    if (sinStock)       stockHtml = `<span class="card-stock none">Sin stock</span>`;
    else if (stockBajo) stockHtml = `<span class="card-stock low">⚠️ ¡Solo ${p.stock} disponible${p.stock > 1 ? 's' : ''}!</span>`;
    else                stockHtml = `<span class="card-stock">✓ En stock (${p.stock})</span>`;

    const card = document.createElement('article');
    card.className = 'product-card' + (sinStock ? ' out-of-stock' : '');
    card.style.animationDelay = Math.min(i * 0.04, 0.4) + 's';

    card.innerHTML = `
      <div class="card-img-wrap">
        ${getCardMedia(p)}
        ${sinStock ? '<span class="badge-out">SIN STOCK</span>' : ''}
      </div>
      <div class="card-body">
        <span class="card-marca">${p.marca}</span>
        <span class="card-nombre">${p.nombre}</span>
        ${stockHtml}
        <span class="card-precio">${formatPrecio(p.precio)}</span>
      </div>
      <div class="card-footer">
        <button class="btn-add" data-id="${p.id}" ${sinStock ? 'disabled' : ''}>
          ${sinStock ? 'Sin Stock' : '+ AGREGAR AL CARRITO'}
        </button>
        <button class="btn-consultar" data-id="${p.id}">💬 Consultar</button>
      </div>`;

    card.querySelector('.btn-add').addEventListener('click', () => agregarAlCarrito(p.id));
    card.querySelector('.btn-consultar').addEventListener('click', () => {
      const msg = `Hola Valhalla Nutrition! 👋 Quiero consultar sobre:\n*${p.nombre}* - ${p.marca}\nPrecio: ${formatPrecio(p.precio)}\n¿Tienen stock disponible?`;
      window.open(`https://wa.me/5491131782187?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    });
    productsGrid.appendChild(card);
  });
}

// ===== FILTROS =====
function actualizarContadores() {
  ['proteinas', 'creatinas', 'colageno', 'pre-entreno', 'vitaminas', 'otros'].forEach(cat => {
    const n   = productos.filter(p => p.categoria === cat).length;
    const el  = document.getElementById(`cnt-${cat}`);
    if (el) el.textContent = `${n} producto${n !== 1 ? 's' : ''}`;
  });
}

// Filtrar por categoría
function filtrarPorCategoria(cat) {
  categoriaActiva = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.filter-btn[data-cat="${cat}"]`);
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  const catCard = document.querySelector(`.cat-card[data-cat="${cat}"]`);
  if (catCard) catCard.classList.add('active');
  renderProductos();
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== CARRITO =====
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto || producto.stock === 0) return;

  const enCarrito  = carrito.find(item => item.id === id);
  const cantActual = enCarrito ? enCarrito.cantidad : 0;

  if (cantActual >= producto.stock) {
    mostrarToast(`Stock máximo: ${producto.stock} unidad${producto.stock > 1 ? 'es' : ''}`);
    return;
  }

  if (enCarrito) {
    enCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
  abrirCarrito();
}

function cambiarCantidad(id, delta) {
  const item     = carrito.find(i => i.id === id);
  if (!item) return;
  const producto = productos.find(p => p.id === id);
  const nueva    = item.cantidad + delta;

  if (nueva <= 0) { eliminarDelCarrito(id); return; }
  if (nueva > producto.stock) {
    mostrarToast(`Stock máximo: ${producto.stock} unidad${producto.stock > 1 ? 'es' : ''}`);
    return;
  }

  item.cantidad = nueva;
  actualizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarrito();
}

function actualizarCarrito() {
  const subtotal   = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const totalItems = carrito.reduce((s, i) => s + i.cantidad, 0);

  cartBadge.textContent = totalItems;
  cartBadge.classList.toggle('visible', totalItems > 0);

  cartItems.innerHTML = '';

  if (!carrito.length) {
    cartItems.appendChild(cartEmpty);
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    // reset envío al vaciar carrito
    costoEnvio = 0; cpDestino = '';
    const res = document.getElementById('shippingResult');
    if (res) { res.textContent = ''; res.className = 'shipping-result'; }
    const cpIn = document.getElementById('cpInput');
    if (cpIn) cpIn.value = '';
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'flex';

  // Banner envío gratis
  const banner = document.getElementById('cartFreeBanner');
  if (banner) {
    if (subtotal >= ENVIO_GRATIS_DESDE) {
      banner.innerHTML = '🎉 ¡Tenés envío gratis!';
      banner.className = 'cart-free-banner free';
    } else {
      const falta = ENVIO_GRATIS_DESDE - subtotal;
      banner.innerHTML = `🚚 Te faltan <strong>${formatPrecio(falta)}</strong> para el envío gratis`;
      banner.className = 'cart-free-banner';
    }
  }

  // Si hay envío calculado y el subtotal supera el umbral → gratis
  const envioEsGratis = cpDestino && subtotal >= ENVIO_GRATIS_DESDE;
  const envioEfectivo = envioEsGratis ? 0 : costoEnvio;
  const total = subtotal + envioEfectivo;

  // Filas subtotal / envío
  const subRow    = document.getElementById('cartSubtotalRow');
  const envioRow  = document.getElementById('cartEnvioRow');
  const subEl     = document.getElementById('cartSubtotal');
  const envioLbl  = document.getElementById('cartEnvioLabel');
  const envioCost = document.getElementById('cartEnvioCosto');
  const cartNote  = document.getElementById('cartNote');

  if (cpDestino) {
    subRow.style.display = 'flex';
    envioRow.style.display = 'flex';
    subEl.textContent = formatPrecio(subtotal);
    if (envioEsGratis) {
      envioLbl.textContent  = `Envío a ${cpDestino}`;
      envioCost.textContent = '¡GRATIS!';
      envioRow.className    = 'cart-envio-row free-row';
    } else {
      envioLbl.textContent  = `Envío a ${cpDestino}`;
      envioCost.textContent = formatPrecio(envioEfectivo);
      envioRow.className    = 'cart-envio-row';
    }
    if (cartNote) cartNote.style.display = 'none';
  } else {
    subRow.style.display   = 'none';
    envioRow.style.display = 'none';
    if (cartNote) cartNote.style.display = '';
  }

  cartTotal.textContent = formatPrecio(total);

  // Si cambió el subtotal y había envío calculado, actualizar resultado visible
  if (cpDestino) {
    const resEl = document.getElementById('shippingResult');
    if (resEl) {
      if (subtotal >= ENVIO_GRATIS_DESDE) {
        resEl.textContent = '🎉 ¡Envío gratis! Tu compra supera los $40.000';
        resEl.className   = 'shipping-result free';
        costoEnvio        = 0;
      } else {
        // mantener el costo ya calculado, solo refrescar mensaje
        const zona = calcularZonaEnvio(cpDestino);
        if (zona) {
          costoEnvio        = zona.costo;
          resEl.textContent = `Envío a ${cpDestino}: ${formatPrecio(zona.costo)} (Correo Argentino)`;
          resEl.className   = 'shipping-result ok';
        }
      }
    }
  }

  carrito.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';

    const mediaHtml = item.imagen
      ? `<img src="${item.imagen}" alt="${item.nombre}" referrerpolicy="no-referrer"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
         <div class="cart-item-img-placeholder" style="display:none;">${item.icono} ${item.marca}</div>`
      : `<div class="cart-item-img-placeholder">${item.icono}</div>`;

    div.innerHTML = `
      <div class="cart-item-img">${mediaHtml}</div>
      <div class="cart-item-info">
        <div class="cart-item-marca">${item.marca}</div>
        <div class="cart-item-nombre">${item.nombre}</div>
        <div class="cart-item-precio">${formatPrecio(item.precio * item.cantidad)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-controls">
          <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Restar">−</button>
          <span class="qty-display">${item.cantidad}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Sumar">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">Eliminar</button>
      </div>`;

    div.querySelector('[data-action="dec"]').addEventListener('click', () => cambiarCantidad(item.id, -1));
    div.querySelector('[data-action="inc"]').addEventListener('click', () => cambiarCantidad(item.id, 1));
    div.querySelector('.cart-item-remove').addEventListener('click', () => eliminarDelCarrito(item.id));

    cartItems.appendChild(div);
  });
}

// Abrir / cerrar carrito
function abrirCarrito() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function cerrarCarrito() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', abrirCarrito);
cartClose.addEventListener('click', cerrarCarrito);
cartOverlay.addEventListener('click', cerrarCarrito);

// ===== MODAL PAGO =====
const modalOverlay   = document.getElementById('modalOverlay');
const modalPago      = document.getElementById('modalPago');
const modalClose     = document.getElementById('modalClose');
const modalOpciones  = document.getElementById('modalOpciones');
const modalMpPanel   = document.getElementById('modalMpPanel');
const modalBack      = document.getElementById('modalBack');
const btnElegirMP    = document.getElementById('btnElegirMP');
const btnElegirWA    = document.getElementById('btnElegirWA');
const btnCopiarAlias = document.getElementById('btnCopiarAlias');
const mpTotal        = document.getElementById('mpTotal');

function abrirModal() {
  const subtotal      = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envioEsGratis = cpDestino && subtotal >= ENVIO_GRATIS_DESDE;
  const envioEfectivo = envioEsGratis ? 0 : costoEnvio;
  const total         = subtotal + envioEfectivo;
  mpTotal.textContent = formatPrecio(total);
  const btnCompWA = document.getElementById('btnComprobanteWA');
  if (btnCompWA) btnCompWA.href = `https://wa.me/5491131782187?text=${encodeURIComponent(buildMensajePedido(true))}`;
  modalOpciones.style.display = 'flex';
  modalMpPanel.style.display  = 'none';
  modalOverlay.classList.add('open');
  modalPago.classList.add('open');
}

function cerrarModal() {
  modalOverlay.classList.remove('open');
  modalPago.classList.remove('open');
}

modalClose.addEventListener('click', cerrarModal);
modalOverlay.addEventListener('click', cerrarModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { cerrarModal(); cerrarCarrito(); }
});

btnElegirMP.addEventListener('click', () => {
  modalOpciones.style.display = 'none';
  modalMpPanel.style.display  = 'block';
});

modalBack.addEventListener('click', () => {
  modalMpPanel.style.display  = 'none';
  modalOpciones.style.display = 'flex';
});

// ===== WHATSAPP =====
function buildMensajePedido(conPago) {
  const subtotal      = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envioEsGratis = cpDestino && subtotal >= ENVIO_GRATIS_DESDE;
  const envioEfectivo = envioEsGratis ? 0 : costoEnvio;
  const total         = subtotal + envioEfectivo;
  const lineas        = carrito.map(i => `- ${i.cantidad}x ${i.nombre} - ${formatPrecio(i.precio * i.cantidad)}`).join('\n');
  const envioTexto    = !cpDestino ? 'A coordinar' : envioEsGratis ? 'GRATIS 🎉' : formatPrecio(envioEfectivo);
  const pagoLinea     = conPago ? '\n💳 Quiero pagar por WhatsApp / Mercado Pago' : '';
  return `Hola Valhalla Nutrition! 🛒 Quiero hacer el siguiente pedido:\n\n${lineas}\n\n💰 Subtotal: ${formatPrecio(subtotal)}\n🚚 Envío: ${envioTexto}\n💵 TOTAL: ${formatPrecio(total)}${pagoLinea}\n\n¿Cómo procedo con el pago?`;
}

// Registro de ventas en localStorage
function registrarVenta(medioPago) {
  const subtotal      = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envioEsGratis = cpDestino && subtotal >= ENVIO_GRATIS_DESDE;
  const envioEfectivo = envioEsGratis ? 0 : costoEnvio;
  const ahora         = new Date();
  const venta = {
    id:          ahora.getTime(),
    fechaISO:    ahora.toISOString(),
    fecha:       ahora.toLocaleDateString('es-AR'),
    hora:        ahora.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }),
    productos:   carrito.map(i => ({ id: i.id, nombre: i.nombre, marca: i.marca, cantidad: i.cantidad, precio: i.precio })),
    total:       subtotal,
    envio:       envioEfectivo,
    cpDestino:   cpDestino || null,
    medioPago,
    estado:      'Pendiente'
  };
  const ventas = JSON.parse(localStorage.getItem('valhallaVentas') || '[]');
  ventas.unshift(venta);
  localStorage.setItem('valhallaVentas', JSON.stringify(ventas));
}

btnCopiarAlias.addEventListener('click', () => {
  registrarVenta('Mercado Pago');
  navigator.clipboard.writeText('brunolionel').then(() => {
    const orig = btnCopiarAlias.innerHTML;
    btnCopiarAlias.textContent = '✓ Alias copiado';
    setTimeout(() => { btnCopiarAlias.innerHTML = orig; }, 2000);
  }).catch(() => mostrarToast('No se pudo copiar. Alias: brunolionel'));
});

btnElegirWA.addEventListener('click', () => {
  registrarVenta('WhatsApp');
  window.open(`https://wa.me/5491131782187?text=${encodeURIComponent(buildMensajePedido(false))}`, '_blank', 'noopener,noreferrer');
  cerrarModal();
});

// ===== ENVÍO =====
document.getElementById('btnCalcularEnvio').addEventListener('click', () => {
  const input  = document.getElementById('cpInput');
  const resEl  = document.getElementById('shippingResult');
  const cp     = input.value.trim();

  if (cp.length < 4 || isNaN(parseInt(cp, 10))) {
    resEl.textContent = 'Por favor ingresá un código postal válido';
    resEl.className   = 'shipping-result err';
    cpDestino = ''; costoEnvio = 0;
    actualizarCarrito();
    return;
  }

  const subtotal = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  cpDestino = cp;

  if (subtotal >= ENVIO_GRATIS_DESDE) {
    costoEnvio        = 0;
    resEl.textContent = '🎉 ¡Envío gratis! Tu compra supera los $40.000';
    resEl.className   = 'shipping-result free';
  } else {
    const zona = calcularZonaEnvio(cp);
    costoEnvio        = zona.costo;
    resEl.textContent = `Envío a ${cp}: ${formatPrecio(zona.costo)} (Correo Argentino)`;
    resEl.className   = 'shipping-result ok';
  }

  actualizarCarrito();
});

document.getElementById('cpInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('btnCalcularEnvio').click();
});

btnWhatsapp.addEventListener('click', () => {
  if (!carrito.length) return;
  abrirModal();
});

// Navbar hamburger
navHamburger.addEventListener('click', () => {
  navHamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Navbar dropdown productos
dropdownToggle.addEventListener('click', e => {
  e.stopPropagation();
  dropdownToggle.closest('.nav-dropdown').classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }
});

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    filtrarPorCategoria(item.dataset.cat);
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    navMenu.classList.remove('open');
    navHamburger.classList.remove('open');
  });
});

// Navbar search toggle
navSearchBtn.addEventListener('click', () => {
  navSearchBar.classList.toggle('open');
  if (navSearchBar.classList.contains('open')) {
    setTimeout(() => searchInput.focus(), 150);
  }
});

// Filtros pills
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  categoriaActiva = btn.dataset.cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  const cc = document.querySelector(`.cat-card[data-cat="${categoriaActiva}"]`);
  if (cc) cc.classList.add('active');
  renderProductos();
});

// Category cards
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => filtrarPorCategoria(card.dataset.cat));
});

// Footer category links
document.querySelectorAll('.footer-cat-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    filtrarPorCategoria(link.dataset.cat);
  });
});

// ===== BUSCADOR =====

searchInput.addEventListener('input', () => {
  busqueda = searchInput.value;
  searchClear.classList.toggle('visible', busqueda.length > 0);
  renderProductos();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  busqueda = '';
  searchClear.classList.remove('visible');
  searchInput.focus();
  renderProductos();
});

// Navbar scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Toast notification
let toastTimeout;
function mostrarToast(mensaje) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 2500);
}

// ===== INIT =====
actualizarContadores();
actualizarCarrito();
renderProductos();
