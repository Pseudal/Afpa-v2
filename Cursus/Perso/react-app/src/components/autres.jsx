import React from 'react'

const Autres = (props) => {

    const handleClick = (e)=>{
        e.preventDefault()
        console.log(e)
    }
    
  return (
      <>
    <div>Autres {2}</div>
    <button onClick = {()=>props.func(7)}>Send</button>
    <button onClick={handleClick} name="btn" value="en">Envoyer</button>
    </>
  )
}

export default Autres