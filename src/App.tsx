import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Todo } from "./pages/Todo";
import { Count } from "./pages/Counter";
import { UserApi } from "./pages/UserApi";
import { TodoRedux } from "./pages/TodoRedux";
import { Provider } from "react-redux";
import { store } from "./store";
import { Movie } from "./pages/Movie";
import Notes from "./pages/Notes";
import ToogleMode from "./components/Notes/ToogleMode";
import { useState } from "react";
import CryptoApi from "./pages/CryptoApi";

function App() {

  const[toggle,setToggle]=useState(true)

  const handleTheme=()=>{
    setToggle(!toggle)
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={toggle?'App':'Black'}>
          <Navbar />
          <ToogleMode handleTheme={handleTheme}/>
          <div style={{ width: '90%', margin: "0 auto" }}>
            <Switch>
              <Route exact path="/" component={Todo} />
              <Route path="/count" component={Count} />
              <Route path="/user" component={UserApi} />
              <Route path="/todo" component={TodoRedux} />
              <Route path="/movie" component={Movie} />
              <Route path="/notes" component={Notes} />
              <Route path="/crypto" component={CryptoApi} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
