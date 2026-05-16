'use strict';

// ===== CONSTANTES =====
const PASS              = 'valhalla2024';
const ENVIO_GRATIS_DESDE = 40000;

// ===== PRODUCTOS (espejo de script.js — solo campos necesarios) =====
const PRODUCTOS = [
  { id: 1,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey 2lb - Chocolate',              categoria: 'proteinas',   precio: 55000, stock: 1  },
  { id: 2,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey 2lb - Frutilla',               categoria: 'proteinas',   precio: 55000, stock: 1  },
  { id: 3,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey 2lb - Vainilla',               categoria: 'proteinas',   precio: 55000, stock: 1  },
  { id: 4,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey 2lb - Banana',                 categoria: 'proteinas',   precio: 55000, stock: 1  },
  { id: 5,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey 2lb - Cookies',                categoria: 'proteinas',   precio: 55000, stock: 1  },
  { id: 6,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey DOYPACK - Chocolate',          categoria: 'proteinas',   precio: 52500, stock: 2  },
  { id: 7,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey DOYPACK - Vainilla',           categoria: 'proteinas',   precio: 52500, stock: 2  },
  { id: 8,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey DOYPACK - Frutilla',           categoria: 'proteinas',   precio: 52500, stock: 2  },
  { id: 9,  marca: 'STAR NUTRITION', nombre: 'Platinum Whey DOYPACK - Cookies',            categoria: 'proteinas',   precio: 52500, stock: 2  },
  { id: 10, marca: 'STAR NUTRITION', nombre: 'Platinum Whey DOYPACK - Banana',             categoria: 'proteinas',   precio: 52500, stock: 2  },
  { id: 11, marca: 'ENA',            nombre: '100% Whey Protein 2lb - Choc/Vainilla/Frutilla', categoria: 'proteinas', precio: 48000, stock: 3  },
  { id: 12, marca: 'MAX FORCE',      nombre: 'Whey Protein 910g - Vainilla/Chocolate/Frutilla', categoria: 'proteinas', precio: 25500, stock: 6  },
  { id: 13, marca: 'STAR NUTRITION', nombre: 'Creatina Monohidratada 150g',                categoria: 'creatinas',   precio: 16500, stock: 2  },
  { id: 14, marca: 'STAR NUTRITION', nombre: 'Creatina Monohidratada 300g Pote',           categoria: 'creatinas',   precio: 26500, stock: 3  },
  { id: 15, marca: 'STAR NUTRITION', nombre: 'Creatina Monohidratada 300g Doypack',        categoria: 'creatinas',   precio: 24900, stock: 3  },
  { id: 16, marca: 'BODY ADVANCE',   nombre: 'Creatina Monohidrato 300g Doypack',          categoria: 'creatinas',   precio: 20000, stock: 3  },
  { id: 17, marca: 'BODY ADVANCE',   nombre: 'Creatina Monohidrato 300g Pote',             categoria: 'creatinas',   precio: 20000, stock: 3  },
  { id: 18, marca: 'MAX FORCE',      nombre: 'Creatina Pura 250g',                         categoria: 'creatinas',   precio: 15000, stock: 4  },
  { id: 19, marca: 'AKER',           nombre: 'Creatina 300g',                              categoria: 'creatinas',   precio: 20000, stock: 10 },
  { id: 20, marca: 'ALMAFIT',        nombre: 'Creatina 300g',                              categoria: 'creatinas',   precio: 20000, stock: 6  },
  { id: 21, marca: 'MAX FORCE',      nombre: 'Colágeno 300g',                              categoria: 'colageno',    precio: 20000, stock: 4  },
  { id: 22, marca: 'ALMAFIT',        nombre: 'Colágeno',                                   categoria: 'colageno',    precio: 19500, stock: 5  },
  { id: 23, marca: 'ALMAFIT',        nombre: 'Pre Entreno',                                categoria: 'pre-entreno', precio: 20000, stock: 5  },
  { id: 24, marca: 'MAX FORCE',      nombre: 'Ripper Force 60 caps',                       categoria: 'pre-entreno', precio: 15000, stock: 2  },
  { id: 25, marca: 'STAR NUTRITION', nombre: 'Cafeína 200 - 30 caps',                      categoria: 'vitaminas',   precio: 10000, stock: 2  },
  { id: 26, marca: 'GENTECH',        nombre: 'ZMA Recovery 60 comp',                       categoria: 'vitaminas',   precio: 12500, stock: 1  },
  { id: 27, marca: 'MAX FORCE',      nombre: 'Multivitamínico 60 comp',                    categoria: 'vitaminas',   precio: 9500,  stock: 4  },
  { id: 28, marca: 'MAX FORCE',      nombre: 'Magnesio Citrato 150g',                      categoria: 'vitaminas',   precio: 9500,  stock: 4  },
  { id: 29, marca: 'ALMAFIT',        nombre: 'Omega 3',                                    categoria: 'vitaminas',   precio: 18700, stock: 5  },
  { id: 30, marca: 'BODY ADVANCE',   nombre: 'Creagline 150g (creatina+glutamina)',         categoria: 'vitaminas',   precio: 13900, stock: 3  },
  { id: 31, marca: 'AKER',           nombre: 'Pancakes Proteicos 400g',                    categoria: 'otros',       precio: 11900, stock: 6  },
];

const PROVEEDORES_DEFAULT = [
  { id: 1, nombre: 'VA SUPLE',  productos: 'Proteínas Star Nutrition',                    contacto: '', ultimaCompra: '', monto: 1000000 },
  { id: 2, nombre: 'AKER',      productos: 'Creatina, Pancakes',                          contacto: '', ultimaCompra: '', monto: 233700  },
  { id: 3, nombre: 'ALMA FIT',  productos: 'Creatina, Colágeno, Pre-entreno, Omega 3',    contacto: '', ultimaCompra: '', monto: 320510  },
  { id: 4, nombre: 'ENVIO',     productos: 'Gastos de envío',                             contacto: '', ultimaCompra: '', monto: 46500   },
];

const CAT_LABELS = {
  proteinas: 'Proteínas', creatinas: 'Creatinas', colageno: 'Colágeno',
  'pre-entreno': 'Pre-entreno', vitaminas: 'Vitaminas', otros: 'Otros'
};

// ===== UTILS =====
function formatPrecio(n) {
  return '$' + Number(n || 0).toLocaleString('es-AR');
}

// ===== STORAGE =====
function getVentas()       { return JSON.parse(localStorage.getItem('valhallaVentas')    || '[]'); }
function setVentas(v)      { localStorage.setItem('valhallaVentas', JSON.stringify(v)); }
function getStockOvr()     { return JSON.parse(localStorage.getItem('valhallaStock')     || '{}'); }
function setStockOvr(s)    { localStorage.setItem('valhallaStock', JSON.stringify(s)); }
function getProveedores() {
  const s = localStorage.getItem('valhallaProveedores');
  return s ? JSON.parse(s) : JSON.parse(JSON.stringify(PROVEEDORES_DEFAULT));
}
function setProveedores(p) { localStorage.setItem('valhallaProveedores', JSON.stringify(p)); }

// ===== LOGIN =====
function checkAuth() {
  localStorage.getItem('valhallaAuth') === 'true' ? showDashboard() : showLogin();
}

function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('dashboard').style.display   = 'none';
  document.getElementById('passInput').value           = '';
  document.getElementById('loginError').textContent    = '';
}

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashboard').style.display   = 'flex';
  navTo('resumen');
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  if (document.getElementById('passInput').value === PASS) {
    localStorage.setItem('valhallaAuth', 'true');
    showDashboard();
  } else {
    document.getElementById('loginError').textContent = 'Contraseña incorrecta';
    document.getElementById('passInput').select();
  }
});

function logout() { localStorage.removeItem('valhallaAuth'); showLogin(); }
document.getElementById('logoutBtn').addEventListener('click', logout);
document.getElementById('logoutBtnHeader').addEventListener('click', logout);

// ===== NAVEGACIÓN =====
const SECCIONES = ['resumen', 'ventas', 'stock', 'proveedores'];
const SEC_TITULOS = { resumen: 'Resumen', ventas: 'Ventas', stock: 'Stock', proveedores: 'Proveedores' };

function navTo(sec) {
  SECCIONES.forEach(s => {
    const el = document.getElementById('sec' + s.charAt(0).toUpperCase() + s.slice(1));
    if (el) el.style.display = s === sec ? 'block' : 'none';
  });
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.sec === sec);
  });
  document.getElementById('adminTitle').textContent = SEC_TITULOS[sec] || sec;
  closeSidebar();
  if (sec === 'resumen')     renderResumen();
  if (sec === 'ventas')      renderVentas();
  if (sec === 'stock')       renderStock();
  if (sec === 'proveedores') renderProveedores();
}

document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); navTo(el.dataset.sec); });
});

