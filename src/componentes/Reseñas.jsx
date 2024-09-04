import React from 'react';

export default function Reseñas(props) {
  return (
    <div className='subreseñas'>
      <img src={props.url} alt="" className="reseñasimg" />
      <div>
        <h3>{props.subtitle}</h3>
        <p>{props.parrafo}</p>
        {Array.from({ length: props.stars }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
      </div>
    </div>
  );
}
