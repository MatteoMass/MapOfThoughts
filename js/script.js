

let posts = [
    {
        "isola": "uomini",
        "titolo": "Post di Prova",
        "testo": "Testo di prova",
        "data": "1/1/2024"
    },
    {
        "isola": "laghi",
        "titolo": "Post di Prova",
        "testo": "Testo di prova",
        "data": "1/1/2024"
    }
]



function mostraPostsPerCategoria(categoriaSelezionata) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
  
    posts.forEach(post => {
      if (categoriaSelezionata === 'tutte' || post.isola === categoriaSelezionata) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.titolo}</h2>
          <p>${post.testo}</p>
          <p>Data: ${post.data}</p>
          <p>Categoria: ${post.isola}</p>
        `;
        postsContainer.appendChild(postElement);
      }
    });
  }