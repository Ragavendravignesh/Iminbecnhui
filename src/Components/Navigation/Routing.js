import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import App from '../../App'
import Login from '../LoginandSignup/Login';
import Signup from '../LoginandSignup/Signup';
import Freshermainpage from '../Freshermainpage/Freshermainpage';
import managermainpage from '../Managermainpage/managermainpage';
import ProjectRegister from '../ProjectRegister/ProjectRegister';
import Managergetprojects from '../Managergetprojects/Managergetprojects';
import Managergetfresher from '../Managergetfresher/Managergetfresher';
class Routing extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Router>
                <Route exact path="/" component={App}/>
                <Route path="/home" component={App}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/freshermainpage/:email" component={Freshermainpage}/>
                <Route path="/managermainpage/:email" component={managermainpage}/>
                <Route path="/projectRegister/:email" component={ProjectRegister}/>
                <Route path="/Managergetprojects/:email" component={Managergetprojects}/>
                <Route path="/Managergetfresher/:prjid" component={Managergetfresher}/>
                </Router>
        </React.Fragment>
        );
    }
}


export default Routing