// Hamburger (mobile)
const sidebar        = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

document.getElementById('hamburgerAdmin').addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('open');
});
sidebarOverlay.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('open');
}

// ===== RESUMEN =====
function renderResumen() {
  const ventas = getVentas();
  const hoy    = new Date().toISOString().split('T')[0];
  const from   = getPeriodoFrom();

  const labelTotal   = periodoActual === 'semanal' ? 'Total esta semana'
                     : periodoActual === 'anual'    ? 'Total este año'
                     :                               'Total este mes';
  const labelPedidos = periodoActual === 'semanal' ? 'Pedidos esta semana'
                     : periodoActual === 'anual'    ? 'Pedidos este año'
                     :                               'Pedidos este mes';

  const ventasPeriodo = ventas.filter(v =>
    v.estado !== 'Cancelado' && v.fechaISO && new Date(v.fechaISO) >= from
  );
  const totalPeriodo   = ventasPeriodo.reduce((s, v) => s + (v.total || 0) + (v.envio || 0), 0);
  const pedidosPeriodo = ventasPeriodo.length;

  const canceladosHoy = ventas.filter(v =>
    v.estado === 'Cancelado' && v.fechaISO && v.fechaISO.startsWith(hoy)
  ).length;

  const conteo = {};
  ventas.filter(v => v.estado !== 'Cancelado').forEach(v => {
    (v.productos || []).forEach(p => {
      const key = p.nombre || 'Desconocido';
      conteo[key] = (conteo[key] || 0) + (p.cantidad || 1);
    });
  });
  const entries    = Object.entries(conteo).sort((a, b) => b[1] - a[1]);
  const masVendido = entries.length ? entries[0][0] : '—';

  document.getElementById('statLabelTotal').textContent   = labelTotal;
  document.getElementById('statLabelPedidos').textContent = labelPedidos;
  document.getElementById('statTotalHoy').textContent     = formatPrecio(totalPeriodo);
  document.getElementById('statPedidosHoy').textContent   = pedidosPeriodo;
  document.getElementById('statMasVendido').textContent   = masVendido;
  document.getElementById('statCancelados').textContent   = canceladosHoy;

  renderChart(ventas);
}

