/* Estilo básico para calendario Noite Bohemia */

#calendario {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif; /* Puedes cambiar a la tipografía de la compañía si la sabes */
  color: #222; /* Texto oscuro */
  background-color: #f8f4f0; /* Fondo claro tipo papel */
  padding: 20px;
  border-radius: 10px;
}

.actuacion {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.actuacion:last-child {
  border-bottom: none;
}

.actuacion-fecha {
  font-weight: bold;
  color: #b22222; /* Color rojizo de Noite Bohemia */
  margin-bottom: 5px;
}

.actuacion-titulo {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 3px;
}

.actuacion-lugar {
  font-style: italic;
  color: #555;
}

/* Opcional: efecto hover */
.actuacion:hover {
  background-color: #f0e8e0;
  transition: background-color 0.3s;
}
