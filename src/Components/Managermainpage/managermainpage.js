import React from 'react'
import {Link} from 'react-router-dom'
import Navi2 from '../Navigation/Navi2';
class managermainpage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        var email=this.props.match.params.email;
        var name=email.substr(0,email.indexOf("@"))
        return (
            <React.Fragment>
                <Navi2/>
                <div className="jumbotron ml-3 mr-3 mt-5">
                    <h1 className="display-4">Hello, {name} </h1>
                    <p className="lead">Welcome, here you can select the perfect employeee for your project. You can make anyone fit! Still by using this 
                    webpage. You give a chance to really deserved person. Thanks for that! </p>
                    <hr className="my-4" />
                        <p>You cand register your project and also keep track of the same</p>
                        <Link className="btn btn-primary btn-lg" to={"/projectRegister/"+email}>Register</Link>
                        <Link className="btn btn-primary btn-lg float-right" to={"/Managergetprojects/"+email}>Track</Link>
                </div>
            </React.Fragment>
        );
    }
}
export default managermainpage;