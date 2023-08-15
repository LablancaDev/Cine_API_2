//CONSUMO DE API TMDB

// PAGINACIÓN

let pagina = 1;

let atras = document.getElementById("atras")
let siguiente = document.getElementById("siguiente")
const numberPage = document.getElementById("page");

siguiente.addEventListener("click", () =>{
    if(pagina < 1000){
        pagina += 1;
        conexion();
        numberPage.innerHTML = pagina;//mostrar el num de la página
    }
});

atras.addEventListener("click", () =>{
    if(pagina >1){
        pagina=pagina -1;
        conexion();
        numberPage.innerHTML = pagina;
    }
});

//CONSULTA DE DATOS A LA API E INSERCIÓN DE DATOS EN EL DOCUMENTO


const conexion =async () =>{
    try{
        const consulta = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d4983dafdd2af3213fc32951bd597ec6&language=es-ES&page=${pagina}`);
        console.log(consulta);

        if(consulta.status === 200){
            const datos = await consulta.json();
            console.log(datos.results);

        //Recorrer Datos con bucle forEach, crear elementos html en el DOM y mostrarlos en el documento

        let series = "";
            
        datos.results.forEach(parametro => {
            console.log(parametro.poster_path)

            series += `
            
            <div class="cartel">
            
            <a class="enlace"><img class="img" src="https://image.tmdb.org/t/p/w500/${parametro.poster_path}"></a>

            <h3 class="title">${parametro.title}</h3>
            
            </div> 

            
            `;
            
        });
        
        document.getElementById("contenido").innerHTML = series;

    //Consultar sipnosis   
    // const enlace = document.getElementById("enlace");
    // let texto = "";
    
    //     enlace.addEventListener("click", ()=>{
    //         datos.results.forEach(dato => {
                
                
    //             texto += `
                
    //             <div class="texto">
    //             <p class="parrafo">${dato.overview}</p>
    //             </div>
                
    //             `  
    //             console.log(dato.overview);
    //     })
        
    //     document.getElementById("contenido").innerHTML = texto;

    //     });
    };
    
      
     
    
        

    }catch{
        console.log("Error!!!")
    }
};

conexion();




// https://api.themoviedb.org/3/movie/top_rated?api_key=d4983dafdd2af3213fc32951bd597ec6&language=es-ES&page=${pagina}










