import React from 'react';
import { useAuth } from './auth';


function LogoutPage (){

  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();

    auth.logout();
    console.log('salida');
  };
  

  return (
    <>
      <h1>LogOutPage</h1>
      <form onSubmit={logout}>
        <label>¿seguro de que quieres salir?</label>

        <button type='submit'>Salir</button> 
      </form>
    </>

  );

}


export {LogoutPage};