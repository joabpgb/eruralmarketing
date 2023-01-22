import './index.css'
import Home from "./Pages/Home";
import Room from "./Pages/EmptyRoom";
import Video from "./Pages/Room"
import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/room" component={Room}/>
        <Route path="/video" component={Video}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
