import {Switch, Route} from "react-router-dom"

import Tickets from "./pages/Tickets/Tickets"
import Sidebar from "./containers/Sidebar/Sidebar"

import './assets/styles/main.scss';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Switch>
        <Route path="/" component={Tickets} exact />
      </Switch>
    </div>
  );
}

export default App;
