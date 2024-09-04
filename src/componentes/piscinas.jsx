import React from 'react'

export default function PISCINAS(props) {
  return (
    <div className='main'>
        <div>
            <h1 >{props.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.parrafo }} />
        </div>    
            <img className="piscina1"src={props.url} alt="" />        
    </div>
  )
}
