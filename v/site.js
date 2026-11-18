// Site do produto Maree Hub (D122, revisão 5): idiomas, mensagens de WhatsApp por botão, menu do celular e entrada ao
// rolar. O idioma usa a mesma chave do app (maree.idioma), então a escolha vale nos dois.
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
      'd-os': 'Olá! Quero ver as ordens de serviço do Maree Hub funcionando no meu condomínio.',
      'd-cond': 'Olá! Quero uma demonstração do Maree Hub para o meu condomínio.',
      'd-port': 'Olá! Quero uma demonstração da portaria do Maree Hub, com calendário de check-in e leitura facial.',
      'd-temp': 'Olá! Administro flats por temporada e quero ver o Maree Hub com a integração da Stays e a garantia de entrega.',
      'd-guia': 'Olá! Quero ver o guia digital do hóspede funcionando nos meus apartamentos.',
      p1: 'Olá! Tenho interesse no plano Condomínio. Meu condomínio tem ___ unidades.',
      p2: 'Olá! Tenho interesse no plano Condomínio + Guia do Hóspede. São ___ unidades e ___ apartamentos de temporada.',
      p3: 'Olá! Tenho interesse no plano Guia do Hóspede para ___ apartamentos.',
      p4: 'Olá! Tenho interesse no plano Administradora de temporada. Administro ___ flats.',
      p5: 'Olá! Tenho interesse no plano Administradora + Guia do Hóspede. Administro ___ flats.'
    },
    en: {
      comercial: 'Hi! I found Maree Hub on the website and want to understand how it works for my operation.',
      vendas: 'Hi! I want to talk to sales about Maree Hub for my operation.',
      final: 'Hi! I want to transform my operation with Maree Hub. Can we talk?',
      flutuante: 'Hi! I am on the Maree Hub website and have a question.',
      'd-os': 'Hi! I would like to see Maree Hub work orders running in my building.',
      'd-cond': 'Hi! I would like a Maree Hub demo for my building.',
      'd-port': 'Hi! I would like a demo of the Maree Hub front desk, with check-in calendar and face recognition.',
      'd-temp': 'Hi! I manage short-stay flats and want to see Maree Hub with the Stays integration and the delivery guarantee.',
      'd-guia': 'Hi! I would like to see the digital guest guide working in my apartments.',
      p1: 'Hi! I am interested in the Building plan. My building has ___ units.',
      p2: 'Hi! I am interested in the Building + Guest Guide plan. ___ units and ___ short-stay apartments.',
      p3: 'Hi! I am interested in the Guest Guide plan for ___ apartments.',
      p4: 'Hi! I am interested in the Short-stay manager plan. I manage ___ flats.',
      p5: 'Hi! I am interested in the Short-stay manager + Guest Guide plan. I manage ___ flats.'
    },
    es: {
      comercial: '¡Hola! Vi Maree Hub en el sitio y quiero entender cómo funciona en mi operación.',
      vendas: '¡Hola! Quiero hablar con ventas sobre Maree Hub para mi operación.',
      final: '¡Hola! Quiero transformar la gestión de mi operación con Maree Hub. ¿Hablamos?',
      flutuante: '¡Hola! Estoy en el sitio de Maree Hub y tengo una duda.',
      'd-os': '¡Hola! Quiero ver las órdenes de servicio de Maree Hub funcionando en mi condominio.',
      'd-cond': '¡Hola! Quiero una demostración de Maree Hub para mi condominio.',
      'd-port': '¡Hola! Quiero una demostración de la portería de Maree Hub, con calendario de check-in y lectura facial.',
      'd-temp': '¡Hola! Administro flats por temporada y quiero ver Maree Hub con la integración de Stays y la garantía de entrega.',
      'd-guia': '¡Hola! Quiero ver la guía digital del huésped funcionando en mis apartamentos.',
      p1: '¡Hola! Me interesa el plan Condominio. Mi condominio tiene ___ unidades.',
      p2: '¡Hola! Me interesa el plan Condominio + Guía del Huésped. Son ___ unidades y ___ apartamentos de temporada.',
      p3: '¡Hola! Me interesa el plan Guía del Huésped para ___ apartamentos.',
      p4: '¡Hola! Me interesa el plan Administradora de temporada. Administro ___ flats.',
      p5: '¡Hola! Me interesa el plan Administradora + Guía del Huésped. Administro ___ flats.'
    }
  };

  var T = {
    en: {
      pular: 'Skip to content', assinatura: 'an Atlântico solution', idioma: 'Language', entrar: 'Sign in', vendas: 'Talk to sales',
      'm.os': 'Work orders', 'm.cond': 'Building', 'm.temp': 'Short-stay', 'm.guia': 'Guest Guide', 'm.planos': 'Plans',
      'h.badge': 'Buildings · Short-stay flats · Hotels and inns', 'h.titulo': 'You manage.<br><span class="grad">The system automates.</span>',
      'h.sub': 'The technology hub built for buildings, short-stay flats, hotels and inns, with the best check-in experience your guests have ever had.',
      'h.cta': 'Talk to sales on WhatsApp', 'h.m1': 'Guided onboarding', 'h.m2': 'Human support', 'h.m3': 'Free demo',
      'h.j1': 'Building manager dashboard', 'h.j2': 'Work orders', 'h.j3': 'Front desk · calendar',
      'h.a1': 'Building manager dashboard with occupancy and a chart of the coming days', 'h.a2': 'Work order board', 'h.a3': 'Front desk check-in calendar',
      'f.1': 'apps for guests to install', 'f.2': 'main languages: Portuguese, English and Spanish', 'f.3': 'place with everything the guest needs, no other channels, no one to depend on', 'f.4': 'of autonomy: the guide answers while your team rests',
      'd.j1': 'Manager · bookings', 'd.a1': 'Manager bookings with each guest\'s check-in status', 'd.a2': 'Guest guide with the main cards', 'd.a3': 'Wi-Fi in the guest guide, with password and QR Code',
      'd.leg': 'On the left, what the manager sees. On the right, what the guest gets on the phone: one link, nothing to download.',
      'os.selo': 'Module · Work orders', 'os.titulo': 'No more maintenance lost in the group chat', 'os.sub': 'Whoever asks, executes and approves sees the same board, in real time.',
      'os.1t': 'Visual board', 'os.1': 'Drag the card across columns and everyone sees the status. Deadline, owner, sector and photos in every order.',
      'os.2t': 'Manager sign-off', 'os.2': 'The order only closes after approval. Whoever did the job never approves their own work.',
      'os.3t': 'Opened by residents and guests', 'os.3': 'From the phone, with a photo, straight from the guide. No calls, no notes at the front desk.',
      'os.4t': 'Delays in sight', 'os.4': 'Approval flows, sectors and alerts for anything overdue.',
      demo: 'I want a demo', exemplo: 'or open the example now', exemploGuia: 'or open the sample guide',
      'co.selo': 'Module · Building management', 'co.titulo': 'The whole building in the manager\'s hand', 'co.sub': 'Occupancy, guests in the house and pending check-ins as soon as you open the dashboard, with charts of the coming days.',
      'co.1t': 'Dashboard with indicators', 'co.1': 'Units, residents, occupancy and reports for accountability, with spreadsheets to download.',
      'co.2t': 'Communication through the guide', 'co.2': 'Notices and rules reach residents and guests in the same place, with documents to read without downloading.',
      'co.3t': 'Resident area', 'co.3': 'Notices, packages, visitors, common area bookings and incidents on the phone.',
      'co.4t': 'Rules and control', 'co.4': 'Check-in rules with privacy consent, delinquency, fines and warnings per unit.',
      'po.selo': 'Module · Front desk and reception', 'po.titulo': 'The front desk knows who it is before they arrive', 'po.sub': 'Check-in calendar per unit, with online check-in already reviewed. Built for doormen and receptionists.',
      'po.1t': 'Today\'s arrivals and departures', 'po.1': 'Search by name, unit, plate or ID and one tap to log entry.',
      'po.2t': 'Face recognition integration', 'po.2': 'The photo approved at check-in becomes a record on the face reader or turnstile (Control iD, Intelbras and Hikvision).',
      'po.3t': 'All in one place', 'po.3': 'Guests, visitors, providers, vehicles, packages and incident log.',
      'te.selo': 'Module · Short-stay manager', 'te.titulo': 'Your flats operation with no spreadsheets and no arguments with guests', 'te.sub': 'Bookings, online check-in, cleaning and maintenance on one screen, with proof of how each apartment was delivered.',
      'te.1t': 'Stays integration', 'te.1': 'Bookings come in on their own, with name, phone, e-mail and number of guests, and the guide link ready.',
      'te.2t': 'Automatic online check-in', 'te.2': 'Documents, privacy consent and rules accepted before arrival. The front desk gets everything reviewed.',
      'te.3t': 'Cleaning and maintenance as work orders', 'te.3': 'Cleaning schedule, linen and repairs with status, for the team and for the owner to follow.',
      'g.selo': 'Delivery guarantee', 'g.titulo': 'Delivered, photographed, guaranteed', 'g.sub': 'The end of "it was already like this when I arrived" without proof.',
      'g.1t': 'Delivery photos', 'g.1': 'The manager records, in the app, photos of how each room was delivered.',
      'g.2t': 'Up to 4 hours to report', 'g.2': 'Guests see the photos in the guide and have up to 4 hours to open a damage claim as a work order, with a photo.',
      'g.3t': 'Guaranteed records', 'g.3': 'Photos and claims keep date and time and cannot be deleted.',
      'g.4t': 'Guaranteed resolution', 'g.4': 'Each claim becomes a work order with an owner and only closes after sign-off.',
      'gu.selo': 'Module · Guest Guide', 'gu.titulo': 'Every guest question answered before it is asked', 'gu.sub': 'One link or QR Code, in Portuguese, English or Spanish. No app to download, no one to depend on.',
      'gu.1t': 'Wi-Fi with QR Code', 'gu.1': 'Point the camera and connect, or copy the password with one tap.',
      'gu.2t': 'Online check-in and access', 'gu.2': 'House and building rules accepted, documents sent and codes released at the right time.',
      'gu.3t': 'The cards that matter', 'gu.3': 'Appliances, tide table, check-out, talk to the host, "something broke?", emergency and the house shop.',
      'gu.4t': 'Your brand, your channel', 'gu.4': 'The guide carries the manager\'s name and colors, and the conversation happens inside it.',
      'gu.a1': 'Guide home with check-in done',
      'ad.titulo': 'From operational chaos to autopilot', 'ad.sub': 'If the left column sounds familiar, the right one is what changes in the first week.',
      'ad.sem': 'Without Maree Hub', 'ad.semT': 'Operational chaos', 'ad.s1': 'Maintenance lost in the group chat', 'ad.s2': 'A lost front desk, with guests arriving unregistered', 'ad.s3': 'The same Wi-Fi and rules questions on WhatsApp, every booking', 'ad.s4': 'Damage in the apartment with no proof of who caused it',
      'ad.com': 'With Maree Hub', 'ad.comT': 'Operation on autopilot', 'ad.c1': 'Every request becomes a work order, with deadline, owner and sign-off', 'ad.c2': 'Online check-in integrated with the front desk', 'ad.c3': 'Autonomous guests, with everything in the guide', 'ad.c4': 'Delivery photos and damage claims within 4 hours, with guaranteed records',
      'pl.titulo': 'Choose the plan for your operation', 'pl.sub': 'Price per unit, which drops as your operation grows. Guided onboarding and team training in every plan.',
      'pl.g1': 'For buildings and hosts', 'pl.g2': 'For short-stay managers', 'pl.porUni': '/unit/month', 'pl.porApto': '/apartment/month', 'pl.porFlat': '/flat/month', 'pl.quero': 'I want this plan',
      'pl.1e': 'Building', 'pl.1n': 'Building', 'pl.1p': 'For building managers and condo management companies.', 'pl.1m': 'minimum R$ 149/month',
      'pl.1.1': '<b>Work orders</b> on a board, with sign-off and approval flows', 'pl.1.2': '<b>Manager dashboard</b> with indicators, charts and reports', 'pl.1.3': '<b>Front desk</b> with check-in calendar, visitors, vehicles and packages', 'pl.1.4': '<b>Resident area</b>: notices, documents, common areas and incidents', 'pl.1.5': 'Check-in rules with privacy consent, delinquency and fines',
      'pl.fita': 'Most complete for buildings', 'pl.2e': 'Building + Guide', 'pl.2n': 'Building + Guest Guide', 'pl.2p': 'For buildings with short-stay apartments.', 'pl.2m': '+ R$ 9 per short-stay apartment · minimum R$ 197/month',
      'pl.2.1': '<b>Everything in Building</b>', 'pl.2.2': '<b>Guest guide</b> for each short-stay apartment in the building', 'pl.2.3': '<b>Online check-in integrated with the front desk</b>, with documents and privacy consent', 'pl.2.4': '<b>Communication through the guide</b>: building rules accepted before arrival', 'pl.2.5': 'Guests open work orders from the phone, with a photo',
      'pl.3e': 'Guide', 'pl.3n': 'Guest Guide', 'pl.3p': 'For hosts, hotels and inns.', 'pl.3m': '1st apartment free forever · no minimum',
      'pl.3.1': '<b>Guide by link and QR Code</b>, in 3 languages, with your brand', 'pl.3.2': '<b>Wi-Fi with QR Code</b>, access and codes released at the right time', 'pl.3.3': '<b>Online check-in</b> with documents and house rules', 'pl.3.4': 'Appliances, tides, local area, check-out and emergency', 'pl.3.5': 'Chat with the host, "something broke?" and the house shop',
      'pl.4e': 'Manager', 'pl.4n': 'Short-stay manager', 'pl.4p': 'For those who manage short-stay flats and apartments.', 'pl.4m': 'minimum R$ 197/month · progressive tiers',
      'pl.4.1': '<b>Stays integration</b>: bookings come in on their own, with guest details', 'pl.4.2': '<b>Bookings and online check-in</b> with documents and privacy consent', 'pl.4.3': '<b>Cleaning, linen and maintenance as work orders</b>, with schedule and status', 'pl.4.4': '<b>Delivery photos</b> of each apartment, with guaranteed records', 'pl.4.5': 'Owners following along, team profiles and reports',
      'pl.fita2': 'Recommended for managers', 'pl.5e': 'Manager + Guide', 'pl.5n': 'Short-stay manager + Guest Guide', 'pl.5p': 'The complete operation, from listing to check-out.', 'pl.5m': 'minimum R$ 297/month · progressive tiers',
      'pl.5.1': '<b>Everything in Short-stay manager</b>', 'pl.5.2': '<b>Complete guest guide</b> on every booking, with your brand', 'pl.5.3': '<b>Damage claim within 4 hours</b> as a work order, with delivery photos as proof', 'pl.5.4': '<b>Guaranteed resolution</b>: each claim only closes after sign-off', 'pl.5.5': 'Chat with guests, stay notices, reviews and the house shop',
      'pl.vt': 'The bigger the operation, the lower the price per flat', 'pl.vs': 'Manager plans, per active flat in the month, in progressive tiers: each tier applies only to the flats inside it. With 400 flats and the Guide, the average is R$ 16.75 per flat.', 'pl.vf': 'Flats', 'pl.v4': 'over 300',
      'pl.opc': '<b>Optional in any plan:</b> integration with face readers and turnstiles (Control iD, Intelbras and Hikvision): setup from R$ 990 per front desk and R$ 39/month per reader.',
      'pl.cond': '<b>30-day free trial</b>, no card (60 days for buildings). <b>Yearly plan:</b> pay 10 months, use 12. <b>Founders:</b> the first 10 paying customers get 30% off for 24 months and a locked price. <b>Refer and earn:</b> one free month for you and for the friend you refer. No lock-in: monthly plans cancel anytime.',
      'f.titulo': 'Frequently asked questions',
      'f.1p': 'Do you integrate with Stays?', 'f.1r': 'Yes. With the integration, Stays bookings come into Maree Hub with name, phone, e-mail and number of guests the moment they are made, and each one gets the guide link.',
      'f.2p': 'Does it work with face readers and turnstiles?', 'f.2r': 'Yes, as an option. The photo the guest takes at online check-in, once approved, becomes a record on the building\'s face reader or turnstile, valid until check-out. Today we work with Control iD, Intelbras and Hikvision.',
      'f.3p': 'How does the 4-hour damage window work?', 'f.3r': 'The manager records photos of how the apartment was delivered. Guests see them in the guide and have up to 4 hours to report any problem as a work order, with a photo. After that, the delivery stands. Records keep date and time and cannot be deleted.',
      'f.4p': 'How does the front desk team learn it?', 'f.4r': 'The front desk screen was designed to be used without a manual. During onboarding we train the team and stay with them in the first days.',
      'f.5p': 'Do guests need to download an app?', 'f.5r': 'No. The guide opens in the phone browser, by link or QR Code, in Portuguese, English or Spanish.',
      'f.6p': 'I have 400 flats. Does the price scale?', 'f.6r': 'Yes. The price per flat drops with each volume tier, and large operations get dedicated onboarding and support. Talk to us to build the proposal.',
      'f.7p': 'Is my data safe?', 'f.7r': 'Each building and company only sees its own data, enforced in the database. Admin access requires two-step verification, everything is logged and guests sign the privacy consent.',
      'fi.titulo': 'Ready to transform your management?', 'fi.sub': 'Building manager, short-stay manager, hotel or inn: talk to us and see the system working with your operation.',
      'fi.cta': 'Start a WhatsApp conversation', 'fi.demo': 'or try the sample system now',
      'r.solucao': 'A solution by', 'r.produto': 'Product', 'r.contato': 'Contact', 'r.legal': 'Legal', 'r.termos': 'Terms of use', 'r.privacidade': 'Privacy policy', flut: 'Sales on WhatsApp',
      'at.selo': 'An Atlântico solution', 'at.titulo': 'Built by people who run real hospitality',
      'at.sub': 'Maree Hub belongs to Atlântico Facility &amp; Temporada, which manages short-stay flats at Condomínio Maré Alta, in Tamandaré (Brazil). The system was born to run that operation day to day.',
      'at.1t': 'Flats in Tamandaré and Carneiros', 'at.1': 'Booking center, deals, packages and tide table on the Atlântico website, with direct booking and no middlemen.',
      'at.2t': 'Full facility services', 'at.2': 'Hotel-standard cleaning, maintenance, linen and outsourced staff for buildings and owners.',
      'at.3t': 'Tested in our own operation', 'at.3': 'Every screen goes through Maré Alta first, with real guests, front desk and maintenance.',
      'at.cta': 'Visit the Atlântico website', 'at.link': 'or see the available flats', 'at.alt': 'Home page of the Atlântico Facility &amp; Temporada website'
    },
    es: {
      pular: 'Ir al contenido', assinatura: 'una solución Atlântico', idioma: 'Idioma', entrar: 'Entrar', vendas: 'Hablar con ventas',
      'm.os': 'Órdenes de servicio', 'm.cond': 'Condominio', 'm.temp': 'Temporada', 'm.guia': 'Guía del Huésped', 'm.planos': 'Planes',
      'h.badge': 'Condominios · Flats por temporada · Hoteles y posadas', 'h.titulo': 'Tú gestionas.<br><span class="grad">El sistema automatiza.</span>',
      'h.sub': 'El hub de tecnología hecho para condominios, flats por temporada, hoteles y posadas, con la mejor experiencia de check-in que tu huésped haya tenido.',
      'h.cta': 'Hablar con ventas por WhatsApp', 'h.m1': 'Implementación guiada', 'h.m2': 'Soporte humano', 'h.m3': 'Demostración gratuita',
      'h.j1': 'Panel del administrador', 'h.j2': 'Órdenes de servicio', 'h.j3': 'Portería · calendario',
      'h.a1': 'Panel del administrador con ocupación y gráfico de los próximos días', 'h.a2': 'Tablero de órdenes de servicio', 'h.a3': 'Calendario de check-in de la portería',
      'f.1': 'aplicaciones para que el huésped instale', 'f.2': 'idiomas principales: portugués, inglés y español', 'f.3': 'lugar con todo lo que el huésped necesita, sin otros canales ni depender de nadie', 'f.4': 'de autonomía: la guía responde mientras tu equipo descansa',
      'd.j1': 'Administradora · reservas', 'd.a1': 'Reservas de la administradora con el estado del check-in de cada huésped', 'd.a2': 'Guía del huésped con las tarjetas principales', 'd.a3': 'Wi-Fi en la guía del huésped, con clave y código QR',
      'd.leg': 'A la izquierda, lo que ve la administradora. A la derecha, lo que el huésped recibe en el celular: un enlace, sin descargar nada.',
      'os.selo': 'Módulo · Órdenes de servicio', 'os.titulo': 'Ningún mantenimiento olvidado en el grupo de mensajes', 'os.sub': 'Quien pide, quien ejecuta y quien aprueba ven el mismo tablero, en tiempo real.',
      'os.1t': 'Tablero visual', 'os.1': 'Arrastra la tarjeta de columna y todos ven el estado al instante. Plazo, responsable, sector y fotos en cada orden.',
      'os.2t': 'Validación del administrador', 'os.2': 'La orden solo se cierra después de aprobada. Quien ejecutó nunca valida su propio trabajo.',
      'os.3t': 'Abierta por residentes y huéspedes', 'os.3': 'Desde el celular, con foto, directo desde la guía. Sin llamadas ni notas en la portería.',
      'os.4t': 'Atrasos a la vista', 'os.4': 'Flujos de aprobación, sectores y alerta de lo que pasó del plazo.',
      demo: 'Quiero una demostración', exemplo: 'o abre el ejemplo ahora', exemploGuia: 'o abre la guía de ejemplo',
      'co.selo': 'Módulo · Gestión de condominio', 'co.titulo': 'Todo el edificio en la mano del administrador', 'co.sub': 'Ocupación, huéspedes en casa y check-ins pendientes al abrir el panel, con gráficos de los próximos días.',
      'co.1t': 'Panel con indicadores', 'co.1': 'Unidades, residentes, ocupación e informes para rendir cuentas, con planillas para descargar.',
      'co.2t': 'Comunicación por la guía', 'co.2': 'Avisos y reglas llegan al residente y al huésped en el mismo lugar, con documentos para leer sin descargar.',
      'co.3t': 'Área del residente', 'co.3': 'Avisos, paquetes, visitas, reservas de áreas comunes y novedades por el celular.',
      'co.4t': 'Reglas y control', 'co.4': 'Reglas del check-in con consentimiento, morosidad, multas y advertencias por unidad.',
      'po.selo': 'Módulo · Portería y recepción', 'po.titulo': 'La portería sabe quién es antes de que llegue', 'po.sub': 'Calendario de check-in por unidad, con el check-in online ya revisado. Hecho para porteros y recepcionistas.',
      'po.1t': 'Llegadas y salidas del día', 'po.1': 'Búsqueda por nombre, unidad, placa o documento y un toque para registrar la entrada.',
      'po.2t': 'Integración con lectura facial', 'po.2': 'La foto aprobada en el check-in se vuelve registro en el lector facial o en el torniquete (Control iD, Intelbras y Hikvision).',
      'po.3t': 'Todo en un lugar', 'po.3': 'Huéspedes, visitas, proveedores, vehículos, paquetes y libro de novedades.',
      'te.selo': 'Módulo · Administradora de temporada', 'te.titulo': 'Tu operación de flats sin planillas ni discusiones con huéspedes', 'te.sub': 'Reservas, check-in online, limpieza y mantenimiento en una pantalla, con prueba de cómo se entregó cada apartamento.',
      'te.1t': 'Integración con Stays', 'te.1': 'Las reservas entran solas, con nombre, teléfono, e-mail y cantidad de huéspedes, y el enlace de la guía listo.',
      'te.2t': 'Check-in online automático', 'te.2': 'Documentos, consentimiento y reglas aceptadas antes de la llegada. La portería recibe todo revisado.',
      'te.3t': 'Limpieza y mantenimiento por orden de servicio', 'te.3': 'Escala de limpieza, ropa de cama y reparaciones con estado, para el equipo y para que el propietario acompañe.',
      'g.selo': 'Garantía de entrega', 'g.titulo': 'Entregado, fotografiado, garantizado', 'g.sub': 'El fin del "ya estaba así cuando llegué" sin prueba.',
      'g.1t': 'Fotos de la entrega', 'g.1': 'La administradora registra en la app las fotos de cómo entregó cada ambiente.',
      'g.2t': 'Hasta 4 horas para registrar', 'g.2': 'El huésped ve las fotos en la guía y tiene hasta 4 horas para abrir un siniestro como orden de servicio, con foto.',
      'g.3t': 'Registros garantizados', 'g.3': 'Fotos y siniestros quedan con fecha y hora y no se pueden borrar.',
      'g.4t': 'Resolución garantizada', 'g.4': 'Cada siniestro se vuelve orden de servicio con responsable y solo se cierra después de validado.',
      'gu.selo': 'Módulo · Guía del Huésped', 'gu.titulo': 'Todo lo que el huésped pregunta, respondido antes de la pregunta', 'gu.sub': 'Un enlace o código QR, en portugués, inglés o español. Sin app para descargar, sin depender de nadie.',
      'gu.1t': 'Wi-Fi con código QR', 'gu.1': 'Apunta la cámara y se conecta, o copia la clave con un toque.',
      'gu.2t': 'Check-in online y accesos', 'gu.2': 'Reglas de la casa y del condominio aceptadas, documentos enviados y claves liberadas a la hora justa.',
      'gu.3t': 'Las tarjetas que importan', 'gu.3': 'Aparatos, tabla de mareas, check-out, hablar con el anfitrión, "¿algo se rompió?", emergencia y tienda de la casa.',
      'gu.4t': 'Tu marca, tu canal', 'gu.4': 'La guía lleva el nombre y los colores de la administradora, y la conversación ocurre dentro de ella.',
      'gu.a1': 'Inicio de la guía con el check-in hecho',
      'ad.titulo': 'Del caos operativo al piloto automático', 'ad.sub': 'Si la columna izquierda te resulta familiar, la derecha es lo que cambia en la primera semana.',
      'ad.sem': 'Sin Maree Hub', 'ad.semT': 'Caos operativo', 'ad.s1': 'Mantenimiento olvidado en el grupo de mensajes', 'ad.s2': 'Portería perdida, con huéspedes llegando sin registro', 'ad.s3': 'Las mismas preguntas de Wi-Fi y reglas por WhatsApp, en cada reserva', 'ad.s4': 'Daño en el apartamento sin prueba de quién lo causó',
      'ad.com': 'Con Maree Hub', 'ad.comT': 'Operación en piloto automático', 'ad.c1': 'Cada pedido se vuelve orden de servicio, con plazo, responsable y validación', 'ad.c2': 'Check-in online integrado a la portería', 'ad.c3': 'Huésped autónomo, con todo en la guía', 'ad.c4': 'Fotos de la entrega y siniestro en hasta 4 horas, con registro garantizado',
      'pl.titulo': 'Elige el plan de tu operación', 'pl.sub': 'Precio por unidad, que baja a medida que tu operación crece. Implementación guiada y capacitación del equipo en todos los planes.',
      'pl.g1': 'Para condominios y anfitriones', 'pl.g2': 'Para administradoras de alquiler por temporada', 'pl.porUni': '/unidad/mes', 'pl.porApto': '/apartamento/mes', 'pl.porFlat': '/flat/mes', 'pl.quero': 'Quiero este plan',
      'pl.1e': 'Condominio', 'pl.1n': 'Condominio', 'pl.1p': 'Para administradores y administradoras de condominio.', 'pl.1m': 'mínimo de R$ 149/mes',
      'pl.1.1': '<b>Órdenes de servicio</b> en tablero, con validación y flujos de aprobación', 'pl.1.2': '<b>Panel del administrador</b> con indicadores, gráficos e informes', 'pl.1.3': '<b>Portería</b> con calendario de check-in, visitas, vehículos y paquetes', 'pl.1.4': '<b>Área del residente</b>: avisos, documentos, áreas comunes y novedades', 'pl.1.5': 'Reglas del check-in con consentimiento, morosidad y multas',
      'pl.fita': 'El más completo para condominios', 'pl.2e': 'Condominio + Guía', 'pl.2n': 'Condominio + Guía del Huésped', 'pl.2p': 'Para edificios con apartamentos de temporada.', 'pl.2m': '+ R$ 9 por apartamento de temporada · mínimo de R$ 197/mes',
      'pl.2.1': '<b>Todo lo del plan Condominio</b>', 'pl.2.2': '<b>Guía del huésped</b> para cada apartamento de temporada del edificio', 'pl.2.3': '<b>Check-in online integrado a la portería</b>, con documentos y consentimiento', 'pl.2.4': '<b>Comunicación por la guía</b>: reglas del condominio aceptadas antes de la llegada', 'pl.2.5': 'El huésped abre órdenes de servicio desde el celular, con foto',
      'pl.3e': 'Guía', 'pl.3n': 'Guía del Huésped', 'pl.3p': 'Para anfitriones, hoteles y posadas.', 'pl.3m': '1er apartamento gratis para siempre · sin mínimo',
      'pl.3.1': '<b>Guía por enlace y código QR</b>, en 3 idiomas, con tu marca', 'pl.3.2': '<b>Wi-Fi con código QR</b>, accesos y claves liberados a la hora justa', 'pl.3.3': '<b>Check-in online</b> con documentos y reglas de la casa', 'pl.3.4': 'Aparatos, mareas, zona, check-out y emergencia', 'pl.3.5': 'Conversación con el anfitrión, "¿algo se rompió?" y tienda de la casa',
      'pl.4e': 'Administradora', 'pl.4n': 'Administradora de temporada', 'pl.4p': 'Para quien administra flats y apartamentos de temporada.', 'pl.4m': 'mínimo de R$ 197/mes · tramos progresivos',
      'pl.4.1': '<b>Integración con Stays</b>: las reservas entran solas, con los datos del huésped', 'pl.4.2': '<b>Reservas y check-in online</b> con documentos y consentimiento', 'pl.4.3': '<b>Limpieza, ropa de cama y mantenimiento por orden de servicio</b>, con escala y estado', 'pl.4.4': '<b>Fotos de la entrega</b> de cada apartamento, con registro garantizado', 'pl.4.5': 'Propietarios acompañando, equipo con perfiles e informes',
      'pl.fita2': 'Recomendado para administradoras', 'pl.5e': 'Administradora + Guía', 'pl.5n': 'Administradora + Guía del Huésped', 'pl.5p': 'La operación completa, del anuncio al check-out.', 'pl.5m': 'mínimo de R$ 297/mes · tramos progresivos',
      'pl.5.1': '<b>Todo lo del plan Administradora</b>', 'pl.5.2': '<b>Guía del huésped completa</b> en cada reserva, con tu marca', 'pl.5.3': '<b>Siniestro en hasta 4 horas</b> por orden de servicio, con las fotos de la entrega como prueba', 'pl.5.4': '<b>Resolución garantizada</b>: cada siniestro solo se cierra después de validado', 'pl.5.5': 'Conversación con el huésped, avisos de la estadía, evaluación y tienda de la casa',
      'pl.vt': 'Cuanto mayor la operación, menor el valor por flat', 'pl.vs': 'Planes de administradora, por flat activo en el mes, en tramos progresivos: cada tramo vale solo para los flats dentro de él. Con 400 flats y la Guía, el promedio queda en R$ 16,75 por flat.', 'pl.vf': 'Flats', 'pl.v4': 'más de 300',
      'pl.opc': '<b>Opcional en cualquier plan:</b> integración con lectores faciales y torniquetes (Control iD, Intelbras y Hikvision): implementación desde R$ 990 por portería y R$ 39/mes por lector.',
      'pl.cond': '<b>Prueba gratis de 30 días</b>, sin tarjeta (60 días para condominio). <b>Plan anual:</b> paga 10 meses y usa 12. <b>Fundadores:</b> los 10 primeros clientes pagantes tienen 30% de descuento por 24 meses y precio fijo. <b>Recomienda y gana:</b> un mes gratis para quien recomienda y para el recomendado. Sin permanencia: el mensual se cancela cuando quiera.',
      'f.titulo': 'Preguntas frecuentes',
      'f.1p': '¿Se integran con Stays?', 'f.1r': 'Sí. Con la integración, las reservas de Stays entran en Maree Hub con nombre, teléfono, e-mail y cantidad de huéspedes en el momento en que se hacen, y cada una ya recibe el enlace de la guía.',
      'f.2p': '¿Funciona con lector facial y torniquete?', 'f.2r': 'Sí, como opcional. La foto que el huésped toma en el check-in online, una vez aprobada, se vuelve registro en el lector facial o el torniquete del condominio, válido hasta el check-out. Hoy trabajamos con Control iD, Intelbras y Hikvision.',
      'f.3p': '¿Cómo funciona el plazo de 4 horas para siniestros?', 'f.3r': 'La administradora registra las fotos de cómo entregó el apartamento. El huésped las ve en la guía y tiene hasta 4 horas para registrar cualquier problema como orden de servicio, con foto. Después, vale lo entregado. Los registros quedan con fecha y hora y no se pueden borrar.',
      'f.4p': '¿Cómo aprende a usarlo la portería?', 'f.4r': 'La pantalla de portería fue diseñada para usarse sin manual. En la implementación capacitamos al equipo y acompañamos los primeros días.',
      'f.5p': '¿El huésped necesita descargar una app?', 'f.5r': 'No. La guía abre en el navegador del celular, por enlace o código QR, en portugués, inglés o español.',
      'f.6p': 'Tengo 400 flats. ¿El precio acompaña?', 'f.6r': 'Sí. El valor por flat baja en cada franja de volumen, y las operaciones grandes reciben implementación y soporte dedicados. Habla con nosotros para armar la propuesta.',
      'f.7p': '¿Mis datos están seguros?', 'f.7r': 'Cada condominio y cada empresa solo ve sus propios datos, con la regla aplicada en la base de datos. Los accesos administrativos piden verificación en dos pasos, todo queda registrado y el huésped firma el consentimiento de privacidad.',
      'fi.titulo': '¿Listo para transformar tu gestión?', 'fi.sub': 'Administrador, administradora, hotel o posada: habla con nosotros y mira el sistema funcionando con tu operación.',
      'fi.cta': 'Iniciar conversación por WhatsApp', 'fi.demo': 'o prueba el sistema de ejemplo ahora',
      'r.solucao': 'Una solución de', 'r.produto': 'Producto', 'r.contato': 'Contacto', 'r.legal': 'Legal', 'r.termos': 'Términos de uso', 'r.privacidade': 'Política de privacidad', flut: 'Ventas por WhatsApp',
      'at.selo': 'Una solución Atlântico', 'at.titulo': 'Hecho por quien opera hospedaje de verdad',
      'at.sub': 'Maree Hub es de Atlântico Facility &amp; Temporada, que administra flats por temporada en el Condomínio Maré Alta, en Tamandaré (Brasil). El sistema nació para resolver el día a día de esa operación.',
      'at.1t': 'Flats en Tamandaré y Carneiros', 'at.1': 'Central de reservas, promociones, paquetes y tabla de mareas en el sitio de Atlântico, con reserva directa y sin intermediarios.',
      'at.2t': 'Facility completo', 'at.2': 'Limpieza con estándar hotelero, mantenimiento, ropa de cama y personal tercerizado para condominios y propietarios.',
      'at.3t': 'Probado en la propia operación', 'at.3': 'Cada pantalla pasa primero por Maré Alta, con huéspedes, portería y mantenimiento reales.',
      'at.cta': 'Conocer el sitio de Atlântico', 'at.link': 'o ver los flats disponibles', 'at.alt': 'Página de inicio del sitio de Atlântico Facility &amp; Temporada'
    }
  };

  document.documentElement.classList.remove('sem-js');

  // Português original, para voltar a ele depois de trocar o idioma.
  var original = {}, alts = {};
  document.querySelectorAll('[data-t]').forEach(function (el) { var k = el.getAttribute('data-t'); if (!(k in original)) original[k] = el.innerHTML; });
  document.querySelectorAll('[data-t-alt]').forEach(function (el) { var k = el.getAttribute('data-t-alt'); if (!(k in alts)) alts[k] = el.getAttribute('alt'); });

  function escolhido() {
    try { var s = localStorage.getItem(CHAVE); if (s === 'pt-BR' || s === 'en' || s === 'es') return s; } catch (e) { /* sem armazenamento */ }
    var n = (navigator.language || 'pt').toLowerCase();
    return n.indexOf('en') === 0 ? 'en' : n.indexOf('es') === 0 ? 'es' : 'pt-BR';
  }

  function aplicar(lang) {
    var d = T[lang] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var k = el.getAttribute('data-t');
      el.innerHTML = lang === 'pt-BR' || d[k] == null ? original[k] : d[k];
    });
    document.querySelectorAll('[data-t-alt]').forEach(function (el) {
      var k = el.getAttribute('data-t-alt');
      el.setAttribute('alt', lang === 'pt-BR' || !d[k] ? alts[k] : d[k]);
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

  // Gaveta do menu no celular.
  var botao = document.getElementById('abrirMenu'), menu = document.getElementById('menu');
  function fechar() { menu.classList.remove('aberto'); botao.setAttribute('aria-expanded', 'false'); }
  botao.addEventListener('click', function (e) {
    e.stopPropagation();
    var abrir = !menu.classList.contains('aberto');
    menu.classList.toggle('aberto', abrir);
    botao.setAttribute('aria-expanded', abrir ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) fechar(); });
  document.addEventListener('click', function (e) { if (!e.target.closest('#menu') && !e.target.closest('#abrirMenu')) fechar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });

  // Linha sob o topo depois de rolar.
  var topo = document.getElementById('topo');
  var marcar = function () { topo.classList.toggle('rolou', window.scrollY > 8); };
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
