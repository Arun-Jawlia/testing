import React, { useState } from 'react'
import { baseURL } from './Api'
import axios  from 'axios'

const Form = () => {
const [email,setEmail]= useState('')
const [password ,setPassword] = useState('')

const handleLogin = ()=>
{
    if(email!=='' && password!=='')
    {
        const payload={
            email,
            password
        }
    
        try {
            axios.post(`${baseURL}/auth/login`, payload)
            .then(res=>
                {
                    console.log(res)
                })
                .catch((err)=>
                {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
    }
    else{
        alert("Fill all the required fields")
    }
   
}

  return (
    <div>
        <h1>Login</h1>
        <label htmlFor="">Email</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Form