// Recebe os avisos do guia do hóspede (D65) e abre o guia ao tocar.
self.addEventListener('push', (evento) => {
  let dados = {};
  try { dados = evento.data ? evento.data.json() : {}; } catch (e) { dados = { titulo: 'Aviso da sua hospedagem', texto: evento.data && evento.data.text() }; }
  evento.waitUntil(self.registration.showNotification(dados.titulo || 'Aviso da sua hospedagem', {
    body: dados.texto || '',
    tag: dados.etiqueta,
    icon: '/favicon.ico',
    data: { url: dados.url || '/' },
  }));
});

self.addEventListener('notificationclick', (evento) => {
  evento.notification.close();
  const url = (evento.notification.data && evento.notification.data.url) || '/';
  evento.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((janelas) => {
    for (const j of janelas) {
      if (j.url === url && 'focus' in j) return j.focus();
    }
    return self.clients.openWindow(url);
  }));
});
