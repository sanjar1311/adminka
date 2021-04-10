import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom"

import Overview from "./pages/Overview/Overview"
import Tickets from "./pages/Tickets/Tickets"
import Ideas from "./pages/Ideas/Ideas"
import Contacts from "./pages/Contacts/Contacts"
import Agents from "./pages/Agents/Agentas"
import Articles from "./pages/Articles/Articles"
import Settings from "./pages/Settings/Settings"
import Subscription from "./pages/Subscription/Subscription"

import Sidebar from "./containers/Sidebar/Sidebar"
import TicketsHeader from "./containers/TicketsHeader/TicketsHeader"

import './assets/styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="right-side-wrapper">
          <TicketsHeader />
          <Switch>
            <Route path="/" component={Tickets} exact />
            <Route path="/overview" component={Overview} exact />
            <Route path="/ideas" component={Ideas} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/agents" component={Agents} exact />
            <Route path="/articles" component={Articles} exact />
            <Route path="/settings" component={Settings} exact />
            <Route path="/subscription" component={Subscription} exact />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
