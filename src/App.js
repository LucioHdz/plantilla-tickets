import { useState } from 'react';
import './App.css'
import logo from './img/logo_transparent.png'
import qr from './img/qr2.png'
import html2canvas from 'html2canvas';





function captureScreen() {

  const cardElement = document.querySelector('.card');

  html2canvas(cardElement)
    .then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'screenshot.png';
      link.click();
    })
    .catch((error) => {
      console.error('Error al capturar la pantalla:', error);
    });
}



function App() {
  const [plan, setPlan] = useState('');
  const [horas, setHoras] = useState('');
  const [velocidad, setVelocidad] = useState('');
  const [red, setRed] = useState('FICHAS-TESJI-E2');
  const [precio, setPrecio] = useState('5');
  const ok = (e) => {
    e.preventDefault();
    captureScreen()
  }
  return (
    <div className="App">
      <form className='form' onSubmit={ok}>
        <input type='text' placeholder='Horas' onChange={(e) => setHoras(e.target.value)} />
        <input type='text' placeholder='Velocidad' onChange={(e) => setVelocidad(e.target.value)} />
        <input type='text' placeholder='Red' onChange={(e) => setRed(e.target.value)} />
        <input type='number' placeholder='Numero Telefono' onChange={(e) => setPlan(e.target.value)} />
        <input type='number' placeholder='precio' onChange={(e) => setPrecio(e.target.value)} />
        <button >Capturar Pantalla</button>

      </form>
      <div className='card'>
        <div className='card-body'>
            <h2 className='nombre-negocio'>Papeleria <br/> TESJI</h2>
            <h1 className='precio'>${precio}</h1>
          <div className='card-users'>
            <img src={logo} className='imagen' />
            <img src={qr} className='imagen2' />
            <div className='datos'>
              <br/>
              <br/>
              <br/>
              <p className='fs'>Contacto: {plan}</p>
              <p className='fs'>Horas: {horas} horas</p>
              <p className='fs'>Velocidad: {velocidad} Mb/s</p>
              <p className='fs'>Wifi: {red}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
