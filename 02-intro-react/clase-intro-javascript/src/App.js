import logo from './logo.svg';
import './App.css';


function App() {
  const nombre = "Roberto Antonio";
  const apellido = "Alferes Gomez";
  let valorDato = 5;
  const nombreCompleto = "Hola "+ nombre + ' ' +apellido + " Mucho gusto";
  const persona = {
    nombre: nombre,
    apellido: apellido,
    edad: 27,
    direccion: {
      ciudad: "Cojutepeque",
      zipCode: '01101',
      lat: '13.2323232',
      lng: '39.1254565'
    }
  }
  if(true){
      let valorDato = 6;   
  }
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
