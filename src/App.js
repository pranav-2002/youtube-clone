import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <div className="app__page">
            <Sidebar />
            <Videos />
          </div>
        </Route>
        <Route path="/search/:searchTerm">
          <Header />
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
