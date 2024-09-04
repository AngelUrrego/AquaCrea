/*Componentes*/ 
import PISCINAS from './componentes/piscinas'
import Reseñas from './componentes/Reseñas'
import Formulario from './componentes/Formulario'

/*Importacion de estilos  */
import './styles/App.css'
import './styles/Reseñas.css'
import './styles/Servicios.css'
import './styles/Main.css'
import './styles/Formulario.css'

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

/*Importacion de imagenes logos y demas*/
import logo from './img/logo.png'
import whatsapp from './img/whatsapp.png'
import piscina1 from './img/piscina1.png'
import piscina2 from './img/piscina2.png'
import piscina3 from './img/piscina3.jpeg'
import construccion from './img/construccion.png'
import diseño from './img/diseño.png'
import remodelacion from './img/remodelacion.png'
import avatar from './img/Avatar.png'
import avatar2 from './img/Avatar2.png'
import avatar3 from './img/Avatar3.png'
import avatar4 from './img/Avatar4.png'
import avatar5 from './img/Avatar5.png'
import avatar6 from './img/Avatar6.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  
  
  return (
    <>

    <div className='header'>
      <a href="#INICIO" ><img src={logo} className='imglogo' alt='Logo'/></a>
      
      <button className='hamburger' onClick={toggleMenu}>
        ☰
      </button>
      <div className={`subheader ${menuOpen ? 'active' : ''}`}>
        <a href='#INICIO' className='links'>INICIO</a>
        <a href='#SERVICIOS' className='links'>SERVICIOS</a>
        <a href='#RESEÑAS' className='links'>RESEÑAS</a>
        <a href='#CONTACTO' className='links'>CONTACTO</a>
        <a className='linkwhatsapp' href='https://wa.me/3138431612' target='_blank' rel='noopener noreferrer'>
          WHATSAPP <img src={whatsapp} className='imgwhatsapp' alt='WhatsApp'/>
        </a>
      </div>
    </div>

    <div id='INICIO' className='contenedorPiscinas'>

    
      <PISCINAS
        title="Eden Aqua"
        parrafo="Descubre el lujo y la elegancia con la piscina EdenAqua, una joya en el diseño 
        de espacios acuáticos que combina estilo, comodidad y funcionalidad. Esta piscina, 
        construida con precisión en<strong>La Mesa Cundinamarca</strong>, 
        transforma tu jardín en un oasis personal, ofreciendo una experiencia de baño inigualable."
        url={piscina1}
      />  

      <PISCINAS
        title="Oasis Azul"
        parrafo="En Aquacrea, somos especialistas en la construcción y diseño de piscinas, comprometidos
          a transformar tu visión en una realidad acuática excepcional. Con años de experiencia en el sector, 
          nuestro equipo de profesionales altamente cualificados está dedicado a ofrecer soluciones 
          innovadoras y personalizadas que se ajustan a tus necesidades y deseos."
        url={piscina2}
      />  

      <PISCINAS
        title="Cascada Celestial"
        parrafo="En Aquacrea, somos especialistas en la construcción y diseño de piscinas, comprometidos
          a transformar tu visión en una realidad acuática excepcional. Con años de experiencia en el sector, 
          nuestro equipo de profesionales altamente cualificados está dedicado a ofrecer soluciones 
          innovadoras y personalizadas que se ajustan a tus necesidades y deseos."
        url={piscina3}
      />  

    </div>

    <div  id='SERVICIOS' className='servicios'>
      <h1>Nuestros servicos</h1>  
      <div className='subservcios'>
        <div className='contenedor'>
          <img src={diseño} alt="" />
          <h2>Diseño Personalizado</h2>
          <p>Transforma tu espacio exterior con un diseño de piscina completamente personalizado. 
            En Aquacrea, creamos piscinas únicas que reflejan tu estilo y necesidades.</p>
        </div>
        <div className='contenedor'>
          <img src={construccion} alt="" />
          <h2>Construccion de Piscinas</h2>
          <p>En Aquacrea, somos expertos en la construcción de piscinas de alta calidad. 
            Desde la planificación hasta la ejecución, 
            nuestro equipo garantiza un proceso eficiente y resultados impresionantes.</p>
        </div>
        <div className='contenedor'>
          <img src={remodelacion} alt="" />
          <h2>Remodelacion</h2>
          <p>Renueva tu piscina con Aquacrea y dale un nuevo aire a tu espacio acuático.
             Nuestra experiencia en remodelación transforma piscinas antiguas en modernas obras de arte,
             mejorando tanto su estética como su funcionalidad.</p>
        </div>
      </div> 
    </div>

    <div  id='RESEÑAS' className='containerReseñas'>
  <h1>Reseñas</h1>
  <div className='reseñas'>
    <Reseñas
      url={avatar}
      subtitle="Ana Gabriela:"
      parrafo="Aquacrea superó nuestras expectativas. La piscina quedó increíble y 
      todo el proceso fue muy profesional. ¡Estamos encantados con el resultado!"
      stars={4}
    />

    <Reseñas
      url={avatar4}
      subtitle="Carlos Martin:"
      parrafo="El equipo de Aquacrea fue excepcional. Remodelaron nuestra piscina en tiempo récord, 
      y ahora parece sacada de una revista. ¡Totalmente recomendados!"
      stars={5}
    />
    <Reseñas
      url={avatar2}
      subtitle="Laura Lopez:"
      parrafo="Aquacrea estuvo con nosotros en cada etapa, desde el diseño hasta la construcción.
        Nuestra piscina se ha convertido en el corazón de nuestro hogar"
      stars={5}
    />
  </div>
  <div className='reseñas'>
    <Reseñas
      url={avatar5}
      subtitle="Jorge Rodriguez:"
      parrafo="No podríamos estar más felices con la piscina que construyó Aquacrea. 
      Calidad, profesionalismo y un diseño que se adapta perfectamente a nuestro espacio."
      stars={4}
    />

    <Reseñas
      url={avatar3}
      subtitle="Marta Saavedra:"
      parrafo="Decidimos remodelar nuestra piscina con Aquacrea y fue la mejor decisión.
       Han convertido nuestro patio en un verdadero oasis. ¡Gracias, equipo!"
      stars={5}
    />
    <Reseñas
      url={avatar6}
      subtitle="Andrés Toro:"
      parrafo="Aquacrea nos ayudó a hacer realidad nuestra piscina soñada. 
      El diseño personalizado y la construcción fueron de primera clase. ¡El resultado es espectacular!"
      stars={5}
    />
  </div>
</div>


    <Formulario></Formulario>


    </>
  )
}

export default App
