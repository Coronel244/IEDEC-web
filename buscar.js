function buscarProducto() {
  let query = document.getElementById("searchQuery").value;

  fetch("buscar.php?q=" + query)
    .then(response => response.json())
    .then(data => {
      let resultados = document.getElementById("resultadosBusqueda");
      resultados.innerHTML = "";

      if (data.length === 0) {
        resultados.innerHTML = "<p>No se encontraron productos.</p>";
      } else {
        data.forEach(producto => {
          resultados.innerHTML += `
            <div>
              <h3>${producto.nombre}</h3>
              <p>${producto.descripcion}</p>
              <p><strong>Precio:</strong> ${producto.precio}</p>
              <p><strong>Categoría:</strong> ${producto.categoria}</p>
            </div>
          `;
        });
      }
    })
    .catch(error => console.error("Error:", error));
}
