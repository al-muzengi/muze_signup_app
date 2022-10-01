import React,{useState} from 'react'
import Password from './password'

const Form2 = () => {
  const [people, setPeople] = useState([])
  const [ person,  setPerson] = useState({
    id:'',
    firstName:'',
    lastName:'',
    username:'',
    email:''
  })

  const handleInput = (e) =>{
    let value = e.target.value
    let name = e.target.name
    setPerson({...person, [name]:value })
  }

  const addPerson = (e) =>{
    e.preventDefault()
    const newPerson = {...person, id:people.length}
    if(person.firstName && person.lastName &&  person.username && person.email ){
      setPeople([...people,newPerson])
      setPerson({firstName:'',lastName:'',username:'', email:''})
    }
  else{
    alert('The Input Fields cannot be empty on Submission.')
  }
}
  
  return (
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
        <label htmlFor="email"> Email Address : </label>
        <input type="text" name="email" id="email"  value={person.email} onChange={handleInput} />
        </div>

        <div className='input'>
        <label htmlFor="username"> Username :</label>
        <input type="text" name="username" id="username"  value={person.username} onChange={handleInput}/>
        </div>

        <div className='btn_container'>
        <button type="submit" className='btn2' onClick={addPerson}>Sign Up</button> 
        </div>
      </form>

      <Password/>
    </div>
  )
}

export default Form2