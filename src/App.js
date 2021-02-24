import "./App.css";

//Firebase Imports
// import fireBase from "./firebaseConfig";
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

//React Firebase Hooks Imports
import { useAuthState } from "react-firebase-hooks/auth";

//React Component Imports
import Login from "./components/Login";
import CenterPanel from "./components/CenterPanel";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";

const config = {
  apiKey: "AIzaSyD1UHFW5vOV97LWQU7Nv1A_SraOqtIyG8c",
  authDomain: "twitter-spoof.firebaseapp.com",
  projectId: "twitter-spoof",
  storageBucket: "twitter-spoof.appspot.com",
  messagingSenderId: "293940832325",
  appId: "1:293940832325:web:87c83e09b6fa4803279b2c"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [loginStatus] = useAuthState(auth);

  return (
    <div className="App">
      {/* <Router>
        <Switch> */}
      {/* <Route exact path="/">
            {loginStatus ? <Redirect to="/"/> : <Redirect to="login"/>}
          </Route>

          <Route exact path="/login" render={(props) => <Login {...props} auth={auth}/>}/>

          <Route exact path="/create-account">
            <CreateAccount/>
          </Route>

          <Route exact path="/">
            <RestApp/>
          </Route> */}

      {loginStatus ? <><LeftPanel />
        <CenterPanel auth={auth} firestore={firestore}/>
        <RightPanel auth={auth} /></>
        : <Login auth={auth}/>
        }
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
