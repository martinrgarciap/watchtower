import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.scss"
import LogIn from './pages/LogIn/LogIn';
// import Home from './pages/Home/Home';
// import Emergency from "./pages/Emergency/Emergency";
// import Forum from "./pages/Forum/Forum";
// import SignUp from './pages/SignUp/SignUp';
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={Home} />
          <Route path="/emergency" exact component={Emergency} />
          <Route path="/forum" exact component={Forum} />
          <Route path="/signup" component={SignUp} /> */}
          <Route path="/login" component={LogIn} />
        </Switch>
        {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
