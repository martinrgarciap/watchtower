import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.scss"
import LogIn from './pages/LogIn/LogIn';
import Home from './pages/Home/Home';
import Emergency from "./pages/Emergency/Emergency";
import Forum from "./pages/Forum/Forum";
import SignUp from './pages/SignUp/SignUp';
import Header from "./components/Header/Header";
import ForumDetails from "./pages/ForumDetails/ForumDetails"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/forum" exact component={Forum} />
          <Route path="/forum/:forumId" component={ForumDetails} />
          <Route path="/emergency" exact component={Emergency} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/" exact component={Home} />
        </Switch>
        {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
