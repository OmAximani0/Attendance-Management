import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// * Custom Pages
import StudentRegister from "./pages/StudentRegister";
import TeacherRegister from "./pages/TeacherRegister";
import LogIn from "./pages/LogIn";

import "./components/compo.css";
import "./pages/pages.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/studentRegister" component={StudentRegister} />
            <Route exact path="/teacherRegister" component={TeacherRegister} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
