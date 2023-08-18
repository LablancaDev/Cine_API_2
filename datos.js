// PAGINACIÓN:
let pag = 1;

const siguiente = document.getElementById("siguiente");
const atras = document.getElementById("atras");
const numberPage = document.getElementById("page");

siguiente.addEventListener("click", () =>{
    if(pag < 1000){
        pag += 1;
        consultaApi();
        numberPage.innerHTML = pag;
    }
});

atras.addEventListener("click", () =>{
    if(pag > 1){
        pag -= 1;
        consultaApi();
        numberPage.innerHTML = pag;
    }
})


// CONSULTA DE DATOS A LA API E INSERCIÓN DE DATOS EN EL DOCUMENTO

const cont = document.getElementById("cont-sinopsis")

function consultaApi(){

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d4983dafdd2af3213fc32951bd597ec6&language=es-ES&page=${pag}`)
.then(function(res){
    console.log(res)
    res.json()

    .then(function(datos){
        console.log(datos)

        // mostrarSinopsis(datos);

        array  = "";

// function mostrarSinopsis(datos){
    datos.results.forEach(datoApi => {
        array +=`
        
        <div class="cartel">
        
        <h2 class="title">${datoApi.title}</h2>
        
        <p class="parrafo">${datoApi.overview}</p>

        
        </div>
        
        
        `
    });

    document.getElementById("cont-sinopsis").innerHTML = array;
// }

    })
})
}



// array  = "";

// function mostrarSinopsis(datos){
//     datos.results.forEach(datoApi => {
//         array +=`
        
//         <div class="cartel">
        
//         <h2 class="title">${datoApi.title}</h2>
        
//         <p class="parrafo">${datoApi.overview}</p>

        
//         </div>
        
        
//         `
//     });

//     document.getElementById("cont-sinopsis").innerHTML = array;
// }

consultaApi();