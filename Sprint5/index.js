/* Let del boton para traer el joke y Let para mastrar el joke */
let getJoke = document.getElementById('boton');
let writeJoke = document.getElementById('result')

//Ejercicio 1 y 2
getJoke.addEventListener('click', gettingJoke);

//Ejercicio 4
//let temperatura = document.getElementById('temp');
/* let iconTempera = document.getElementById('description'); */
//let ciudad = document.getElementById('location');  
let temperatura = document.querySelector('.temp');
/* let iconTempera = document.querySelector('.description'); */
let ciudad = document.querySelector('.location');  

let arrayLikes = [];
let objectJoke = {};

/* ------------- Metodo para mostrar el Joke despues de clickear el boton "Next Joke" ---------- */

async function gettingJoke() {
    let response = await fetch ('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    let jokeJsonObject = await response.json();
    //Ejercicio 1 
    console.log(jokeJsonObject.joke)
    //Ejercicio 2
    writeJoke.innerHTML = jokeJsonObject.joke;
    /* sacando el joke en texto para subirlo al array de jokes para el ejercicio 3 */
    objectJoke = jokeJsonObject.joke;
        
    /* ---Ejemplo de como hacer el fetch de otra forma --- */
    /* fetch ('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }
    }).then( async (jokeJsonObject) => {
      const chiste = await jokeJsonObject.json();    
      console.log(chiste.joke);
      writeJoke.innerHTML = chiste.joke;
    }); */
    
}
/* ------Ejercicio 3 ------- */
function pushPunctuation(puntos) {
  const d = new Date();
  let tex = d.toISOString();

  let objectLikes = {
    'joke': objectJoke,
    'score': puntos,
    'date': tex
  };

  arrayLikes.push(objectLikes);
  console.log(arrayLikes) 
}

/* ----Ejercicio 4 ------ */

function weather() {
  var key = 'abf9db145643b62ab1718acb0f458813';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona,spain&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    temperatura.innerHTML = celcius + 'º';
    /* iconTempera.innerHTML = data.weather[0].icon; */
    ciudad.innerHTML = data.name;

  })
  .catch(function() {
    // catch any errors
  });
}

window.onload = function() {
  weather(); 
}  