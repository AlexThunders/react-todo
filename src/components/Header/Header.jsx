import React, {useEffect, useState, useRef} from 'react';

import bgImg from './Vancouver-Skyline15.jpg'

const rememberStyle = {
  position:'relative',
  fontSize: '.9em',
  float: 'left',
  margin: '5px 20px 0 40px',
  float: 'right'
}

const Header = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const refLogin = useRef(null);
  const refPass = useRef(null);
  const refSubmit = useRef(null);
  const refRemember = useRef(null);

  useEffect(() => {
    console.log(remember)
  },[remember])

  const switchFocus = (e, ref) => {
    if(e.keyCode === 13) {
      switch(ref) {
        case refPass:
          console.log('login: ' + refLogin.current.defaultValue)
          refPass.current.focus();
          break;
        case refRemember:
          console.log('pass: ' + refPass.current.defaultValue)
          refRemember.current.focus();
          break;
          case refSubmit:
          console.log('remembered: ' + refPass.current.defaultValue)
          refSubmit.current.focus();
          break;
        default:
          console.log('test')
      }
    }
  }
  
  return (
    <div className="header">
      <img src={bgImg} alt="bg"/>
      <h1><span onClick={() => window.history.back()}><i className="fas fa-angle-left"></i></span>ToDo list</h1>

      <form className="loginForm" onSubmit={e => e.preventDefault()}>
        <lable is="3dx">login:</lable>
        <input 
          ref={refLogin}
          onKeyDown={e => switchFocus(e,refPass)}
          type="text"
          value={login}
          onChange={e => setLogin(e.target.value)}
          required
        /><br></br>

        <lable is="3dx">password:</lable>
        <input 
          ref={refPass}
          onKeyDown={e => switchFocus(e,refRemember)}
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br></br>

        <lable is="3dx" style={rememberStyle}>remember me:
          <input 
            ref={refRemember}
            onKeyDown={e => switchFocus(e,refSubmit)}
            type="checkbox"
            onChange={() => setRemember(remember => !remember)}
            style={{position: 'absolute', top: '-1px'}}/>
        </lable>

        <input 
          ref={refSubmit}
          onKeyDown={e => switchFocus(e,refLogin)}
          type="submit"
          value="submit"/>
      </form>
    </div>
  )
}

export default Header
