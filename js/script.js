

let posts = [
  {
    "titolo": "Il sussurro dei teschi",
    "id": "sussurro_teschi",
    "testo": `
    Lo scorso anno ho visitato la mostra sul <b>Futurismo</b> a Padova. Tra tutti i quadri e le opere esposte quella che mi ha colpito di più é stata 'Autoritratto con Teschi' di Luigi Russolo.
    <br/>
    Leggendo le diverse descrizioni di questo quadro, quello che l'autore voleva trasmettere era l'ineluttabilità della morte. Ma non è quello che mi ha colpito, infatti appena ho posto lo sguardo sul quadro, mi è subito sorta una domanda, ovvero 'Che cosa gli stanno dicendo quei teschi?'.
    <br/>
    Quello che ci ho visto io era un uomo sorpreso, sconvolto da quello che gli sta venendo detto da quei tetri teschi disposti intorno a lui. Di cosa stanno parlano, quale nascosta verità gli stanno sussurrando?
    <br/>
    `,
    "snippet": "Lo scorso anno ho visitato la mostra sul <b>Futurismo</b> a Padova. Tra tutti i quadri e le opere esposte quella che mi ha colpito di più é stata 'Autoritratto con Teschi' di Luigi Russolo.",
    "immagine": "assets/img/posts/russolo.jpg",
    "data": "27/04/2024"
  },
  {
    "titolo": "La Fattoria degli Animali",
    "id": "fattoria_animali",
    "testo": `
    Ho da poco terminato la lettura del romanzo di G. Orwell '<b>La Fattoria degli Animali</b>', e l'idea che mi ha trasmesso è quella della centralità della conoscienza.
    <br/>
    Sembra infatti che per gli animali della fattoria, l'emancipazione dal fattore umano, non comporti un effettivo miglioramento della vita o un maggior aumento di libertà, questo perchè la maggior parte di loro è ignorante e non riesce a prendere decisioni o a ragionare con la propria testa. Quello che accade quindi è la sostituzione di un padrone con un altro, ugualmente spietato, ma questa volta che riesce a soggiogare gli altri animali facendo leva sulla loro ignoranza. 
    <br/>
    Analogalmente a quanto raccontato in '<b>1984</b>' anche qui il "popolo" viene controllato mediante l'informazione, si rettificano quindi fatti storici accaduti, in modo da supportare una propria idea, o ancora si modificano leggi e regole per giustificare il comportamento dei governanti.
    <br/>
    Quello che ritorna è la modalità con cui il controllo sulla storia, e per estensione sull'informazione, sia fondamentale per controllare un popolo, sia questo di uomin o animali umanizzati. Da questo si evince anche l'esatto opposto, ovvero che per essere liberi, è necessario essere informati e consapevoli della propria storia. 
    `,
    "snippet": "Ho da poco terminato la lettura del romanzo di G. Orwell '<b>La Fattoria degli Animali</b>', e l'idea che mi ha trasmesso è quella della centralità della conoscienza.",
    "immagine": "assets/img/posts/fattoria.jpg",
    "data": "29/03/2024"
  }
]



function mostraPosts(filter) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';
  postsContainer.style.display = 'flex';
  postsContainer.style.flexWrap = 'wrap';

  var lista = posts;
  lista.forEach(post => {
    if (post.titolo.includes(filter) || filter  === '') {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.style.marginRight = '1rem';

      postElement.style.cursor = 'pointer';

      postElement.addEventListener('click', () => {
        window.location.href = `posts.html?post=${post.id}`;
      });


      postElement.innerHTML = `
        <div class="card bg-light mb-3" style="width: 20rem; ">
        
          <div class="card-body">
            <h4 class="card-title">${post.titolo}</h4>
            <hr/>
            <p style="text-align: left !important; font-size:16px !important; text-transform: none !important;">${post.snippet}</p>
          </div>
          <div class="card-footer">${post.data}</div>
        </div>
        `;

      postsContainer.appendChild(postElement);
    }
  });
}






