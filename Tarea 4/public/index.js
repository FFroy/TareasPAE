function buscarNoticias() {
    const query = document.getElementById('query').value;
    fetch(`/noticias?q=${query}`)
      .then(response => response.json())
      .then(data => {
        const noticias = data.articles.map(noticia => `
        <li>
          <h2>${noticia.title}</h2>
          <p>${noticia.description}</p>
          <a href="${noticia.url}">${noticia.url}</a>
        </li>
      `).join('');
      document.getElementById('noticias').innerHTML = noticias;
    })
    .catch(error => console.error(error));
}    