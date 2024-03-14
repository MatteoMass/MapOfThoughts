

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
        <div class="card bg-light mb-3" style="max-width: 20rem;">
          <div class="card-body">
            <h4 class="card-title">${post.titolo}</h4>
            <p class="card-text">${post.testo}</p>
          </div>
          <div class="card-footer">${post.data}</div>
        </div>

        `;
          
        postsContainer.appendChild(postElement);
      }
    });
  }



