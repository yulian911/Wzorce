import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Todo } from "./pages/Todo";
import { Count } from "./pages/Counter";
import { UserApi } from "./pages/UserApi";
import { TodoRedux } from "./pages/TodoRedux";

import { Movie } from "./pages/Movie";
import Notes from "./pages/Notes";
import ToogleMode from "./components/Notes/ToogleMode";
import { useState } from "react";
import CryptoApi from "./pages/CryptoApi";
import { useTypeSelector } from "./components/hook/useTypeSelector";
import {auth ,provider} from './firebase'
import { AuthActionTypes } from "./store/redux/authReducer";
import LoginIn from "./pages/LoginIn";
import { useDispatch } from "react-redux";
import Dropdown from "./pages/Dropdown";
import TodoContex from "./pages/TodoContex";
import { TodoContexProvider } from "./Contex/todoContex";


function App() {


  const[toggle,setToggle]=useState(true)

  const handleTheme=()=>{
    setToggle(!toggle)
  }
 const dispatch = useDispatch()
const userName=useTypeSelector(state=>state.auth.userName)
const userEmail=useTypeSelector(state=>state.auth.userEmail)

const handleLogOut =()=>{
auth.signOut().then(()=>{
  dispatch({type:AuthActionTypes.SET_USER_LOGOUT})
}).catch((err)=> alert(err.message))

}
const handleLoginIn =()=>{
  auth.signInWithPopup(provider).then((result=>{
    dispatch({type:AuthActionTypes.SET_ACTION_USER,payload:{
      userName:result.user!.displayName,
    userEmail:result.user!.email
    }})
  }))
  
  }


  return (
    <TodoContexProvider>
      <BrowserRouter>
      {userName?(
        <div className={toggle?'App':'Black'}>
        <Navbar />
        <ToogleMode handleTheme={handleTheme} handleLogout={handleLogOut}/>
       
        <div style={{ width: '90%', margin: "0 auto" }}>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route path="/count" component={Count} />
            <Route path="/user" component={UserApi} />
            <Route path="/todo" component={TodoRedux} />
            <Route path="/movie" component={Movie} />
            <Route path="/notes" component={Notes} />
            <Route path="/crypto" component={CryptoApi} />
            <Route path="/dropdown" component={Dropdown} />
            <Route path="/todo-contex" component={TodoContex} />
          </Switch>
        </div>
      </div>
      ):
      <Switch>
        <Route exact path="/" render={() => <LoginIn handleLogin={handleLoginIn} />} />
      </Switch>
    
    
    
    }
        
      </BrowserRouter>
  </TodoContexProvider>
  );
}

export default App;

