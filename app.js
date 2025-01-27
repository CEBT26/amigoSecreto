// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

//Limpia el número puesto por el usuario 
function limpiarCaja()
{
    document.querySelector('#amigo').value = '';
}

//Función para agregar texto a un apartado de HTML
function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
}

//Función para agregar un amigo
function agregarAmigo()
{
    let nombreDeUsuario = document.getElementById("amigo").value; //Retorna el nombre dado por el usuario al apretar el botón con ID amigos

    //Verifica que haya un nombre
    if(nombreDeUsuario == "")   
    {
        alert("Por favor ingrese un nombre valido :)");

    }else{
        nombreAmigos.push(nombreDeUsuario); //Agrega el nombre en el último espacio

        asignarTextoElemento("#listaAmigos", `${nombreAmigos}`); 
    
        console.log(nombreAmigos); //Imprime el nombre en la consola
        limpiarCaja();  //Limpia el espacio para agregar nombres cada vez que se agrega uno nuevo

    }
}

//Función para sortear un amigo
function sortearAmigo()
{
    let nombreRandom = Math.floor(Math.random() * nombreAmigos.length) ;    //Genera un número random dentro del límite

    if(nombreRandom <= nombreAmigos.length)
    {
        asignarTextoElemento("#listaAmigos", "");   
        asignarTextoElemento("#resultado", `El amigo secreto sorteado es: ${nombreAmigos[nombreRandom]}`);
        console.log(`El amigo secreto sorteado es: ${nombreAmigos[nombreRandom]}`);

    }else{
        sortearAmigo();
    }
}



