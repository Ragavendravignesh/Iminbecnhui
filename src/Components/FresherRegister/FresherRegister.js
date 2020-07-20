import React from 'react'
import Axios from 'axios'
class FresherRegister extends React.Component{
    constructor(props){
        super(props);
        this.state={emaild:this.props.email,name:'',githuburl:'', technology:'',unit:'',description:'',res:''}
    }

    setFresher=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{console.log(this.state)})
    }

    changePage=()=>{
        if(this.state.res==='Registered Successfully'){
            window.location.reload();
            //this.props.history.replace("/freshermainpage/"+this.state.emailid)
        }
    }
    handleRegister=(e)=>{
        e.preventDefault();
        if(this.state.emaild === "" || this.state.githuburl ==="" || this.state.technology ===""
        || this.state.unit==="" || this.state.description==="" )
            this.setState({res:"please Enter all the Fields"})
        else{
            this.setState({res:''})
            this.fregister();
        }
            
    }
    fregister=()=>{
        Axios.post("http://localhost:8080/fresher/register",this.state)
        .then(response=>{this.setState({res:response.data},this.changePage)})
        .catch(err=>{this.setState({res:'Soory unable to register'})});
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                    <form className="form offset-2 col-8 offset-2">
                        <div className="form-group row">
                            <label className="col-2" for="name">Name:</label>
                            <div className="col-10 ">
                                <input type="text"  id="name" className="form-control" 
                                placeholder="Enter name" name="name" 
                                onChange={this.setFresher} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2" for="githuburl">Github Url:</label>
                            <div className="col-10 ">
                                <input type="text"  id="githuburl" className="form-control" 
                                placeholder="Enter github url" name="githuburl" 
                                onChange={this.setFresher} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2" for="technology">Technology:</label> 
                            <div className="col-10 ">
                                <select id="technology" className="form-control" value={this.state.role} 
                                name="technology" onChange={this.setFresher} >
                                    <option selected>Choose technology</option>
                                    <option>Java</option>
                                    <option>.Net</option>
                                    <option>Orcall BI</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2" for="unit">Unit:</label> 
                            <div className="col-10 ">
                                <select id="unit" className="form-control" value={this.state.role} 
                                name="unit" onChange={this.setFresher} >
                                    <option selected>Choose Unit</option>
                                    <option>FSADM</option>
                                    <option>ORCALL</option>
                                    <option>IVS</option>
                                    <option>MFGADM</option>
                                    <option>ECSADM</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-2" for="description">Description:</label> 
                            <div className="col-10 ">
                            <textarea class="form-control" rows="5" id="description" name="description" 
                                 onChange={this.setFresher} ></textarea> 
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="offset-6">
                                <button className="btn btn-success btn-block" type="submit" onClick={this.handleRegister}
                                data-toggle="modal" data-target="#errorMessageModal2">Register</button>
                            </div>
                        </div> 
                    </form>
                    </div>
                </div>
                <div class="modal fade" id="errorMessageModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
export default FresherRegister