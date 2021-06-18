//Api aplicada e transferida para pagina secundaria via "ID" de elementos

const urlParams = new URLSearchParams(window.location.search);
let busca = urlParams.get('id');

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sPagina() {
    let divTela3 = document.getElementById('tela3');
    var obj = (JSON.parse(this.responseText));
    let data = new Date(obj.release_date);
    var text = '';
        text += `        

        <div class="row">
            <div class="col-12 ">
              <img width="100%" height="100%" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}"
              <p id="Poster"></p>     
            </div>
            <div class="col-12 text">
              <p1"><strong>Sinopse</strong>: ${obj.overview}</p1>
              <p id="Sinopse"></p>
              <div class="row">
                    <div class="col-xs-12 col-sm-12 col-me-6 col-lg-6 ">
                        <p  id="Financeiro"><strong>Orçamento</strong>: ${obj.budget}</p>
                    </div>
  
                    <div class="col-xs-12 col-sm-12 col-me-6 col-lg-6 ">
                      <p id="Titulo"><strong>Filme</strong>: ${obj.title}</p>
                    </div>
  
                    <div class="col-xs-12 col-sm-12 col-me-6 col-lg-6 ">
                      <p id="Estreia"><strong>Estreia</strong>: ${data.toLocaleDateString()}</p>
                    </div>
              </div>
  
                <div class="col-12 ">
                  <p><strong>Lucro</strong>: ${obj.revenue}</p> 
                </div>
  
                <div class="col-12 ">
                 <p><strong>Avaliação</strong>: ${obj.popularity}</p> 
                </div>
            </div>
        </div>   
            <div class="col-12" style="text-align: right; padding-top: 10px; padding-bottom: 10px;">
                <a href="https://www.themoviedb.org/movie/${obj.id}"><button type="button" class="btn btn-dark">Site original</button></a>
            </div>
        </div>

    `;

    divTela3.innerHTML = text;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Pagina() {
    var xhr = new XMLHttpRequest();
    xhr.onload = sPagina;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${busca}?api_key=${KEY}&language=pt-BR`);
    xhr.send();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.onload = () => {

    Pagina();
}