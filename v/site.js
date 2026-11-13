// Site do produto Maree Hub (D122): idiomas, módulos, abas por perfil, menu do celular e entrada ao rolar.
// O idioma usa a mesma chave do app (maree.idioma), então a escolha vale nos dois.
(function () {
  'use strict';
  var CHAVE = 'maree.idioma';
  var WHATS = '5581997645359';

  var MODULOS = [
    { id: 'guia', cor: 'ciano', i: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>' },
    { id: 'loja', cor: 'rosa', i: '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>' },
    { id: 'hospedagem', cor: 'laranja', i: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3"/>' },
    { id: 'portaria', cor: 'roxo', i: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>' },
    { id: 'visitantes', cor: 'amarelo', i: '<path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/><path d="M3 7l9 4 9-4M12 11v10"/>' },
    { id: 'os', cor: 'laranja', i: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>' },
    { id: 'comunicados', cor: 'rosa', i: '<path d="M3 10v4h4l9 5V5l-9 5H3z"/><path d="M19 9a3 3 0 0 1 0 6"/>' },
    { id: 'documentos', cor: 'azul', i: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>' },
    { id: 'areas', cor: 'verde', i: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>' },
    { id: 'veiculos', cor: 'azul', i: '<path d="M5 16v-4l2-5h10l2 5v4H5z"/><path d="M5 16v3M19 16v3M8 13h.01M16 13h.01"/>' },
    { id: 'ocorrencias', cor: 'amarelo', i: '<path d="M4 19V5a2 2 0 0 1 2-2h13v14H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h13v-4"/>' },
    { id: 'materiais', cor: 'verde', i: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>' },
    { id: 'relatorios', cor: 'roxo', i: '<path d="M4 20V10M10 20V4M16 20v-7M3 20h18"/>' },
    { id: 'administradora', cor: 'ciano', i: '<path d="M4 21V5l8-2v18M12 8h8v13M3 21h18M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2"/>' },
    { id: 'preventiva', cor: 'verde', breve: true, i: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4M9 15l2 2 4-4"/>' },
    { id: 'canais', cor: 'azul', breve: true, i: '<path d="M4 12a8 8 0 0 1 14-5l2 2M20 4v5h-5M20 12a8 8 0 0 1-14 5l-2-2M4 20v-5h5"/>' }
  ];

  var T = {
    'pt-BR': {
      whats: 'Olá! Quero conhecer o Maree Hub.', breve: 'Em breve',
      'mod.guia': ['Guia do hóspede', 'Check-in online, regras, Wi-Fi e mapa da região num link só.'],
      'mod.loja': ['Loja', 'Produtos e serviços da casa vendidos direto ao hóspede e ao morador.'],
      'mod.hospedagem': ['Hospedagem', 'Reservas, anfitriões e proprietários organizados por unidade.'],
      'mod.portaria': ['Portaria', 'Chegadas, saídas e consulta rápida por nome, placa ou documento.'],
      'mod.visitantes': ['Visitantes e encomendas', 'Cadastro de visitas e aviso de encomenda para o morador.'],
      'mod.os': ['Ordens de serviço', 'Pedidos com prazo, responsável, fotos e aprovação.'],
      'mod.comunicados': ['Comunicados', 'Avisos para todos ou por bloco, com confirmação de leitura.'],
      'mod.documentos': ['Documentos', 'Atas, regimento e convenção para ler sem baixar.'],
      'mod.areas': ['Áreas comuns', 'Reservas de salão, churrasqueira e piscina com regras próprias.'],
      'mod.veiculos': ['Veículos', 'Placas por unidade e controle de vagas.'],
      'mod.ocorrencias': ['Livro de ocorrências', 'Registro digital, com histórico que não se perde.'],
      'mod.materiais': ['Materiais e fornecedores', 'Estoque, pedidos de compra e contatos de quem atende.'],
      'mod.relatorios': ['Relatórios', 'Ocupação, serviços e movimento para prestar contas.'],
      'mod.administradora': ['Administradora', 'Vários condomínios num painel só, com a sua marca.'],
      'mod.preventiva': ['Manutenção preventiva', 'Calendário anual, garantia e alerta antes do vencimento.'],
      'mod.canais': ['Channel manager', 'Calendário sincronizado com Booking e Airbnb.']
    },
    en: {
      whats: 'Hi! I would like to know more about Maree Hub.', breve: 'Coming soon',
      pular: 'Skip to content', assinatura: 'an Atlântico solution', idioma: 'Language',
      'm.solucoes': 'Solutions', 'm.modulos': 'Modules', 'm.guia': 'Guest guide', 'm.seguranca': 'Security', 'm.planos': 'Plans',
      entrar: 'Sign in', falar: 'Talk to us',
      'h.selo': 'An Atlântico solution', 'h.titulo': 'Your building and your rentals <span>in one place.</span>',
      'h.sub': 'Front desk, residents, guests, maintenance, documents and shop, all connected. On phone and computer, nothing to install.',
      'h.demo': 'See the demo', 'h.micro': 'The demo opens a sample building, no sign-up needed.',
      'f.1a': 'Running at Maré Alta', 'f.1b': 'Tamandaré, Pernambuco, Brazil', 'f.2a': 'Nothing to install', 'f.2b': 'opens in the browser and becomes an app on the phone',
      'f.3a': '3 languages', 'f.3b': 'Portuguese, English and Spanish', 'f.4a': 'Modular', 'f.4b': 'pay only for what you use',
      'p.selo': 'Who it is for', 'p.titulo': 'Everyone sees what they need', 'p.sub': 'One system, the right screen for each role.',
      'p.sindico': 'Building manager', 'p.morador': 'Resident', 'p.portaria': 'Front desk', 'p.hospede': 'Host and guest', 'p.manutencao': 'Maintenance',
      'p.ver': 'See the example →', 'p.verGuia': 'Open the sample guide →',
      'p.s.t': 'The whole building on one screen', 'p.s.1': 'Occupancy, guests in the house and pending check-ins as soon as you open it.',
      'p.s.2': 'Units, residents, notices, documents and common areas, all in one place.', 'p.s.3': 'Access profiles for the management company, board, front desk and staff.',
      'p.s.alt': 'Maree Hub building manager dashboard',
      'p.m.t': 'Residents get things done on their phone', 'p.m.1': 'Notices, packages, visitors and common area bookings.',
      'p.m.2': 'Open work orders and follow every step.', 'p.m.3': 'House rules and documents always at hand, no downloads.', 'p.m.alt': 'Resident area on the phone',
      'p.p.t': 'The front desk knows who comes and goes', 'p.p.1': 'Today\'s arrivals and departures, with online check-in already reviewed.',
      'p.p.2': 'Search by name, unit, plate or ID.', 'p.p.3': 'Visitors, vehicles, packages and incident log.', 'p.p.alt': 'Front desk screen',
      'p.h.t': 'Hosting without paper or repeated messages', 'p.h.1': 'Guests check in online and read the rules before arriving.',
      'p.h.2': 'Wi-Fi, door codes, local map and contacts in a single link.', 'p.h.3': 'Hosts follow bookings and the building gets everything ready.', 'p.h.alt': 'Guest guide on the phone',
      'p.o.t': 'Maintenance organized from request to delivery', 'p.o.1': 'Work orders on a board, with deadline, owner and photos.',
      'p.o.2': 'Approval flows and sign-off by the manager.', 'p.o.3': 'Materials and suppliers linked to each job.', 'p.o.alt': 'Work order board',
      'mo.selo': 'Modules', 'mo.titulo': 'Build the system your way', 'mo.sub': 'Start with the essentials and switch on new modules when you need them.',
      'g.selo': 'Guest guide', 'g.titulo': 'Every guest question answered before it is asked',
      'g.1': 'Online check-in with ID documents and privacy consent.', 'g.2': 'House and building rules, read and accepted.',
      'g.3': 'Wi-Fi, door codes and schedules, released at the right time.', 'g.4': 'Local map, emergency contacts and a shop with house products.', 'g.btn': 'Open the sample guide',
      'c.selo': 'We started at home', 'c.titulo': 'Born inside a real building',
      'c.texto': 'Maree Hub was created by Atlântico, which runs rentals and services at Condomínio Maré Alta in Tamandaré, Brazil. Every screen solves a problem we live every day: guests arriving unannounced, lost packages, forgotten maintenance, rules nobody read.',
      'c.link': 'Meet Atlântico →',
      's.selo': 'Security and privacy', 's.titulo': 'Your data, truly protected',
      's.1t': 'Everyone sees only their own', 's.1': 'Each building and company sees only its own data. The rule lives in the database, not just on screen.',
      's.2t': 'Two-step verification', 's.2': 'Admin access asks for the authenticator app code.',
      's.3t': 'Everything is logged', 's.3': 'Who did it, what changed and when, in a history that cannot be erased.',
      's.4t': 'Privacy by design', 's.4': 'Guest consent, versioned terms and data kept only as long as needed.',
      'pl.selo': 'Plans', 'pl.titulo': 'Pay only for the modules you use', 'pl.texto': 'Every building, management company or host is different. Tell us how yours works and we will put together the right proposal.', 'pl.btn': 'Request a proposal',
      'fi.titulo': 'Shall we organize your building?', 'fi.sub': 'See the system working now or talk to us directly.',
      'r.solucao': 'A solution by', 'r.produto': 'Product', 'r.contato': 'Contact', 'r.legal': 'Legal', 'r.termos': 'Terms of use', 'r.privacidade': 'Privacy policy',
      'mod.guia': ['Guest guide', 'Online check-in, rules, Wi-Fi and local map in a single link.'],
      'mod.loja': ['Shop', 'House products and services sold straight to guests and residents.'],
      'mod.hospedagem': ['Rentals', 'Bookings, hosts and owners organized by unit.'],
      'mod.portaria': ['Front desk', 'Arrivals, departures and quick search by name, plate or ID.'],
      'mod.visitantes': ['Visitors and packages', 'Visitor registration and package alerts for residents.'],
      'mod.os': ['Work orders', 'Requests with deadline, owner, photos and approval.'],
      'mod.comunicados': ['Notices', 'Messages to everyone or by block, with read receipts.'],
      'mod.documentos': ['Documents', 'Minutes, bylaws and rules to read without downloading.'],
      'mod.areas': ['Common areas', 'Bookings for party room, barbecue and pool with their own rules.'],
      'mod.veiculos': ['Vehicles', 'Plates per unit and parking control.'],
      'mod.ocorrencias': ['Incident log', 'Digital records with a history that never gets lost.'],
      'mod.materiais': ['Materials and suppliers', 'Stock, purchase orders and supplier contacts.'],
      'mod.relatorios': ['Reports', 'Occupancy, services and activity for accountability.'],
      'mod.administradora': ['Management company', 'Many buildings in one dashboard, with your brand.'],
      'mod.preventiva': ['Preventive maintenance', 'Yearly calendar, warranty and alerts before due dates.'],
      'mod.canais': ['Channel manager', 'Calendar synced with Booking and Airbnb.']
    },
    es: {
      whats: '¡Hola! Quiero conocer Maree Hub.', breve: 'Próximamente',
      pular: 'Ir al contenido', assinatura: 'una solución Atlântico', idioma: 'Idioma',
      'm.solucoes': 'Soluciones', 'm.modulos': 'Módulos', 'm.guia': 'Guía del huésped', 'm.seguranca': 'Seguridad', 'm.planos': 'Planes',
      entrar: 'Entrar', falar: 'Habla con nosotros',
      'h.selo': 'Una solución Atlântico', 'h.titulo': 'Tu condominio y tu hospedaje <span>en un solo lugar.</span>',
      'h.sub': 'Portería, residentes, huéspedes, mantenimiento, documentos y tienda, conectados. En el celular y en la computadora, sin instalar nada.',
      'h.demo': 'Ver demostración', 'h.micro': 'La demostración abre un condominio de ejemplo, sin registro.',
      'f.1a': 'En uso en Maré Alta', 'f.1b': 'Tamandaré, Pernambuco, Brasil', 'f.2a': 'Sin instalar', 'f.2b': 'abre en el navegador y se vuelve app en el celular',
      'f.3a': '3 idiomas', 'f.3b': 'portugués, inglés y español', 'f.4a': 'Por módulos', 'f.4b': 'contratas solo lo que usas',
      'p.selo': 'Para quién es', 'p.titulo': 'Cada persona ve lo que necesita', 'p.sub': 'El mismo sistema, con la pantalla correcta para cada perfil.',
      'p.sindico': 'Administrador', 'p.morador': 'Residente', 'p.portaria': 'Portería', 'p.hospede': 'Anfitrión y huésped', 'p.manutencao': 'Mantenimiento',
      'p.ver': 'Ver el ejemplo →', 'p.verGuia': 'Abrir la guía de ejemplo →',
      'p.s.t': 'Todo el condominio en una pantalla', 'p.s.1': 'Ocupación, huéspedes en casa y check-ins pendientes al abrir el panel.',
      'p.s.2': 'Unidades, residentes, avisos, documentos y áreas comunes, todo en un lugar.', 'p.s.3': 'Perfiles de acceso para administradora, consejo, portería y personal.',
      'p.s.alt': 'Panel del administrador en Maree Hub',
      'p.m.t': 'El residente resuelve desde el celular', 'p.m.1': 'Avisos, paquetes, visitas y reservas de áreas comunes.',
      'p.m.2': 'Abre órdenes de servicio y sigue cada etapa.', 'p.m.3': 'Reglas y documentos siempre a mano, sin descargar archivos.', 'p.m.alt': 'Área del residente en el celular',
      'p.p.t': 'La portería sabe quién llega y quién sale', 'p.p.1': 'Llegadas y salidas del día, con el check-in online ya revisado.',
      'p.p.2': 'Búsqueda por nombre, unidad, placa o documento.', 'p.p.3': 'Visitantes, vehículos, paquetes y libro de novedades.', 'p.p.alt': 'Pantalla de portería',
      'p.h.t': 'Hospedaje sin papel ni mensajes repetidos', 'p.h.1': 'El huésped hace el check-in online y lee las reglas antes de llegar.',
      'p.h.2': 'Wi-Fi, claves, mapa de la zona y contactos en un solo enlace.', 'p.h.3': 'El anfitrión sigue las reservas y el condominio recibe todo listo.', 'p.h.alt': 'Guía del huésped en el celular',
      'p.o.t': 'Mantenimiento organizado, del pedido a la entrega', 'p.o.1': 'Órdenes de servicio en tablero, con plazo, responsable y fotos.',
      'p.o.2': 'Flujos de aprobación y validación por el administrador.', 'p.o.3': 'Materiales y proveedores vinculados a cada servicio.', 'p.o.alt': 'Tablero de órdenes de servicio',
      'mo.selo': 'Módulos', 'mo.titulo': 'Arma el sistema a tu manera', 'mo.sub': 'Empieza por lo esencial y activa nuevos módulos cuando los necesites.',
      'g.selo': 'Guía del huésped', 'g.titulo': 'Todo lo que el huésped pregunta, respondido antes de la pregunta',
      'g.1': 'Check-in online con documentos y consentimiento de privacidad.', 'g.2': 'Reglas de la casa y del condominio, leídas y aceptadas.',
      'g.3': 'Wi-Fi, claves de acceso y horarios, liberados en el momento justo.', 'g.4': 'Mapa de la zona, contactos de emergencia y tienda con productos de la casa.', 'g.btn': 'Abrir la guía de ejemplo',
      'c.selo': 'Empezamos en casa', 'c.titulo': 'Nació dentro de un condominio real',
      'c.texto': 'Maree Hub fue creado por Atlântico, que gestiona hospedaje y servicios en el Condominio Maré Alta, en Tamandaré (Brasil). Cada pantalla resuelve un problema que vivimos a diario: huésped que llega sin aviso, paquete perdido, mantenimiento olvidado, regla que nadie leyó.',
      'c.link': 'Conoce Atlântico →',
      's.selo': 'Seguridad y privacidad', 's.titulo': 'Tus datos protegidos de verdad',
      's.1t': 'Cada uno ve solo lo suyo', 's.1': 'Cada condominio y cada empresa ve solo sus propios datos. La regla está en la base de datos, no solo en la pantalla.',
      's.2t': 'Verificación en dos pasos', 's.2': 'Los accesos administrativos piden el código de la app autenticadora.',
      's.3t': 'Todo queda registrado', 's.3': 'Quién lo hizo, qué cambió y cuándo, en un historial que no se puede borrar.',
      's.4t': 'Privacidad desde el inicio', 's.4': 'Consentimiento del huésped, términos versionados y datos guardados solo el tiempo necesario.',
      'pl.selo': 'Planes', 'pl.titulo': 'Pagas solo por los módulos que usas', 'pl.texto': 'Cada condominio, administradora o anfitrión es distinto. Cuéntanos cómo funciona el tuyo y armamos la propuesta correcta.', 'pl.btn': 'Pedir una propuesta',
      'fi.titulo': '¿Organizamos tu condominio?', 'fi.sub': 'Mira el sistema funcionando ahora o habla directo con nosotros.',
      'r.solucao': 'Una solución de', 'r.produto': 'Producto', 'r.contato': 'Contacto', 'r.legal': 'Legal', 'r.termos': 'Términos de uso', 'r.privacidade': 'Política de privacidad',
      'mod.guia': ['Guía del huésped', 'Check-in online, reglas, Wi-Fi y mapa de la zona en un solo enlace.'],
      'mod.loja': ['Tienda', 'Productos y servicios de la casa vendidos directo al huésped y al residente.'],
      'mod.hospedagem': ['Hospedaje', 'Reservas, anfitriones y propietarios organizados por unidad.'],
      'mod.portaria': ['Portería', 'Llegadas, salidas y búsqueda rápida por nombre, placa o documento.'],
      'mod.visitantes': ['Visitas y paquetes', 'Registro de visitas y aviso de paquete al residente.'],
      'mod.os': ['Órdenes de servicio', 'Pedidos con plazo, responsable, fotos y aprobación.'],
      'mod.comunicados': ['Avisos', 'Mensajes para todos o por bloque, con confirmación de lectura.'],
      'mod.documentos': ['Documentos', 'Actas, reglamento y estatuto para leer sin descargar.'],
      'mod.areas': ['Áreas comunes', 'Reservas de salón, parrilla y piscina con reglas propias.'],
      'mod.veiculos': ['Vehículos', 'Placas por unidad y control de estacionamiento.'],
      'mod.ocorrencias': ['Libro de novedades', 'Registro digital, con historial que no se pierde.'],
      'mod.materiais': ['Materiales y proveedores', 'Stock, órdenes de compra y contactos de proveedores.'],
      'mod.relatorios': ['Informes', 'Ocupación, servicios y movimiento para rendir cuentas.'],
      'mod.administradora': ['Administradora', 'Varios condominios en un solo panel, con tu marca.'],
      'mod.preventiva': ['Mantenimiento preventivo', 'Calendario anual, garantía y alerta antes del vencimiento.'],
      'mod.canais': ['Channel manager', 'Calendario sincronizado con Booking y Airbnb.']
    }
  };

  document.documentElement.classList.remove('sem-js');

  // Português original da página, para voltar a ele depois de trocar o idioma.
  var original = {};
  var alts = {};
  document.querySelectorAll('[data-t]').forEach(function (el) { var k = el.getAttribute('data-t'); if (!(k in original)) original[k] = el.innerHTML; });
  document.querySelectorAll('[data-t-alt]').forEach(function (el) { alts[el.getAttribute('data-t-alt')] = el.getAttribute('alt'); });

  function escolhido() {
    try { var s = localStorage.getItem(CHAVE); if (s === 'pt-BR' || s === 'en' || s === 'es') return s; } catch (e) { /* sem armazenamento */ }
    var n = (navigator.language || 'pt').toLowerCase();
    return n.indexOf('en') === 0 ? 'en' : n.indexOf('es') === 0 ? 'es' : 'pt-BR';
  }

  function montarModulos(lang) {
    var d = T[lang], grade = document.getElementById('gradeModulos');
    grade.innerHTML = MODULOS.map(function (m) {
      var tx = d['mod.' + m.id];
      return '<article class="modulo revelar visivel"><div class="icone" style="background:color-mix(in srgb,var(--' + m.cor + ') 14%,transparent);color:var(--' + m.cor + ')">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + m.i + '</svg></div>' +
        '<h3>' + tx[0] + (m.breve ? ' <span class="breve">' + d.breve + '</span>' : '') + '</h3><p>' + tx[1] + '</p></article>';
    }).join('');
  }

  function aplicar(lang) {
    var d = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var k = el.getAttribute('data-t');
      el.innerHTML = lang === 'pt-BR' ? original[k] : (d[k] != null ? d[k] : original[k]);
    });
    document.querySelectorAll('[data-t-alt]').forEach(function (el) {
      var k = el.getAttribute('data-t-alt');
      el.setAttribute('alt', lang === 'pt-BR' ? alts[k] : (d[k] || alts[k]));
    });
    document.querySelectorAll('a[data-whats]').forEach(function (a) { a.href = 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(d.whats); });
    montarModulos(lang);
    document.getElementById('idioma').value = lang;
  }

  var sel = document.getElementById('idioma');
  sel.addEventListener('change', function () {
    try { localStorage.setItem(CHAVE, sel.value); } catch (e) { /* vale só nesta visita */ }
    aplicar(sel.value);
  });
  aplicar(escolhido());

  // Abas por perfil (padrão de abas acessível: setas trocam de aba).
  var abas = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function ativar(aba, foco) {
    abas.forEach(function (b) {
      var sim = b === aba;
      b.setAttribute('aria-selected', sim ? 'true' : 'false');
      b.tabIndex = sim ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !sim;
    });
    if (foco) aba.focus();
    aba.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  abas.forEach(function (b, i) {
    b.addEventListener('click', function () { ativar(b); });
    b.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? abas.length - 1 : null;
      if (n === null) return;
      e.preventDefault();
      ativar(abas[(n + abas.length) % abas.length], true);
    });
  });

  // Menu do celular.
  var botao = document.getElementById('abrirMenu'), menu = document.getElementById('menu');
  function fechar() { menu.classList.remove('aberto'); botao.setAttribute('aria-expanded', 'false'); }
  botao.addEventListener('click', function () {
    var abrir = !menu.classList.contains('aberto');
    menu.classList.toggle('aberto', abrir);
    botao.setAttribute('aria-expanded', abrir ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') fechar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });

  // Linha sob o topo ao rolar.
  var topo = document.getElementById('topo');
  var marcar = function () { topo.classList.toggle('rolou', window.scrollY > 8); };
  window.addEventListener('scroll', marcar, { passive: true });
  marcar();

  // Entrada suave ao rolar.
  var itens = document.querySelectorAll('.revelar:not(.visivel)');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    itens.forEach(function (el) { obs.observe(el); });
  } else {
    itens.forEach(function (el) { el.classList.add('visivel'); });
  }

  document.getElementById('ano').textContent = String(new Date().getFullYear());
})();
