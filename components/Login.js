import styles from '../styles/index.module.css'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Login() {

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

// onSubmit (e){
//   e.preventDefault();

//   axios.post('http://104.154.180.58/auth/local', {
//     identifier: identifier,
//     password: password
//   })

//   .then(res =>{
//     console.log(res)
//     console.log(res.data)
//   })
// }
  const senddata = async (e) =>{
    console.log("sadfasdf")
    await axios.post('http://104.154.180.58/auth/local', {
    identifier: identifier,
    password: password
  })
  // console.log(identifier)
  // console.log(password)
  .then((res) =>{
    console.log(res.data);
  })
  .catch((error)=>{
    alert("incorrecto")
    console.log(error);
  });
  }
  return (
    <div className={styles.login}>
      <div>
        <h1>Login</h1>
      </div>
       <form className={styles.loginForm} >
        <input className={styles.address} type="text" value={identifier} onChange={e => setIdentifier(e.target.value)} placeholder='Enter your email address' />
        <input className={styles.password} type="text" value={password} onChange={e => setPassword(e.target.value)}  placeholder='Enter your password' />  
          <a className={styles.signup} onClick={senddata}>
            Sign Up
          </a>
      </form>
    </div>
  )
}
