import {Switch, Route} from "react-router-dom"

import Ticets from "./pages/Ticets/Ticets"
import Sidebar from "./containers/Sidebar/Sidebar"

import './assets/styles/main.scss';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Switch>
        <Route path="/" component={Ticets} exact />
      </Switch>
    </div>
  );
}

export default App;
