/* Let del boton para traer el joke y Let para mastrar el joke */
let getJoke = document.getElementById('boton');
let writeJoke = document.getElementById('result')

//Ejercicio 1 y 2
//getJoke.addEventListener('click', gettingJoke);
getJoke.addEventListener('click', dosChistes);

// Ejercicio 3
let arrayLikes = [];
let objectJoke = {};

//Ejercicio 4
//weather();
let temperatura = document.querySelector('.temp');
let descricionTemp = document.querySelector('.description');
let ciudad = document.querySelector('.location');  

/* -----Ejercicio 1 y 2------- */
async function gettingJoke() {
    let response = await fetch ('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    let jokeJsonObject = await response.json();
    //Ejercicio 1 
    //console.log(jokeJsonObject.joke)
    //Ejercicio 2
    writeJoke.innerHTML = jokeJsonObject.joke;
    //Ejercicio 3 (parte)
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
async function weather(){
  let key = 'abf9db145643b62ab1718acb0f458813';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona,spain&appid=' + key)  
  .then (async(response) => {
    const dataTemp = await response.json()
    //console.log(dataTemp.main.temp)
    let celcius = Math.round(parseFloat(dataTemp.main.temp)-273.15);
    temperatura.innerHTML = celcius + 'º';
    descricionTemp.innerHTML = dataTemp.weather[0].description;
    ciudad.innerHTML = dataTemp.name;   
  })
} 
window.onload = function() {
  weather(); 
}  

/* ----- Ejercicio 5 ---- */
async function masJokes(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then ( async(response) => {
      const data = await response.json()
      //console.log(data.value)
      writeJoke.innerHTML = data.value; 
      objectJoke = data.value;

    })
}


function dosChistes() {
  let arrayApis = ['norris', 'dad'];
  let aleatorio = arrayApis[Math.floor(Math.random() * arrayApis.length)];
  if (aleatorio == 'norris') {
    masJokes();
  } else {
    gettingJoke();
  }
} 
