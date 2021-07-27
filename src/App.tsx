import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Todo } from "./pages/Todo";
import { Count } from "./pages/Counter";
import { UserApi } from "./pages/UserApi";
import { TodoRedux } from "./pages/TodoRedux";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div style={{ width: 1400, margin: "0 auto" }}>
            <Switch>
              <Route exact path="/" component={Todo} />
              <Route path="/count" component={Count} />
              <Route path="/user" component={UserApi} />
              <Route path="/todo" component={TodoRedux} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