function renderChart(ventas) {
  const validas = ventas.filter(v => v.estado !== 'Cancelado');
  const now     = new Date();
  let puntos    = [];
  let titulo    = '';

  if (periodoActual === 'semanal') {
    titulo = 'Ventas — Últimos 7 días';
    for (let i = 6; i >= 0; i--) {
      const d   = new Date(now); d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      const tot = validas.filter(v => v.fechaISO && v.fechaISO.startsWith(key))
                         .reduce((s, v) => s + (v.total || 0) + (v.envio || 0), 0);
      puntos.push({ label: d.toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric' }), total: tot });
    }
  } else if (periodoActual === 'anual') {
    titulo = 'Ventas — 12 meses';
    const MESES = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    for (let m = 0; m < 12; m++) {
      const tot = validas.filter(v => {
        if (!v.fechaISO) return false;
        const d = new Date(v.fechaISO);
        return d.getFullYear() === now.getFullYear() && d.getMonth() === m;
      }).reduce((s, v) => s + (v.total || 0) + (v.envio || 0), 0);
      puntos.push({ label: MESES[m], total: tot });
    }
  } else {
    titulo = 'Ventas — Últimas 4 semanas';
    for (let i = 3; i >= 0; i--) {
      const wEnd   = new Date(now); wEnd.setDate(wEnd.getDate() - i * 7); wEnd.setHours(23,59,59,999);
      const wStart = new Date(wEnd); wStart.setDate(wStart.getDate() - 6); wStart.setHours(0,0,0,0);
      const tot    = validas.filter(v => {
        if (!v.fechaISO) return false;
        const d = new Date(v.fechaISO);
        return d >= wStart && d <= wEnd;
      }).reduce((s, v) => s + (v.total || 0) + (v.envio || 0), 0);
      const lbl = `${wStart.getDate()}/${wStart.getMonth()+1}–${wEnd.getDate()}/${wEnd.getMonth()+1}`;
      puntos.push({ label: lbl, total: tot });
    }
  }

  document.getElementById('chartTitle').textContent    = titulo;
  const maxTotal = Math.max(...puntos.map(p => p.total), 1);
  const hayDatos = puntos.some(p => p.total > 0);
  document.getElementById('chartEmpty').style.display  = hayDatos ? 'none' : 'block';

  document.getElementById('chartBars').innerHTML = puntos.map(({ label, total }) => {
    const pct     = Math.round((total / maxTotal) * 100);
    const isEmpty = total === 0;
    return `<div class="bar-col">
      <div class="bar-value">${total > 0 ? formatPrecio(total) : ''}</div>
      <div class="bar${isEmpty ? ' bar-empty' : ''}" style="height:${isEmpty ? 6 : pct}%"></div>
      <div class="bar-label">${label}</div>
    </div>`;
  }).join('');
}

// ===== VENTAS =====
let filtroFecha     = '';
let filtroEstado    = '';
let filtroMedioPago = '';
let periodoActual   = 'mensual';

function getPeriodoFrom() {
  const now = new Date();
  if (periodoActual === 'semanal') {
    const d = new Date(now); d.setDate(d.getDate() - 6); d.setHours(0,0,0,0); return d;
  }
  if (periodoActual === 'anual') return new Date(now.getFullYear(), 0, 1);
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

function getVentasFiltradas() {
  const from = getPeriodoFrom();
  let v = getVentas().filter(x => x.fechaISO && new Date(x.fechaISO) >= from);
  if (filtroFecha)     v = v.filter(x => x.fechaISO && x.fechaISO.startsWith(filtroFecha));
  if (filtroEstado)    v = v.filter(x => x.estado    === filtroEstado);
  if (filtroMedioPago) v = v.filter(x => x.medioPago === filtroMedioPago);
  return v;
}

function renderVentas() {
  const ventas   = getVentasFiltradas();
  const tbody    = document.getElementById('tbodyVentas');
  const emptyMsg = document.getElementById('ventasEmpty');

  if (!ventas.length) {
    tbody.innerHTML        = '';
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  tbody.innerHTML = ventas.map(v => {
    const prods       = (v.productos || []).map(p => `<div>${p.marca} — ${p.nombre} x${p.cantidad}</div>`).join('');
    const mpClass     = v.medioPago === 'WhatsApp' ? 'mp-wa' : 'mp-mp';
    const mpIcon      = v.medioPago === 'WhatsApp' ? '💬' : '💳';
    const totalFinal  = (v.total || 0) + (v.envio || 0);
    const envioText   = (v.envio || 0) > 0 ? formatPrecio(v.envio) : '🎁 Gratis';
    const est         = v.estado || 'Pendiente';
    const cancelado   = est === 'Cancelado';
    const rowClass    = cancelado ? 'venta-cancelada' : '';
    const totalHtml   = cancelado
      ? `<span class="total-cancelado">${formatPrecio(totalFinal)}</span><span class="badge-cancelado">CANCELADO</span>`
      : `<span style="color:var(--white);font-weight:700;">${formatPrecio(totalFinal)}</span>`;

    return `<tr class="${rowClass}">
      <td>${v.fecha || '—'}</td>
      <td>${v.hora  || '—'}</td>
      <td><div class="prod-list">${prods}</div></td>
      <td>${totalHtml}</td>
      <td>${envioText}</td>
      <td><span class="mp-badge ${mpClass}">${mpIcon} ${v.medioPago}</span></td>
      <td>
        <select class="estado-select st-${est}" data-id="${v.id}">
          <option value="Pendiente"  ${est === 'Pendiente'  ? 'selected' : ''}>🟡 Pendiente</option>
          <option value="Confirmado" ${est === 'Confirmado' ? 'selected' : ''}>🔵 Confirmado</option>
          <option value="Enviado"    ${est === 'Enviado'    ? 'selected' : ''}>🚚 Enviado</option>
          <option value="Entregado"  ${est === 'Entregado'  ? 'selected' : ''}>✅ Entregado</option>
          <option value="Cancelado"  ${est === 'Cancelado'  ? 'selected' : ''}>❌ Cancelado</option>
        </select>
      </td>
    </tr>`;
  }).join('');

  tbody.querySelectorAll('.estado-select').forEach(sel => {
    sel.addEventListener('change', () => {
      cambiarEstado(parseInt(sel.dataset.id), sel.value);
      renderVentas();
    });
  });
}

function cambiarEstado(id, estado) {
  const ventas = getVentas();
  const v      = ventas.find(x => x.id === id);
  if (v) { v.estado = estado; setVentas(ventas); }
}

// ===== EXPORTAR CSV =====
function exportarCSV() {
  const ventas = getVentasFiltradas();
  if (!ventas.length) { alert('No hay ventas para exportar.'); return; }

  const headers = ['Fecha', 'Hora', 'Productos', 'Subtotal', 'Envio', 'Total', 'CP Destino', 'Medio de pago', 'Estado'];
  const rows    = ventas.map(v => [
    v.fecha    || '',
    v.hora     || '',
    (v.productos || []).map(p => `${p.marca} ${p.nombre} x${p.cantidad}`).join(' | '),
    v.total    || 0,
    v.envio    || 0,
    (v.total   || 0) + (v.envio || 0),
    v.cpDestino || '',
    v.medioPago || '',
    v.estado    || ''
  ]);

  const csv  = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), {
    href: url,
    download: `valhalla-ventas-${new Date().toISOString().split('T')[0]}.csv`
  });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.getElementById('filtroFecha').addEventListener('change',     e => { filtroFecha     = e.target.value; renderVentas(); });
document.getElementById('filtroEstado').addEventListener('change',    e => { filtroEstado    = e.target.value; renderVentas(); });
document.getElementById('filtroMedioPago').addEventListener('change', e => { filtroMedioPago = e.target.value; renderVentas(); });

document.getElementById('btnLimpiarFiltros').addEventListener('click', () => {
  filtroFecha = filtroEstado = filtroMedioPago = '';
  document.getElementById('filtroFecha').value      = '';
  document.getElementById('filtroEstado').value     = '';
  document.getElementById('filtroMedioPago').value  = '';
  renderVentas();
});

document.querySelectorAll('.periodo-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    periodoActual = btn.dataset.periodo;
    document.querySelectorAll('.periodo-btn').forEach(b =>
      b.classList.toggle('active', b === btn)
    );
    renderVentas();
    if (document.getElementById('secResumen').style.display !== 'none') renderResumen();
  });
});

