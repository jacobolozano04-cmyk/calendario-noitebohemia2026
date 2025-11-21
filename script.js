// Pequeña funcionalidad de ejemplo: alert al clicar en Entradas
document.querySelectorAll('.event-info a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Se abrió el enlace de entradas');
  });
});
