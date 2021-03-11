import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AllClubs from './Components/AllClubs/AllClubs';
import ClubDetails from './Components/ClubDetails/ClubDetails';
function App() {
  return (
    <div className="">
     <Router>
       <Switch>
         <Route path="/allclubs">
          <AllClubs></AllClubs>
         </Route>
         <Route exact path="/">
           <AllClubs></AllClubs>
         </Route>
         <Route path="/club/:id">
           <ClubDetails></ClubDetails>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
