document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get('q');

  if (query) {
      fetch(`buscar.php?q=${query}`)
          .then(response => response.json())
          .then(data => {
              const resultadosBody = document.getElementById('resultadosBody');
              resultadosBody.innerHTML = ''; // Limpiar resultados previos

              data.forEach(producto => {
                  const row = document.createElement('tr');
                  row.innerHTML = `
                      <td>${producto.id}</td>
                      <td>${producto.nombre}</td>
                      <td>${producto.descripcion}</td>
                      <td>${producto.precio}</td>
                      <td>${producto.categoria}</td>
                  `;
                  resultadosBody.appendChild(row);
              });
          })
          .catch(error => {
              console.error('Error al obtener los resultados:', error);
          });
  }
});
