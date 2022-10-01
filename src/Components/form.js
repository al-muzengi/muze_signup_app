import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  const [people, setPeople] = useState([])
  const [isShown,setIsShown] = useState(false)
  const [ person,  setPerson] = useState({
    id:'',
    firstName:'',
    lastName:'',
    username:'',
    password:"",
    email:''
  })

  const toggleVisibility = () => {
      setIsShown(!isShown)
    }

  const handleInput = (e) =>{
    let value = e.target.value
    let name = e.target.name
    setPerson({...person, [name]:value })
  }

  const addPerson = (e) =>{
    e.preventDefault()
    const newPerson = {...person, id:people.length}
    if(person.firstName && person.lastName &&  person.username && person.password && person.email ){
      setPeople([...people,newPerson])
      setPerson({firstName:'',lastName:'',password:"",username:'', email:''})
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

        <div className='input'>
        <label id="pwd" htmlFor="password"> Password :</label>
        <input type={isShown === false ? "password" :  "text" } name="password" id="password" value={person.password} onChange={handleInput}/>
        <button onClick={toggleVisibility} className='pwd_btn'>{ isShown === false ?< FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} /> }</button>
        </div>

        

        <div className='btn_container'>
        <button type="submit" className='btn' onClick={addPerson}>Sign Up</button> 
        </div>
      </form>
    </div>
  )
}

export default Form

// The problem with this is the visibility toggle re-renders the component. 
// Needs fix. Possibly useMemo.