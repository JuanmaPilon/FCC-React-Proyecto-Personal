import React from 'react';
import '../stylesheets/Testimonio.css'


class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../Imges/testimonio-${this.props.imagen}.png`)}
          alt='Foto de testimonios'
          />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'> <strong>{this.props.nombre}</strong> el {this.props.apodo}</p>
          <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className='texto-testimonio'>"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

  export default Testimonio;