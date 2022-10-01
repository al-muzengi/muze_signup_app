import React,{useState} from 'react'
import Form from './Components/form'
import Form2 from './Components/form2'

const App = () => {
  return (
    <>
    <div className='typewriter_container'>
          <div id='one' className='typed_out'>Hello There</div>    
    </div><br />
    <div className='typewriter_container'>
          <div id='two' className='typed_out'>Please Fill In Your Details</div>
    </div>
    <Form/>
    </>
  )
}


export default App
