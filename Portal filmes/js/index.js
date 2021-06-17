//API The Movie DP aplicada no Carroussel
const KEY = 'd10f64fe5a966dc2ff624739632b3e42';

function sFilme() {
    let divTela = document.getElementById('tela');
    let obj = (JSON.parse(this.responseText));
    var text = '';
    for (i = 0; i < 3; i++){
        let filme = obj.results[i];
        let data = new Date(filme.release_date);
        let n = `active`;
        if (i != 0)
            n = '';
        text += (` 
    <div class="carousel-item ${n}">

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
              <img width="100%" height="100%" src="https://image.tmdb.org/t/p/w500/${filme.backdrop_path}"
              <p></p>     
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text">
              <p1">${filme.overview}</p1>
              <div class="row">
                    <div class="col-xs-12 col-sm-12 col-me-4 col-lg-4 ">
                        <p><strong>Orçamento</strong>: ${filme.budget}</p>
                    </div>
  
                    <div class="col-xs-12 col-sm-12 col-me-4 col-lg-4 ">
                      <p><strong>Filme</strong>: ${filme.title}</p>
                    </div>
  
                    <div class="col-xs-12 col-sm-12 col-me-4 col-lg-4 ">
                      <p><strong>streia</strong>E: ${data.toLocaleDateString()}</p>
                    </div>
              </div>
  
                <div class="col-12 ">
                  <p><strong>Lucro</strong>: ${filme.revenue}</p> 
                </div>
  
                <div class="col-12 ">
                 <p><strong>Avaliação</strong>: ${filme.popularity}</p> 
                </div>
            </div>
        </div>   
        <div class="col-12" style="text-align: right; padding-top: 10px;">
                <button type="button" class="btn btn-dark">Carregar mais filmes</button></div>
    </div>
    `);
    }
    divTela.innerHTML = text;
}

function Filme() {
    let xhr = new XMLHttpRequest();
    xhr.onload = sFilme;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=pt-BR`);
    xhr.send();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sDestaques() {
    let divTela2 = document.getElementById('tela2');
    var obj = (JSON.parse(this.responseText));
    var text = '';

    for (i = 0; i < 4; i++) {
        let filme = obj.results[i];
        text += `
        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                <a href="destaque.html?id=${filme.id}"><img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" width = "100%"></a> 
        </div>
    `;
    }
    console.log(text);
    divTela2.innerHTML = text;
}

function Destaques() {
    var xhr = new XMLHttpRequest();
    xhr.onload = sDestaques;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`);
    xhr.send();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.onload = () => {

    Filme();
    Destaques();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function sPesquisa() {
    var obj = (JSON.parse(this.responseText))
    var text = ''
    for (i = 0; i < obj.results.length; i++) {
        text = text + (`
        <div class="container" style="padding-top: 3%; padding-bottom: 3%;">
    <div class="row" style="justify-content: center;
    text-align: center; align-content: center;">
        <div class="col-xs12 col-sm-12 col-md-4 col-lg-8" ;>
        <h1 class="col-12 titulos">${obj.results[i].title}</h1>
            <img class="img-fluid" width="50%" height="50%"src="https://image.tmdb.org/t/p/w500/${obj.results[i].poster_path}">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8" style="background-color: rgb(94, 151, 216)">
            <b>ESTREIA: </b>${obj.results[i].release_date}
            <p><b>SINOPSE: </b>${obj.results[i].overview}</p>
            <a href="https://www.themoviedb.org/movie/${obj.results[i].id}"><button type ="value" class ="btn-primary">Ir para a pagina</button></a>
        </div>
    </div>
</div>
        `)
    }
    document.getElementById('Pesquisa').innerHTML = text;
}

function Pesquisa() {
    let query = document.getElementById('Pesq').value;
    var xhr = new XMLHttpRequest();
    xhr.onload = sPesquisa;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=d10f64fe5a966dc2ff624739632b3e42&query=${query}`);
    xhr.send();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------