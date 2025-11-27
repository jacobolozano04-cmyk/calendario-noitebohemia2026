// ============================
// Script mínimo para calendario Noite Bohemia
// ============================

// Función para ordenar actuaciones por fecha y hora
function ordenarActuaciones(a, b) {
  const fechaA = new Date(a.fecha + ' ' + (a.hora || '00:00'));
  const fechaB = new Date(b.fecha + ' ' + (b.hora || '00:00'));
  return fechaA - fechaB;
}

// Cargar actuaciones desde JSON
fetch('actuaciones.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('calendario');
    data.sort(ordenarActuaciones);
    data.forEach(act => {
      const div = document.createElement('div');
      div.className = 'actuacion';
      div.innerHTML = `
        <div class="actuacion-fecha">${act.fecha} ${act.hora}</div>
        <div class="actuacion-titulo">${act.titulo}</div>
        <div class="actuacion-lugar">${act.lugar}</div>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => console.error('Error cargando actuaciones:', err));


