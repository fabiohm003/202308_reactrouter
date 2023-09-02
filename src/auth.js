import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const adminList = ['Irisval','RetaxMaster','freddier'];


const AuthContext = React.createContext();


function AuthProvider({ children }){

  const navigate = useNavigate();

  const [user, setUser] = React.useState(null);




  const login = ( username ) => {

    const isAdmin = adminList.find(dato => dato === username);

    setUser({ username, isAdmin });

    navigate('/profile'); //ir a profile cada vez que se ingresa login 
    //navigate(-1);
  };


  const logout = () => {
    setUser(null);
    navigate('/'); //ir a home 
  };


  const auth = { user, login, logout };


  return (
    <AuthContext.Provider value={auth} >
      {children}
    </AuthContext.Provider>


  );

}


function useAuth (){
  const auth = useContext(AuthContext);
  return auth;
}




function AuthRoute(props){
  const auth = useAuth();

  const location = useLocation();


  if (!auth.user){
    return (
      <Navigate to="/login" />
      /*<Navigate to="/login" state={{ from: location }} replace />*/
    );
 }

  return props.children;
}



export {AuthProvider, useAuth, AuthRoute};