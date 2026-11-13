// Site do produto Maree Hub (D122, revisão 4): idiomas, menu "Plataforma", abas das operações, WhatsApp com mensagem por botão,
// cópia do Wi-Fi no celular de exemplo e entrada suave ao rolar. O idioma usa a mesma chave do app (maree.idioma).
(function () {
  'use strict';
  var CHAVE = 'maree.idioma';
  var WHATS = '5581997645359';

  // Mensagem que já chega escrita no WhatsApp, conforme o botão tocado.
  var MSG = {
    'pt-BR': {
      comercial: 'Olá! Vim pelo site do Maree Hub e quero entender como ele funciona na minha operação.',
      vendas: 'Olá! Quero falar com vendas sobre o Maree Hub para a minha operação.',
      final: 'Olá! Quero transformar a gestão da minha operação com o Maree Hub. Podemos conversar?',
      flutuante: 'Olá! Estou no site do Maree Hub e tenho uma dúvida.',
      'd-cond': 'Olá! Quero uma demonstração do Maree Hub para o meu condomínio: portaria, áreas comuns e moradores.',
      'd-flat': 'Olá! Quero uma demonstração do Maree Hub para flats por temporada: reservas, check-in e limpeza.',
      'd-guia': 'Olá! Quero ver o guia digital do hóspede funcionando nos meus apartamentos.',
      'd-port': 'Olá! Quero uma demonstração da portaria do Maree Hub, com check-in integrado.',
      p1: 'Olá! Vi o plano Condomínio a partir de R$ 197/mês e quero uma proposta para o meu condomínio.',
      p2: 'Olá! Vi o plano Flats & Short-Stay a partir de R$ 247/mês e quero uma proposta para os meus flats.',
      p3: 'Olá! Quero montar uma proposta do Ecossistema Completo para a minha administradora.',
      copiado: 'Senha copiada (é só um exemplo)'
    },
    en: {
      comercial: 'Hi! I found Maree Hub on the website and want to understand how it works for my operation.',
      vendas: 'Hi! I want to talk to sales about Maree Hub for my operation.',
      final: 'Hi! I want to transform my operation with Maree Hub. Can we talk?',
      flutuante: 'Hi! I am on the Maree Hub website and have a question.',
      'd-cond': 'Hi! I would like a Maree Hub demo for my building: front desk, common areas and residents.',
      'd-flat': 'Hi! I would like a Maree Hub demo for short-stay flats: bookings, check-in and cleaning.',
      'd-guia': 'Hi! I would like to see the digital guest guide working in my apartments.',
      'd-port': 'Hi! I would like a demo of the Maree Hub front desk with integrated check-in.',
      p1: 'Hi! I saw the Building plan from R$ 197/month and would like a proposal for my building.',
      p2: 'Hi! I saw the Flats & Short-Stay plan from R$ 247/month and would like a proposal for my flats.',
      p3: 'Hi! I would like a Complete Ecosystem proposal for my management company.',
      copiado: 'Password copied (just an example)'
    },
    es: {
      comercial: '¡Hola! Vi Maree Hub en el sitio y quiero entender cómo funciona en mi operación.',
      vendas: '¡Hola! Quiero hablar con ventas sobre Maree Hub para mi operación.',
      final: '¡Hola! Quiero transformar la gestión de mi operación con Maree Hub. ¿Hablamos?',
      flutuante: '¡Hola! Estoy en el sitio de Maree Hub y tengo una duda.',
      'd-cond': '¡Hola! Quiero una demostración de Maree Hub para mi condominio: portería, áreas comunes y residentes.',
      'd-flat': '¡Hola! Quiero una demostración de Maree Hub para flats por temporada: reservas, check-in y limpieza.',
      'd-guia': '¡Hola! Quiero ver la guía digital del huésped funcionando en mis apartamentos.',
      'd-port': '¡Hola! Quiero una demostración de la portería de Maree Hub con check-in integrado.',
      p1: '¡Hola! Vi el plan Condominio desde R$ 197/mes y quiero una propuesta para mi condominio.',
      p2: '¡Hola! Vi el plan Flats & Short-Stay desde R$ 247/mes y quiero una propuesta para mis flats.',
      p3: '¡Hola! Quiero armar una propuesta del Ecosistema Completo para mi administradora.',
      copiado: 'Contraseña copiada (es solo un ejemplo)'
    }
  };

  var T = {
    en: {
      pular: 'Skip to content', assinatura: 'an Atlântico solution', idioma: 'Language', entrar: 'Sign in', vendas: 'Talk to sales',
      'm.plataforma': 'Platform', 'm.cond': 'Buildings', 'm.condD': 'Front desk, common areas and residents', 'm.flats': 'Flats &amp; Short-stay', 'm.flatsD': 'Bookings, check-in and cleaning',
      'm.flatsCurto': 'Short-stay flats', 'm.guia': 'Guest Guide', 'm.guiaD': 'The whole stay in one link', 'm.port': 'Front desk &amp; Security', 'm.portD': 'Who comes in and out, in real time', 'm.planos': 'Plans',
      'h.titulo': 'You manage.<br><span class="grad">The system automates.</span>', 'h.sub': 'One visual platform where building managers, flat operators and guests work in sync, from the front desk to check-out.',
      'h.cta': 'Talk to sales on WhatsApp', 'h.m1': 'Guided onboarding', 'h.m2': 'Human support', 'h.m3': 'Free demo',
      'q.titulo': 'Operations board', 'q.hoje': 'today', 'q.v1': 'Board', 'q.v2': 'Calendar', 'q.v3': 'Dashboard', 'q.g1': 'Arriving today', 'q.c1': 'Unit', 'q.c2': 'Guest', 'q.c3': 'Check-in', 'q.c4': 'Cleaning', 'q.c5': 'Ready',
      'q.g2': 'Building', 'q.r1': 'Block A lobby', 'q.r1b': 'Light bulb replacement', 'q.r2': 'Party room', 'q.r2b': 'Booked by A · 302', 'q.r3': 'All residents', 'q.r3b': 'Pool maintenance',
      'st.liberado': 'Check-in released', 'st.limpo': 'Cleaning done', 'st.pendente': 'Check-in pending', 'st.limpando': 'Cleaning', 'st.docs': 'Documents sent', 'st.execucao': 'In progress',
      'st.aprovada': 'Booking approved', 'st.sabado': 'Saturday', 'st.enviado': 'Notice sent', 'st.lido': '86% read', 'st.analise': 'Under review', 'st.manut': 'Under maintenance',
      'g.ola': 'Hi,', 'g.copiar': 'Copy password', 'g.regras': 'Rules', 'g.regiao': 'Area', 'g.aparelhos': 'Appliances', 'g.mares': 'Tides', 'g.loja': 'Shop', 'g.emerg': 'Emergency',
      'g.dica': 'Local tip', 'g.dicaT': 'Carneiros Beach · 15 min', 'g.dicaS': 'Best at low tide, 10:42 am',
      'p.titulo': 'Born inside a real building and running at Condomínio Maré Alta, in Tamandaré, Brazil',
      'p.1': 'operations in one system', 'p.2': 'apps for guests to install', 'p.3': 'languages in the guide and dashboard', 'p.4': 'guide online for guests, no one needs to answer',
      't.titulo': 'One platform for every operation', 't.sub': 'Choose where to start. Everything talks to everything.',
      demo: 'Request a demo', exemplo: 'or open the example now', exemploGuia: 'or open the sample guide',
      'a1.t': 'The whole building on one screen', 'a1.1': 'Access control with guests, visitors, vehicles and packages', 'a1.2': 'Common area bookings with rules, hours and approval',
      'a1.3': 'Notices and documents residents read without downloading', 'a1.4': 'Delinquency, fines and warnings tracking', 'a1.5': 'Incident log and work orders with deadline and owner',
      'a1.k1': 'Occupancy today', 'a1.k2': 'Packages', 'a1.k2s': 'waiting for pickup', 'a1.k3': 'Work orders', 'a1.k3s': '2 overdue', 'a1.areas': 'Common areas · this week',
      'a1.l1': 'Party room', 'a1.l2': 'Barbecue', 'a1.l3': 'Pool', 'a1.l3b': 'Everyone',
      'a2.t': 'Short-stay without spreadsheets or rush', 'a2.1': 'Unified calendar: Booking, Airbnb and Vrbo via iCal, and Stays with guest details',
      'a2.2': 'Automatic online check-in with ID documents and privacy consent', 'a2.3': 'Cleaning and linen organized as work orders for the team',
      'a2.4': 'Front desk gets the arrivals list without anyone calling', 'a2.5': 'Owners follow the stays at their property', 'a2.limp': 'Cleaning', 'a2.direto': 'Direct · Roberto', 'a2.dir': 'Direct',
      'a3.t': 'The concierge in your guest\'s pocket', 'a3.1': 'Opens by link or QR Code, no app to install', 'a3.2': 'Wi-Fi password copied with one tap',
      'a3.3': 'Appliance manuals and building rules', 'a3.4': 'Area map with local tips, tides and emergency contacts', 'a3.5': 'House shop: beach kit, extra linen and services',
      'a3.m1': 'One tap to copy', 'a3.m2': 'Read and accepted', 'a3.m3': 'How to use each one', 'a3.m4': 'Beaches and restaurants', 'a3.m5': 'Today\'s tide table', 'a3.m6': 'Extra items', 'a3.m7': 'Useful contacts', 'a3.m8': 'Step by step',
      'a4.t': 'The front desk knows who it is before they arrive', 'a4.1': 'Today\'s arrivals and departures, with online check-in already reviewed', 'a4.2': 'Search by name, unit, plate or ID',
      'a4.3': 'Guests, visitors and approved service providers in one place', 'a4.4': 'Entry logged with one tap and a digital incident log',
      'a4.busca': 'Search by name, unit, plate or ID', 'a4.p1': 'arrives at 2 pm · 1 vehicle', 'a4.p2': 'Air conditioning · WO #42', 'a4.p3': 'online check-in done',
      'a4.hosp': 'Guest', 'a4.prest': 'Provider', 'a4.conf': 'Verified', 'a4.entrada': 'Log entry', 'a4.dentro': 'In the house',
      'c.1t': 'Automatic notices', 'c.1': 'Guests get stay notices on their phone and residents get building notices, without anyone sending messages one by one.',
      'c.2t': 'Instant reports', 'c.2': 'Occupancy, arrivals, services and incidents for the period, ready for accountability and to download as spreadsheets.',
      'c.3t': '5-star experience', 'c.3': 'Guests arrive knowing everything, find answers on their own and are invited to review at the end of the stay.',
      'pl.titulo': 'Plans tailored to your operation', 'pl.sub': 'Pay only for the modules you use. The proposal comes through WhatsApp, no forms, no commitment.',
      'pl.1e': 'Building', 'pl.1n': 'Building', 'pl.1p': 'For managers and buildings that want an organized front desk and communication.', 'pl.consulta': 'Upon request',
      'pl.1.1': 'Front desk and access control', 'pl.1.2': 'Visitors, vehicles and packages', 'pl.1.3': 'Notices, documents and incidents', 'pl.1.4': 'Common area bookings', 'pl.1.5': 'Resident area on the phone',
      'pl.quero': 'I want this plan', 'pl.fita': 'Recommended', 'pl.2e': 'Short-stay', 'pl.2n': 'Flats &amp; Short-Stay', 'pl.2p': 'For hosts and flat operators who live on bookings.',
      'pl.2.1': 'Bookings and online check-in', 'pl.2.2': 'Guest guide by link and QR Code', 'pl.2.3': 'Booking, Airbnb, Vrbo and Stays calendars', 'pl.2.4': 'House shop and linen requests', 'pl.2.5': 'Cleaning and maintenance as work orders',
      'pl.3e': 'All together', 'pl.3n': 'Complete Ecosystem', 'pl.3p': 'For management companies with several buildings and short-stay operations.',
      'pl.3.1': 'Everything in Building and Flats', 'pl.3.2': 'Many buildings in one dashboard', 'pl.3.3': 'Your brand on the dashboard and guide', 'pl.3.4': 'Team access profiles and reports', 'pl.3.5': 'Guided onboarding',
      'f.titulo': 'Frequently asked questions',
      'f.1p': 'Does it integrate with Airbnb and Booking?', 'f.1r': 'Yes. Booking, Airbnb and Vrbo reservations come in through each listing\'s iCal calendar, and the Stays integration also brings guest details. Sending rates and availability to the channels (a full channel manager) is in development.',
      'f.2p': 'How does the front desk team learn it?', 'f.2r': 'The front desk screen was designed to be used without a manual: today\'s arrivals, search by name, plate or ID and one tap to log entry. During onboarding we train the team and stay with them in the first days.',
      'f.3p': 'Do I have to type everything again?', 'f.3r': 'No. Units come in from a spreadsheet, reservations arrive through connected calendars and residents complete their own profile from the invitation.',
      'f.4p': 'How does support work?', 'f.4r': 'Through WhatsApp, with real people: the Atlântico team, who use the system every day at Condomínio Maré Alta.',
      'f.5p': 'Do guests need to download an app?', 'f.5r': 'No. The guide opens in the phone browser, by link or QR Code, in Portuguese, English or Spanish.',
      'f.6p': 'Can I subscribe to just one part?', 'f.6r': 'Yes. The system is sold by modules: start with what solves your problem today and switch on the rest whenever you want.',
      'f.7p': 'Is my data safe?', 'f.7r': 'Each building and company only sees its own data, enforced in the database. Admin access requires two-step verification, everything is logged and guests sign the privacy consent.',
      'fi.titulo': 'Ready to transform your management?', 'fi.sub': 'Building manager, management company or host: talk to us and see the system working with your operation.',
      'fi.cta': 'Start a WhatsApp conversation', 'fi.demo': 'or try the sample system now',
      'r.solucao': 'A solution by', 'r.produto': 'Product', 'r.contato': 'Contact', 'r.legal': 'Legal', 'r.termos': 'Terms of use', 'r.privacidade': 'Privacy policy', flut: 'Sales on WhatsApp',
      'h.badge': 'All-in-one system for buildings and short-stay', 'q.v3': 'Dashboards', 'k.1': 'Arrivals today', 'k.2': 'Online check-in', 'k.3': 'Cleanings', 'k.3s': 'in progress', 'k.4': 'Open requests',
      'p.titulo': 'Born inside a real building, in Tamandaré, Brazil', 'p.4': 'guide online, no one needs to answer',
      'caso.selo': 'Case study', 'caso.titulo': 'Condomínio Maré Alta · Tamandaré (PE)', 'caso.texto': 'This is where Maree Hub runs every day. Atlântico manages short-stay flats inside the building, and the system was born to solve the real routine of hosting guests in a building with residents.',
      'caso.1t': 'Front desk', 'caso.1': 'gets the guest list with online check-in already reviewed, instead of a sheet of paper at the counter',
      'caso.2t': 'Hosts', 'caso.2': 'send a single link, and guests find Wi-Fi, rules and local tips without asking',
      'caso.3t': 'Building manager', 'caso.3': 'follows occupancy, work orders and notices on one dashboard',
      'a2.3': 'Cleaning and linen schedule as work orders for the team', 'a2.escala': 'Cleaning schedule · today', 'st.agendada': 'Scheduled',
      'a3.4': 'Tamandaré guide with beaches, tides and emergency contacts', 'a3.cab': 'Stay guide', 'a3.regras': 'House rules', 'a3.r1': 'Quiet after 10 pm', 'a3.r2': 'No smoking in the apartment', 'a3.r3': 'Check-out by 11 am',
      'a3.roteiro': 'Things to do in Tamandaré', 'a3.mare': 'Low tide today', 'a3.chip': 'Check-in completed', 'a3.chipS': 'codes released at 2 pm',
      'c.titulo': 'Why Maree Hub works in real operations', 'c.sub': 'Built by people who host guests and run a building every day.',
      'ad.titulo': 'From operational chaos to autopilot', 'ad.sub': 'If the left column sounds familiar, the right one is what changes in the first week.',
      'ad.sem': 'Without Maree Hub', 'ad.semT': 'Operational chaos', 'ad.s1': 'Parallel spreadsheets nobody updates', 'ad.s2': 'A lost front desk, with guests arriving unregistered', 'ad.s3': 'The same Wi-Fi and rules questions on WhatsApp, every booking', 'ad.s4': 'Forgotten cleaning and guests waiting for the apartment',
      'ad.com': 'With Maree Hub', 'ad.comT': 'Operation on autopilot', 'ad.c1': 'Online check-in integrated with the front desk', 'ad.c2': 'Digital guide delivered to guests in one link', 'ad.c3': 'Cleaning team triggered by work orders, with status', 'ad.c4': 'Building manager in full control on one dashboard',
      'pl.titulo': 'Clear plans, tailored proposal', 'pl.sub': 'Start with the plan for your operation. The final price depends on the number of units and comes through WhatsApp, no forms.',
      'pl.apartir': 'From', 'pl.mes': '/month', 'pl.medida': 'Tailored', 'pl.proposta': 'Build my proposal', 'pl.nota': 'Guided onboarding and team training in every plan.'
    },
    es: {
      pular: 'Ir al contenido', assinatura: 'una solución Atlântico', idioma: 'Idioma', entrar: 'Entrar', vendas: 'Hablar con ventas',
      'm.plataforma': 'Plataforma', 'm.cond': 'Condominios', 'm.condD': 'Portería, áreas comunes y residentes', 'm.flats': 'Flats y Temporada', 'm.flatsD': 'Reservas, check-in y limpieza',
      'm.flatsCurto': 'Flats por temporada', 'm.guia': 'Guía del Huésped', 'm.guiaD': 'Toda la estadía en un enlace', 'm.port': 'Portería y Seguridad', 'm.portD': 'Quién entra y quién sale, al instante', 'm.planos': 'Planes',
      'h.titulo': 'Tú gestionas.<br><span class="grad">El sistema automatiza.</span>', 'h.sub': 'Una plataforma única y visual donde administradores, gestores de flats y huéspedes operan en sintonía, de la portería al check-out.',
      'h.cta': 'Hablar con ventas por WhatsApp', 'h.m1': 'Implementación guiada', 'h.m2': 'Soporte humano', 'h.m3': 'Demostración gratuita',
      'q.titulo': 'Tablero de operaciones', 'q.hoje': 'hoy', 'q.v1': 'Tablero', 'q.v2': 'Calendario', 'q.v3': 'Panel', 'q.g1': 'Llegadas de hoy', 'q.c1': 'Unidad', 'q.c2': 'Huésped', 'q.c3': 'Check-in', 'q.c4': 'Limpieza', 'q.c5': 'Listo',
      'q.g2': 'Condominio', 'q.r1': 'Hall del bloque A', 'q.r1b': 'Cambio de lámpara', 'q.r2': 'Salón de fiestas', 'q.r2b': 'Reserva del A · 302', 'q.r3': 'Todos los residentes', 'q.r3b': 'Mantenimiento de la piscina',
      'st.liberado': 'Check-in liberado', 'st.limpo': 'Limpieza lista', 'st.pendente': 'Check-in pendiente', 'st.limpando': 'En limpieza', 'st.docs': 'Documentos enviados', 'st.execucao': 'En ejecución',
      'st.aprovada': 'Reserva aprobada', 'st.sabado': 'Sábado', 'st.enviado': 'Aviso enviado', 'st.lido': '86% leyeron', 'st.analise': 'En análisis', 'st.manut': 'En mantenimiento',
      'g.ola': 'Hola,', 'g.copiar': 'Copiar clave', 'g.regras': 'Reglas', 'g.regiao': 'Zona', 'g.aparelhos': 'Aparatos', 'g.mares': 'Mareas', 'g.loja': 'Tienda', 'g.emerg': 'Emergencia',
      'g.dica': 'Consejo local', 'g.dicaT': 'Playa de Carneiros · 15 min', 'g.dicaS': 'Mejor con marea baja, a las 10:42',
      'p.titulo': 'Nació dentro de un condominio real y funciona en el Condominio Maré Alta, en Tamandaré (Brasil)',
      'p.1': 'operaciones en un solo sistema', 'p.2': 'apps para que el huésped instale', 'p.3': 'idiomas en la guía y el panel', 'p.4': 'guía disponible para el huésped, sin depender de nadie',
      't.titulo': 'Una plataforma para cada operación', 't.sub': 'Elige por dónde empezar. Todo se conecta con todo.',
      demo: 'Solicitar demostración', exemplo: 'o abre el ejemplo ahora', exemploGuia: 'o abre la guía de ejemplo',
      'a1.t': 'Todo el condominio en una pantalla', 'a1.1': 'Control de acceso con huéspedes, visitas, vehículos y paquetes', 'a1.2': 'Reservas de áreas comunes con reglas, horarios y aprobación',
      'a1.3': 'Avisos y documentos que el residente lee sin descargar', 'a1.4': 'Control de morosidad, multas y advertencias', 'a1.5': 'Novedades y órdenes de servicio con plazo y responsable',
      'a1.k1': 'Ocupación hoy', 'a1.k2': 'Paquetes', 'a1.k2s': 'esperando retiro', 'a1.k3': 'Órdenes de servicio', 'a1.k3s': '2 atrasadas', 'a1.areas': 'Áreas comunes · esta semana',
      'a1.l1': 'Salón de fiestas', 'a1.l2': 'Parrilla', 'a1.l3': 'Piscina', 'a1.l3b': 'Todos',
      'a2.t': 'Temporada sin planillas ni apuros', 'a2.1': 'Calendario unificado: Booking, Airbnb y Vrbo por iCal, y Stays con los datos del huésped',
      'a2.2': 'Check-in online automático con documentos y consentimiento', 'a2.3': 'Limpieza y ropa de cama organizadas como órdenes de servicio',
      'a2.4': 'La portería recibe la lista de llegadas sin que nadie avise', 'a2.5': 'El propietario sigue las estadías de su inmueble', 'a2.limp': 'Limpieza', 'a2.direto': 'Directo · Roberto', 'a2.dir': 'Directo',
      'a3.t': 'El conserje en el bolsillo del huésped', 'a3.1': 'Abre por enlace o código QR, sin instalar app', 'a3.2': 'Clave del Wi-Fi copiada con un toque',
      'a3.3': 'Manual de los aparatos y reglas del condominio', 'a3.4': 'Mapa de la zona con consejos, mareas y emergencias', 'a3.5': 'Tienda de la casa: kit de playa, ropa de cama extra y servicios',
      'a3.m1': 'Un toque para copiar', 'a3.m2': 'Leídas y aceptadas', 'a3.m3': 'Cómo usar cada uno', 'a3.m4': 'Playas y restaurantes', 'a3.m5': 'Tabla del día', 'a3.m6': 'Artículos extra', 'a3.m7': 'Contactos útiles', 'a3.m8': 'Paso a paso',
      'a4.t': 'La portería sabe quién es antes de que llegue', 'a4.1': 'Llegadas y salidas del día, con el check-in online ya revisado', 'a4.2': 'Búsqueda por nombre, unidad, placa o documento',
      'a4.3': 'Huéspedes, visitas y proveedores homologados en un solo lugar', 'a4.4': 'Entrada registrada con un toque y libro de novedades digital',
      'a4.busca': 'Buscar por nombre, unidad, placa o documento', 'a4.p1': 'llega a las 14:00 · 1 vehículo', 'a4.p2': 'Aire acondicionado · OS #42', 'a4.p3': 'check-in online hecho',
      'a4.hosp': 'Huésped', 'a4.prest': 'Proveedor', 'a4.conf': 'Revisado', 'a4.entrada': 'Registrar entrada', 'a4.dentro': 'En casa',
      'c.1t': 'Avisos automáticos', 'c.1': 'El huésped recibe en el celular los avisos de la estadía y el residente los avisos del condominio, sin enviar mensajes uno por uno.',
      'c.2t': 'Informes al instante', 'c.2': 'Ocupación, llegadas, servicios y novedades del período, listos para rendir cuentas y descargar en planilla.',
      'c.3t': 'Experiencia 5 estrellas', 'c.3': 'El huésped llega sabiendo todo, encuentra respuestas solo y es invitado a evaluar al final de la estadía.',
      'pl.titulo': 'Planes a la medida de tu operación', 'pl.sub': 'Pagas solo por los módulos que usas. La propuesta llega por WhatsApp, sin formularios ni compromiso.',
      'pl.1e': 'Condominio', 'pl.1n': 'Condominio', 'pl.1p': 'Para administradores y condominios que quieren portería y comunicación ordenadas.', 'pl.consulta': 'A consultar',
      'pl.1.1': 'Portería y control de acceso', 'pl.1.2': 'Visitas, vehículos y paquetes', 'pl.1.3': 'Avisos, documentos y novedades', 'pl.1.4': 'Reservas de áreas comunes', 'pl.1.5': 'Área del residente en el celular',
      'pl.quero': 'Quiero este plan', 'pl.fita': 'Recomendado', 'pl.2e': 'Short-stay', 'pl.2n': 'Flats y Short-Stay', 'pl.2p': 'Para anfitriones y gestores de flats que viven de reservas.',
      'pl.2.1': 'Reservas y check-in online', 'pl.2.2': 'Guía del huésped por enlace y QR', 'pl.2.3': 'Calendarios de Booking, Airbnb, Vrbo y Stays', 'pl.2.4': 'Tienda de la casa y pedidos de ropa de cama', 'pl.2.5': 'Limpieza y mantenimiento por orden de servicio',
      'pl.3e': 'Todo junto', 'pl.3n': 'Ecosistema Completo', 'pl.3p': 'Para administradoras con varios condominios y operación de temporada.',
      'pl.3.1': 'Todo lo de Condominio y Flats', 'pl.3.2': 'Varios condominios en un panel', 'pl.3.3': 'Tu marca en el panel y la guía', 'pl.3.4': 'Perfiles de acceso por equipo e informes', 'pl.3.5': 'Implementación acompañada',
      'f.titulo': 'Preguntas frecuentes',
      'f.1p': '¿Se integra con Airbnb y Booking?', 'f.1r': 'Sí. Las reservas de Booking, Airbnb y Vrbo entran por el calendario iCal de cada anuncio, y la integración con Stays trae también los datos del huésped. El envío de precios y disponibilidad a los canales (channel manager completo) está en desarrollo.',
      'f.2p': '¿Cómo aprende a usarlo la portería?', 'f.2r': 'La pantalla de portería fue diseñada para usarse sin manual: llegadas del día, búsqueda por nombre, placa o documento y un toque para registrar la entrada. En la implementación capacitamos al equipo y acompañamos los primeros días.',
      'f.3p': '¿Tengo que cargar todo de nuevo?', 'f.3r': 'No. Las unidades entran por planilla, las reservas llegan por los calendarios conectados y los residentes completan su registro desde la invitación.',
      'f.4p': '¿Cómo funciona el soporte?', 'f.4r': 'Por WhatsApp, con personas reales: el equipo de Atlântico, que usa el sistema todos los días en el Condominio Maré Alta.',
      'f.5p': '¿El huésped necesita descargar una app?', 'f.5r': 'No. La guía abre en el navegador del celular, por enlace o código QR, en portugués, inglés o español.',
      'f.6p': '¿Puedo contratar solo una parte?', 'f.6r': 'Sí. El sistema se vende por módulos: empieza por lo que resuelve tu problema hoy y activa los demás cuando quieras.',
      'f.7p': '¿Mis datos están seguros?', 'f.7r': 'Cada condominio y cada empresa solo ve sus propios datos, con la regla aplicada en la base de datos. Los accesos administrativos piden verificación en dos pasos, todo queda registrado y el huésped firma el consentimiento de privacidad.',
      'fi.titulo': '¿Listo para transformar tu gestión?', 'fi.sub': 'Administrador, administradora o anfitrión: habla con nosotros y mira el sistema funcionando con tu operación.',
      'fi.cta': 'Iniciar conversación por WhatsApp', 'fi.demo': 'o prueba el sistema de ejemplo ahora',
      'r.solucao': 'Una solución de', 'r.produto': 'Producto', 'r.contato': 'Contacto', 'r.legal': 'Legal', 'r.termos': 'Términos de uso', 'r.privacidade': 'Política de privacidad', flut: 'Ventas por WhatsApp',
      'h.badge': 'Sistema all-in-one para condominios y short-stay', 'q.v3': 'Paneles', 'k.1': 'Llegadas hoy', 'k.2': 'Check-in online', 'k.3': 'Limpiezas', 'k.3s': 'en curso', 'k.4': 'Pedidos abiertos',
      'p.titulo': 'Nació dentro de un condominio real, en Tamandaré (Brasil)', 'p.4': 'guía disponible, sin depender de nadie',
      'caso.selo': 'Caso de estudio', 'caso.titulo': 'Condominio Maré Alta · Tamandaré (PE)', 'caso.texto': 'Aquí Maree Hub funciona todos los días. Atlântico administra flats por temporada dentro del condominio, y el sistema nació para resolver la rutina real de recibir huéspedes en un edificio con residentes.',
      'caso.1t': 'Portería', 'caso.1': 'recibe la lista de huéspedes con el check-in online ya revisado, en lugar de un papel en el mostrador',
      'caso.2t': 'Anfitriones', 'caso.2': 'envían un solo enlace, y el huésped encuentra Wi-Fi, reglas y consejos de la zona sin preguntar',
      'caso.3t': 'Administrador', 'caso.3': 'sigue ocupación, órdenes de servicio y avisos en un panel',
      'a2.3': 'Escala de limpieza y ropa de cama por orden de servicio', 'a2.escala': 'Escala de limpieza · hoy', 'st.agendada': 'Agendada',
      'a3.4': 'Guía de Tamandaré con playas, mareas y contactos de emergencia', 'a3.cab': 'Guía de la estadía', 'a3.regras': 'Reglas de la casa', 'a3.r1': 'Silencio después de las 22h', 'a3.r2': 'Prohibido fumar en el apartamento', 'a3.r3': 'Check-out hasta las 11h',
      'a3.roteiro': 'Qué hacer en Tamandaré', 'a3.mare': 'Marea baja hoy', 'a3.chip': 'Check-in completado', 'a3.chipS': 'claves liberadas a las 14h',
      'c.titulo': 'Por qué Maree Hub funciona en la operación real', 'c.sub': 'Hecho por quien recibe huéspedes y cuida un condominio todos los días.',
      'ad.titulo': 'Del caos operativo al piloto automático', 'ad.sub': 'Si la columna izquierda te resulta familiar, la derecha es lo que cambia en la primera semana.',
      'ad.sem': 'Sin Maree Hub', 'ad.semT': 'Caos operativo', 'ad.s1': 'Planillas paralelas que nadie actualiza', 'ad.s2': 'Portería perdida, con huéspedes llegando sin registro', 'ad.s3': 'Las mismas preguntas de Wi-Fi y reglas por WhatsApp, en cada reserva', 'ad.s4': 'Limpieza olvidada y huésped esperando el apartamento',
      'ad.com': 'Con Maree Hub', 'ad.comT': 'Operación en piloto automático', 'ad.c1': 'Check-in online integrado a la portería', 'ad.c2': 'Guía digital entregada al huésped en un enlace', 'ad.c3': 'Equipo de limpieza activado por orden de servicio, con estado', 'ad.c4': 'Administrador con control total en un panel',
      'pl.titulo': 'Planes claros, propuesta a medida', 'pl.sub': 'Empieza por el plan de tu operación. El valor final depende del número de unidades y llega por WhatsApp, sin formularios.',
      'pl.apartir': 'Desde', 'pl.mes': '/mes', 'pl.medida': 'A medida', 'pl.proposta': 'Armar mi propuesta', 'pl.nota': 'Implementación guiada y capacitación del equipo en todos los planes.'
    }
  };

  document.documentElement.classList.remove('sem-js');
  var idiomaAtual = 'pt-BR';

  // Português original, para voltar a ele depois de trocar o idioma.
  var original = {};
  document.querySelectorAll('[data-t]').forEach(function (el) { var k = el.getAttribute('data-t'); if (!(k in original)) original[k] = el.innerHTML; });

  function escolhido() {
    try { var s = localStorage.getItem(CHAVE); if (s === 'pt-BR' || s === 'en' || s === 'es') return s; } catch (e) { /* sem armazenamento */ }
    var n = (navigator.language || 'pt').toLowerCase();
    return n.indexOf('en') === 0 ? 'en' : n.indexOf('es') === 0 ? 'es' : 'pt-BR';
  }

  function aplicar(lang) {
    idiomaAtual = lang;
    var d = T[lang] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var k = el.getAttribute('data-t');
      el.innerHTML = lang === 'pt-BR' || d[k] == null ? original[k] : d[k];
    });
    document.querySelectorAll('a[data-whats]').forEach(function (a) {
      var m = MSG[lang][a.getAttribute('data-whats')] || MSG[lang].comercial;
      a.href = 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(m);
    });
    document.getElementById('idioma').value = lang;
  }

  var sel = document.getElementById('idioma');
  sel.addEventListener('change', function () {
    try { localStorage.setItem(CHAVE, sel.value); } catch (e) { /* vale só nesta visita */ }
    aplicar(sel.value);
  });
  aplicar(escolhido());

  // Abas das operações (setas trocam de aba, como no padrão acessível).
  var abas = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function ativar(aba, foco) {
    abas.forEach(function (b) {
      var sim = b === aba;
      b.setAttribute('aria-selected', sim ? 'true' : 'false');
      b.tabIndex = sim ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !sim;
    });
    if (foco) aba.focus();
    // No celular a barra de abas rola para o lado: traz a aba escolhida para a vista.
    var barra = aba.parentNode;
    if (barra.scrollWidth > barra.clientWidth) barra.scrollTo({ left: aba.offsetLeft - 16, behavior: 'smooth' });
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

  // Links do menu e do rodapé que abrem uma aba: Guia do Hóspede vai para a seção da plataforma com a aba certa.
  function irParaAba(id) {
    var aba = document.getElementById('t-' + id);
    if (!aba) return;
    ativar(aba);
    document.getElementById('plataforma').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  document.querySelectorAll('[data-aba]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); fecharTudo(); irParaAba(a.getAttribute('data-aba')); history.replaceState(null, '', a.getAttribute('href')); });
  });
  var MAPA_HASH = { '#condominios': 'cond', '#flats': 'flat', '#guia': 'guia', '#portaria': 'port' };
  if (MAPA_HASH[location.hash]) setTimeout(function () { irParaAba(MAPA_HASH[location.hash]); }, 50);

  // Menu "Plataforma" e gaveta do celular.
  var btnPlat = document.getElementById('btnPlataforma'), suspenso = btnPlat.parentNode;
  var botao = document.getElementById('abrirMenu'), menu = document.getElementById('menu');
  function fecharTudo() {
    suspenso.classList.remove('aberto'); btnPlat.setAttribute('aria-expanded', 'false');
    menu.classList.remove('aberto'); botao.setAttribute('aria-expanded', 'false');
  }
  btnPlat.addEventListener('click', function (e) {
    e.stopPropagation();
    var abrir = !suspenso.classList.contains('aberto');
    suspenso.classList.toggle('aberto', abrir);
    btnPlat.setAttribute('aria-expanded', abrir ? 'true' : 'false');
  });
  botao.addEventListener('click', function (e) {
    e.stopPropagation();
    var abrir = !menu.classList.contains('aberto');
    menu.classList.toggle('aberto', abrir);
    botao.setAttribute('aria-expanded', abrir ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) fecharTudo(); });
  document.addEventListener('click', function (e) { if (!e.target.closest('.suspenso') && !e.target.closest('#menu') && !e.target.closest('#abrirMenu')) fecharTudo(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharTudo(); });

  // Wi-Fi do celular de exemplo: mostra como o hóspede copia a senha.
  var aviso = document.getElementById('aviso'), tempo;
  document.querySelectorAll('[data-copiar]').forEach(function (b) {
    b.addEventListener('click', function () {
      try { navigator.clipboard && navigator.clipboard.writeText('praia2026'); } catch (e) { /* só demonstração */ }
      aviso.textContent = MSG[idiomaAtual].copiado;
      aviso.classList.add('mostrar');
      clearTimeout(tempo);
      tempo = setTimeout(function () { aviso.classList.remove('mostrar'); }, 2200);
    });
  });

  // Linha sob o topo e rótulo do WhatsApp flutuante depois de rolar.
  var topo = document.getElementById('topo'), flut = document.querySelector('.flutuante');
  var marcar = function () { var y = window.scrollY; topo.classList.toggle('rolou', y > 8); flut.classList.toggle('visivel', y > 600); };
  window.addEventListener('scroll', marcar, { passive: true });
  marcar();

  // Entrada suave ao rolar.
  var itens = document.querySelectorAll('.revelar');
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
