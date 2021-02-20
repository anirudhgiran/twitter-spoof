import "./App.css";

//Firebase Imports
import fireBase from "./firebaseConfig";
import "firebase/firestore";
import "firebase/auth";

//React Router DOM Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//React Firebase Hooks Imports
import { useAuthState } from 'react-firebase-hooks/auth';

//React Component Imports
import RestApp from './components/App';
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

const auth = fireBase.auth();
const firestore = fireBase.firestore();

function App() {

  const [loginStatus, loading, error] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {loginStatus ? <Redirect to="/home"/> : <Redirect to="login"/>}
          </Route>

          <Route exact path="/login" render={(props) => <Login {...props} auth={auth}/>}/>

          <Route exact path="/create-account">
            <CreateAccount/>
          </Route>

          <Route exact path="/">
            <RestApp/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
