
/* // Función para cargar y renderizar el fragmento HTML */

function loadHTMLFragment(url, containerId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById(containerId);
      container.innerHTML = html;
    })
    .catch(error => console.error('Error al cargar el fragmento HTML:', error));
}