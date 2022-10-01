import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'

const Password = () => {
  const [isShown,setIsShown] = useState(false)
  const toggleVisibility = () => {
    setIsShown(!isShown)
  }
  return (
    <div className='pwd_container'>
      <div className='input'>
        <label htmlFor="password"> Password :</label>
        <input type={isShown === false ? "password" :  "text" } name="password" id="password" />
        <button onClick={toggleVisibility} className='pwd_btn'>{ isShown === false ?< FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye} /> }</button>
        </div>
    </div>
  )
}

export default Password