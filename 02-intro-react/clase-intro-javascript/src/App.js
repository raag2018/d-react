import logo from './logo.svg';
import './App.css';

function App() {
  const nombre = "Roberto Antonio";
  const apellido = "Alferes Gomez";
  let valorDato = 5;
  const nombreCompleto = "Hola "+ nombre + ' ' +apellido + " Mucho gusto";
  //objeto literal
  const persona = {
    nombre: 'Robert',
    apellido: apellido,
    edad: valorDato,
    direccion: {
      ciudad: "Cojutepeque",
      zipCode: '01101',
      lat: '13.2323232',
      lng: '39.1254565'
    }
  }
  /*if(true){
      valorDato = 6;   
  }*/
  const persona2 = {...persona};
  //console.log(persona);
  //console.log(persona2);
  persona2.nombre = 'Juan perez';
  //arreglos
  //let arreglo = new Array(100);
  const arreglo1 = [1,2];
  arreglo1.push(3);
  arreglo1.push(4);
  const arreglo2 = [...arreglo1, 5];
  //console.log(arreglo2);
  const arreglo3 = arreglo2.map(function(r){
    return r * 2;
  });
  //console.log(arreglo3);
  function saludar(nombre){
    return `Hola ${nombre}`;
  }
  const saludo = function(nombre){
   return `Hola ${nombre}`; 
  }
  const saludos = (nombre) => `Hola ${nombre}`;
  console.log(saludos('petter'));
  function getUsuarioActivo(){
    return {
      uid: 123,
      username: 'jkjhk'
    }
  } 
  const useState = (valor) => {
    return [valor, () => {console.log('hola')}];
  }
  const [valor1, valor2] = useState(2);
  console.log(valor1);
  valor2();
  //IMPORT Y EXPORT
  const getHeroeById = (id) => {
    return heroes.find((heroe) => {
      if(heroe.id){
        return true;
      }else{
        return false;
      }
    });
  }
  const getHeroe = (id) => {return heroes.find((heroe) =>  heroe.id === id)}
  console.log(getHeroe(4));
  console.log(getHeroeById(2));
  const getHeroeAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        //console.log('Termina en 2 seg...');
        //resolve();
        const heroe1 = impHeroe(id);
        //resolve(heroe1);
        if(heroe1){
          resolve(heroe1);
        }else{
          reject('No se encontro el heroe');
        }
      }, 1000);
    });
    return promesa;
  }
  getHeroeAsync(1)
  .then( (heroe1) => {
    //console.log('then la promesa');
    //console.log('Heroe: ',heroe1);
  })
  .catch(err => console.warn(err));


  const apiKey = process.env.REACT_APP_GLAPHY_KEY;
  let url = 'http://api.giphy.com/v1/gifs/random';
  let baseUrl = url + `?api_key=` + apiKey + '&limit=1';
  //console.log(`api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const peticion = fetch(baseUrl);
  peticion
  .then((resp) => resp.json())
  .then(({data}) => {
    //console.log(data.images.original.url);
    const {url} = data.images.original;
    console.log(url);
    const img = document.createElement('img');
    if (url !== '' && url.length > 5){
      img.src = url;
      img.style.height = '100px';
      img.style.width = '200px';  
      document.body.appendChild(img);
    } 
  })  
  .catch(console.warn);
  /**********  ASYNC AWAIT  ************/
  /*utilizando async*/
  const getImage = async() => {
    const respuesta = await fetch(baseUrl);
    const {data} = await respuesta.json();
    const urlAsync = data.images.original;
    const imgAsc = document.createElement('img');
    if (urlAsync !== '' && urlAsync.length > 5 ){
      imgAsc.src = urlAsync;
      imgAsc.style.height = '100px';
      imgAsc.style.width = '200px';  
      document.body.appendChild(imgAsc);
    } 
  }
  getImage();
  console.log(process.env.GLAPHY_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> "{nombreCompleto}"</p>
        <p> edad: {persona.edad}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprender React
        </a>
      </header>
    </div>
  );
}

export default App;