document.getElementById('btnExportarCSV').addEventListener('click', exportarCSV);

// ===== STOCK =====
function getProductosConStock() {
  const ovr = getStockOvr();
  return PRODUCTOS.map(p => ({
    ...p,
    stock: ovr[p.id] !== undefined ? ovr[p.id] : p.stock
  }));
}

function renderStock() {
  document.getElementById('tbodyStock').innerHTML = getProductosConStock().map(p => {
    const esCritico = p.stock <= 2;
    const esBajo    = !esCritico && p.stock <= 5;
    const rowClass  = esCritico ? 'tr-critical' : esBajo ? 'tr-low' : '';
    const numClass  = esCritico ? 'critical' : esBajo ? 'low' : 'ok';
    const alertHtml = esCritico
      ? `<div class="stock-alert critical">¡Sin stock pronto!</div>`
      : esBajo
        ? `<div class="stock-alert low">¡Poco stock!</div>`
        : '';

    return `<tr class="${rowClass}">
      <td style="color:var(--white)">${p.nombre}</td>
      <td>${p.marca}</td>
      <td>${CAT_LABELS[p.categoria] || p.categoria}</td>
      <td>${formatPrecio(p.precio)}</td>
      <td>
        <div class="stock-num ${numClass}">${p.stock}</div>
        ${alertHtml}
      </td>
      <td>
        <div class="qty-admin">
          <button data-id="${p.id}" data-delta="-1" aria-label="Restar">−</button>
          <button data-id="${p.id}" data-delta="1"  aria-label="Sumar">+</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('tbodyStock').querySelectorAll('.qty-admin button').forEach(btn => {
    btn.addEventListener('click', () => {
      editarStock(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
  });
}

function editarStock(id, delta) {
  const ovr  = getStockOvr();
  const prod = PRODUCTOS.find(p => p.id === id);
  const base = ovr[id] !== undefined ? ovr[id] : prod.stock;
  ovr[id]    = Math.max(0, base + delta);
  setStockOvr(ovr);
  renderStock();
}

// ===== PROVEEDORES =====
function renderProveedores() {
  const provs = getProveedores();
  document.getElementById('tbodyProveedores').innerHTML = provs.map(p => `<tr>
    <td style="color:var(--white);font-weight:700;">${p.nombre}</td>
    <td>${p.productos || '—'}</td>
    <td>${p.contacto || '—'}</td>
    <td>${p.ultimaCompra ? new Date(p.ultimaCompra + 'T00:00:00').toLocaleDateString('es-AR') : '—'}</td>
    <td style="color:var(--gold);font-weight:700;">${p.monto ? formatPrecio(p.monto) : '—'}</td>
    <td style="white-space:nowrap;">
      <button class="btn-table" data-prov-edit="${p.id}">Editar</button>
      <button class="btn-table danger" data-prov-del="${p.id}" style="margin-left:0.3rem;">Eliminar</button>
    </td>
  </tr>`).join('');

  document.getElementById('tbodyProveedores').querySelectorAll('[data-prov-edit]').forEach(btn => {
    btn.addEventListener('click', () => abrirModalProveedor(parseInt(btn.dataset.provEdit)));
  });
  document.getElementById('tbodyProveedores').querySelectorAll('[data-prov-del]').forEach(btn => {
    btn.addEventListener('click', () => eliminarProveedor(parseInt(btn.dataset.provDel)));
  });
}

// Modal proveedor
const provModal = document.getElementById('provModal');

function abrirModalProveedor(id) {
  const p = id ? getProveedores().find(x => x.id === id) : null;
  document.getElementById('provModalTitle').textContent    = p ? 'Editar proveedor' : 'Agregar proveedor';
  document.getElementById('provId').value                  = p ? p.id          : '';
  document.getElementById('provNombre').value              = p ? p.nombre      : '';
  document.getElementById('provProductos').value           = p ? p.productos   : '';
  document.getElementById('provContacto').value            = p ? p.contacto    : '';
  document.getElementById('provUltimaCompra').value        = p ? p.ultimaCompra : '';
  document.getElementById('provMonto').value               = p ? p.monto       : '';
  provModal.style.display = 'flex';
  document.getElementById('provNombre').focus();
}

function cerrarModalProveedor() { provModal.style.display = 'none'; }

document.getElementById('provCancelar').addEventListener('click', cerrarModalProveedor);
provModal.addEventListener('click', e => { if (e.target === provModal) cerrarModalProveedor(); });
document.getElementById('btnAgregarProveedor').addEventListener('click', () => abrirModalProveedor(null));

document.getElementById('provForm').addEventListener('submit', e => {
  e.preventDefault();
  const provs  = getProveedores();
  const idVal  = document.getElementById('provId').value;
  const data   = {
    id:           idVal ? parseInt(idVal) : Date.now(),
    nombre:       document.getElementById('provNombre').value.trim().toUpperCase(),
    productos:    document.getElementById('provProductos').value.trim(),
    contacto:     document.getElementById('provContacto').value.trim(),
    ultimaCompra: document.getElementById('provUltimaCompra').value,
    monto:        parseFloat(document.getElementById('provMonto').value) || 0,
  };
  if (idVal) {
    const idx = provs.findIndex(p => p.id === parseInt(idVal));
    if (idx !== -1) provs[idx] = data; else provs.push(data);
  } else {
    provs.push(data);
  }
  setProveedores(provs);
  cerrarModalProveedor();
  renderProveedores();
});

function eliminarProveedor(id) {
  if (!confirm('¿Eliminar este proveedor?')) return;
  setProveedores(getProveedores().filter(p => p.id !== id));
  renderProveedores();
}

// ===== INIT =====
checkAuth();
