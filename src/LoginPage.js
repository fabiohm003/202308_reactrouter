import React from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';




function LoginPage (){

  const auth = useAuth();

  const [username, setUsername] = React.useState('');

  const login = (e) => {
    e.preventDefault();

    //guardar en context
    auth.login(username);
    //console.log(username);
  };
  


  if (auth.user){
    return (<Navigate to={"/profile"} /> );
    //return (<Navigate to={"/blog"} /> );
  }

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <button type='submit'>Entrar</button> 
      </form>
    </>

  );

}


export {LoginPage};