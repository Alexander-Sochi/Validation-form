import './App.css'
import { useEffect, useState } from 'react';



const App= () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailDirty,setEmailDirty] = useState(false)
  const [passwordDirty,setPasswordDirty] = useState(false)
  const [emailError,setEmailError] = useState('Емаил не может быть пустым')
  const [passwordError,setPasswordError] = useState('Пароль не может быть пустым')
  const [formValid,setFormValid] = useState(false)

  useEffect(()=>{
    if(emailError || passwordError){
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  })

  const emailHeadler = (e) =>{
    setEmail(e.target.value)
    const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if(!filter.test(String(e.target.value).toLowerCase())){
      setEmailError('Неккоректный емайл')
      if(!e.target.value){
        setEmailError(('Email не может быть пустым'))
      }
    }else{
      setEmailError('')
    }
  }
  const passwordHeadler = (e) =>{
    setPassword(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 8 ){
      setPasswordError('Пароль должен быть длинее 3 и меньше 8  символов ')
      if(!e.target.value){
        setPasswordError(('Пароль не может быть пустым'))
      }
    }else {
      setPasswordError('')
    }
  }
  const blurHeadler = (e) =>{
    switch(e.target.name){
      case 'email':
        setEmailDirty(true)
        break
        case 'password':
          setPasswordDirty(true)
        break
        default:
          // do nothing
  }
    
  } 

  return (
   <div className='app'>
      <form>
        <h1>Регистрация</h1>
        {(emailDirty && emailError) && <div style={{color:'tomato',}}>{emailError}</div>}
        <input value={email} 
          onChange={e=>emailHeadler(e)} 
          onBlur={e=>blurHeadler(e)} 
          name='email' 
          type="text" 
          placeholder='Enter your email' 
          />

        {(passwordDirty && passwordError) && <div style={{color:'tomato'}}>{passwordError}</div>}
        <input  value={password} 
          onChange={e=>passwordHeadler(e)}  
          onBlur={e=>blurHeadler(e)}
          name='password' 
          type="text" 
          placeholder='Enter your Password' 
         />
        <button disabled={!formValid} type='submit'>Зарегистрироватся</button>
      </form>
   </div>
  )
}

export default App;
