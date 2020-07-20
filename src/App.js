import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './App'
import Login from './Components/LoginandSignup/Login'
import Signup from './Components/LoginandSignup/Signup'
import Freshermainpage from './Components/Freshermainpage/Freshermainpage'
import Navi from './Components/Navigation/Navi'
import managermainpage from './Components/Managermainpage/managermainpage';
import ProjectRegister from './Components/ProjectRegister/ProjectRegister';
import Managergetprojects from './Components/Managergetprojects/Managergetprojects';
import Managergetfresher from './Components/Managergetfresher/Managergetfresher';

function App() {
  return (
      <React.Fragment>
            <Navi/>
    </React.Fragment>
  );
}

export default App;
