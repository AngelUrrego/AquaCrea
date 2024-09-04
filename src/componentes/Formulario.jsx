import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Formulario() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_sz6pfs7', 'template_4lumf9x', form.current, '7hbcDLg8QN9oR-BaK')
        .then((result) => {
            console.log(result.text);
            alert('Mensaje enviado exitosamente!');
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            alert('Hubo un error al enviar el mensaje.');
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} id='CONTACTO' className="containerFormulario">
        <h1>Formulario De Contacto</h1>
        <div className="subFormulario">
          <div className="formulario">
            <label>Nombre:</label>
            <input type="text" name="name" required />
            <label>Celular:</label>
            <input type="number" name="phone" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Mensaje:</label>
            <textarea name="message" required />
            <button type="submit">Enviar</button>
          </div>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093727!2d144.96305781550426!3d-37.81621897975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1202e2f4a0a!2sFlinders+Street+Station!5e0!3m2!1sen!2sau!4v1510700407580"
              width="500"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </form>
    );
  }