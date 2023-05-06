import React from 'react';
import './estilos/App.css';
import Display from './componentes/Display';
import Boton from './componentes/Boton';
import banner_bici from './img/banner_bici.jpg'


class App extends React.Component {
  constructor() {
    super()
    this.contador= 0;
  }

  manejarClick(){
    console.log("click")
  }

  clearClick = ()=>{
   console.log("clear click")
  }

  render() { 
    return (
      <div className="App">
        <div className='contendor_app'>
          <h1>
            Cantidad de km que deseas recorrer
          </h1>

          <div className="contenedor_img">
            <img 
              className='img'
              src={banner_bici}
              alt='baner'
            />
          </div>

          <Display 
            contador={this.contador}
          />

          <div className='contendor_boton'>
            <Boton 
              text='Click' 
              esBotonClick= {true}
              manejarClick={this.manejarClick}
            />

            <Boton 
              text='Reiniciar'
              esBotonClick= {false}
              manejarClick={this.clearClick}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
