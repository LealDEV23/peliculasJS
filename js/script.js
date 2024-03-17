import generos from "../datos/generos.js"
import peliculas from "../datos/peliculas.js"
import tendencia from "../datos/tendenciahoy.js"

const listaCategoriaEl = document.querySelector("#listarCategorias");
const listaCategoriaMenuEl = document.querySelector("#listarCategoriasMenu");
const tendenciaEl = document.querySelector("#tendencia");



addEventListener("DOMContentLoaded",() => {
    mostrarCatLista()
    mostrarMenuCatLista()
    mostrarCartelera()
});



function mostrarCatLista(){
    let valor = ""
    generos.forEach(generoPelicula => {
        valor+=`<li><a class="dropdown-item" href="#" id="${generoPelicula.id}">${generoPelicula.name}</a></li>`
    })
    listaCategoriaEl.innerHTML=valor
}

function mostrarMenuCatLista(){
    let valor = ""
    generos.forEach(generoPelicula => {
        valor+=`<a href="#" class="btn btn-primary" id="${generoPelicula.id}">${generoPelicula.name}</a>`
    })
    listaCategoriaMenuEl.innerHTML=valor
}

function mostrarCartelera(){
    let valor = ""
    peliculas.forEach(tendencia => {
        valor+=`
        
        <div class="col-md-4 col-lg-3 mb-2 " >
                    <div class="card bg-light ">
                        <img src="img${tendencia.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center my-3 mb-5 fs-4">${tendencia.title}</h5>
            <hr>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-primary text-center">Detalle</a>
            </div>
        </div>
                    </div>
                </div>
        `
    })
    tendenciaEl.innerHTML=valor
}