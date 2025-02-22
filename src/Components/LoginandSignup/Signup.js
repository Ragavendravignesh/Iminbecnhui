import React from 'react'
import './signup.css'
import Axios from 'axios'
import Navi from '../Navigation/Navi';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={emailid:'',password:'',role:'', res:''}
    }

    setSignup=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    changePage=()=>{
        if(this.state.res==='Signed Up successfully'){
            this.props.history.replace("/login")
        }
    }

    handleSignup=(e)=>{
        e.preventDefault();
        if(this.state.emailid === "" || this.state.password ==="" || this.state.role ==="")
            this.setState({res:"please Enter all the Fields"})
        else{
            this.setState({res:''})
            this.onSignup();
        }
            
    }
    onSignup=()=>{
        Axios.put("http://localhost:8080/loginsignup/signup",this.state)
        .then(response=>{this.setState({res:response.data},this.changePage)})
        .catch(err=>{this.setState({res:'Invalid credentials'})});
    }

    render(){
        return(
            <React.Fragment>
                <Navi/>
                <div className="container">
                    <div className="row">
                    <form className="form offset-2 col-8 offset-2">
                        <div className="form-group row">
                            <label className="col-2" for="username">Username:</label>
                            <div className="col-10 ">
                                <input type="text"  id="username" className="form-control" 
                                placeholder="Enter name" name="emailid" 
                                onChange={this.setSignup} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2" for="password">Password:</label> 
                            <div className="col-10 ">
                                <input type="password" id="password" className="form-control"
                                 placeholder="Enter Password" name="password" 
                                 onChange={this.setSignup} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2" for="selectrole">Role:</label> 
                            <div className="col-10 ">
                                <select id="selectrole" className="form-control" value={this.state.role} 
                                name="role" onChange={this.setSignup} >
                                    <option >Choose role</option>
                                    <option>fresher</option>
                                    <option>manager</option>
                                    <option>TPD</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-6">
                                <button className="btn btn-primary btn-block" type="submit" onClick={this.handleSignup}
                                data-toggle="modal" data-target="#errorMessageModal">Sign up</button>
                            </div>
                        </div> 
                    </form>
                    </div>
                </div>
                <div class="modal fade" id="errorMessageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Status</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {this.state.res}
                             </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Signup