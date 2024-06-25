
function mostraPosts(filter) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';
  postsContainer.style.display = 'flex';
  postsContainer.style.flexWrap = 'wrap';

  var lista = posts;
  lista.forEach(post => {
    if (post.titolo.toLowerCase().includes(filter.toLowerCase()) || filter  === '') {
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



let posts = [
  {
    "titolo": "Intelligenza Artificiale e Umana",
    "id": "intelligenza_artificiale_umana",
    "testo": `
    In questi ultimi giorni ho notato una divertente analogia tra il progresso repentino dell'IA avvenuto negli ultimi anni e la regressione/semplificazione del dibattito in certi in alcuni temi, principalmente in america e legati al concetto di <b>'cancel culture'</b>.
    <br/> 
    Il punto di svolta nei modelli di AI, riguarda la pubblicazione di un paper chiamato <b>'Attention is all you need'</b>, che detto in maniera semplice introduce un algoritmo per far comprendere al modello in maniera approfondita il contesto della frase in cui una parola è calata. Prima di questo paper, i modelli faticavano a comprendere il contesto di una parola o una frase, e di conseguenza non ne capivano il significato.
    <br/> 
    Esattamente lo stesso fenomeno, ma con segno negativo, è accadato in certi movimenti culturali, come la sopracitata <b>Cancel Culture</b>. Come suggerisce il nome, queste correnti si fanno promotori della cancellazioni di persone, parole, testi e via dicendo, che per un motivo o per un altro non rispecchiano i valori odierni, eliminandoli da qualisiasi contesto, sia quello colloquale, accademico o lavorativo. 
    <br/>
    La parola magica in entrambi i mondi è il <b>contesto</b>, nel primo ci si è sbattuti per far in modo che le macchine possano comprenderlo a fondo, nel secondo sembra che venga completamente rimosso da ogni dibattito, appiattendo ogni cosa a 'giusto' o 'sbagliato'.
    `,
    "snippet": "Durante la serata del Chroma Festival con ospite il rapper Massimo Pericolo, mi ha colpito molto una sua frase detta sul palco.",
    "immagine": "assets/img/posts/cancel_culture_ai.jpg",
    "data": "25/06/2024"
  },
  {
    "titolo": "Massimo Pericolo, Dolore e Scelta",
    "id": "dolore_scelta",
    "testo": `
    Durante la serata del Chroma Festival con ospite il rapper Massimo Pericolo, mi ha colpito molto una sua frase detta sul palco.
    <br/>
    <b>'Il dolore è inevitabile, la sofferenza è una scelta'. </b>
    <br/>
    Nonostante questa frase possa risultare sconculsionata, banale e fuori luogo per un concerto rap, credo nasconda di più. 
    Infatti, mi è subito sembrata una frase attribuibile ad un filosofo stoico ma in chiave moderna. 
    Le due parti di cui si compone la frase contengono l'essenza del pensiero stoico: l'impossibilità di controllare gli eventi esterni, ovvero l'inevitabilità del dolore nella vita, e la capacità di scegliere come reagire a questo dolore, quindi se soffrirlo, affrontarlo o considerarlo per quello che è: un atto al di fuori del nostro controllo. 
    <br/>
    `,
    "snippet": "Durante la serata del Chroma Festival con ospite il rapper Massimo Pericolo, mi ha colpito molto una sua frase detta sul palco.",
    "immagine": "assets/img/posts/massimo_pericolo.jpg",
    "data": "15/06/2024"
  },
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

