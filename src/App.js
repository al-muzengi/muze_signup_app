import React,{useState} from 'react'


const App = () => {
  const [people, setPeople] = useState([])
  const [ person,  setPerson] = useState({
    id:'',
    firstName:'',
    lastName:'',
    age:'',
    email:''
  })


  const handleInput = (e) =>{
    let value = e.target.value
    let name = e.target.name
    setPerson({...person, [name]:value })
  }
  console.log(person)

  const addPerson = (e) =>{
    e.preventDefault()
    const newPerson = {...person, id:people.length}
    if(person.firstName && person.age && person.email && person.lastName){
      setPeople([...people,newPerson])
      setPerson({firstName:'',lastName:'',age:'',email:''})
    }
  else{
    alert('The Input Fields cannot be empty on Submission.')
  }
}

  return (
    <>
    <div className='typewriter_container'>
          <div id='one' className='typed_out'>Hello There</div>    
    </div><br />
    <div className='typewriter_container'>
          <div id='two' className='typed_out'>Please Fill In Your Details</div>
    </div>
    <div className='form_container'>
      <form action="">
        <div className='input'>
          <label htmlFor="firstName"> First Name : </label>
        <input type="text" name="firstName" id="firstName" value={person.firstName}  onChange={handleInput}/>
        </div>

        <div className='input'>
          <label htmlFor="lastName"> Last Name : </label>
        <input type="text" name="lastName" id="lastName" value={person.lastName}  onChange={handleInput}/>
        </div>

        <div className='input'>
        <label htmlFor="age"> Age :</label>
        <input type="text" name="age" id="age"  value={person.age} onChange={handleInput}/>
        </div>

        <div className='input'>
        <label htmlFor="email"> Email Address : </label>
        <input type="text" name="email" id="email"  value={person.email} onChange={handleInput} />
        </div>

        <div className='btn_container'>
        <button type="submit" className='btn' onClick={addPerson}>Sign Up</button> 
        </div>
      </form>
    </div>
    </>
  )
}


export default App
