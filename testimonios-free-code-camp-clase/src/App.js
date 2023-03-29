import React from 'react';
import './App.css';
import Testimonio from './Componentes/Testimonio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Esto es lo que dicen los pibes de Juanma:</h1>
          <Testimonio 
            nombre='Elio'
            apodo='Carpincho Matero'
            imagen='elio'
            cargo='CEO / Senior programador oculto'
            empresa='Riot Games'
            testimonio='Jugar con Juanma es lo mejor, un crack, matesito?'
            />
            <Testimonio
            nombre='Sebas'
            apodo='Odiador de campeones compulsivo'
            imagen='seba'
            cargo='Programador backend / Odiador de Indios'
            empresa='Riot Games'
            testimonio='Jugar me con Juanma me cambio la vida, ahora se jugar, gankear y tengo mas odio por los indios'
            />
             <Testimonio 
            nombre='Pity'
            apodo='El splipusher en pija'
            imagen='pity'
            cargo='Toplane nudista / Anfitrion y transmisor de la rosa de guadalupe'
            empresa='Riot Games'
            testimonio='Juego con juanma porque sino me flamea y me reporta * se desconecta *'
            />
             <Testimonio 
            nombre='Caro'
            apodo='El soporte ladron'
            imagen='caro'
            cargo='Ingeniera de datos / Robadora de kills por excelencia'
            empresa='La cocina de Juanma'
            testimonio='Esa kill me la tenia merecida, ahora duermes afuera por hablar de mas'
            />
        </div>
      </div>
    );
  }
}

export default App;
