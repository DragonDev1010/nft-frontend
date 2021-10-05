import React, {useState} from 'react';

function Register() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [test, setTest] = useState('')
  function handleChange(event: any) {
    console.log(event.target.value)
    console.log(typeof(event.target.value))
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break;
      case 'email':
        setEmail(event.target.value)
        break;
      case 'psw':
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  }
  function convertFormeventForAPI(event: any) {
    return JSON.stringify({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.psw.value
    })
  }
  function handleSubmit(event: any) {
    event.preventDefault()
    console.log(convertFormeventForAPI(event))
    fetch("http://127.0.0.1:8080/users",
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: convertFormeventForAPI(event)
      }
    )
  }
  return (
    <div className="Register">
        <p>Register</p>
        <p>User Wallet Address: <b>0x453B8D46D3D41d3B3DdC09B20AE53aa1B6aB186E</b></p>
        <form onSubmit = {handleSubmit}>
          <input type = "text" name='name' onChange={handleChange}></input> <p>Name</p>
          <input type = "email" name='email' onChange={handleChange}></input> <p>Email</p>
          <input type = "password" name='psw' onChange={handleChange}></input> <p>Password</p>
          <input type="submit" value="Submit" />
        </form>
        <p>{test}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
    </div>
  );
}

export default Register;