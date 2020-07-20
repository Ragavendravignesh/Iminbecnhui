import React from 'react'
import Axios from 'axios'
class ProjectRegister extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:'',unit:'',skillsRequired:'',managerId:this.props.match.params.email,
            noOfDemand:'',appliedList:'',selectedList:'null',projectID:'',res:''}
    }

    setProject=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{console.log(this.state)})
    }

    changePage=()=>{
        if(this.state.res==='Added Successfully'){
            window.location.reload();
            //this.props.history.replace("/freshermainpage/"+this.state.emailid)
        }
    }
    handleRegister=(e)=>{
        e.preventDefault();
        if(this.state.description === "" || this.state.unit ==="" || this.state.skillsRequired ===""
        || this.state.noOfDemand==="" || this.state.projectID==="" )
            this.setState({res:"please Enter all the Fields"})
        else{
            this.setState({res:''})
            this.pregister();
        }
            
    }
    pregister=()=>{
        Axios.post("http://localhost:8080/project/storeProject",this.state)
        .then(response=>{this.setState({res:response.data},this.changePage)})
        .catch(err=>{this.setState({res:'Sorry unable to register'})});
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                    <form className="offset-2 col-8 offset-2 bg-light pt-3 mt-5">
                        <div className="form-group row">
                            <label className="col-2" for="projectID">Project Id:</label>
                            <div className="col-10 ">
                                <input type="text"  id="projectID" className="form-control" 
                                placeholder="Enter Project Id" name="projectID" 
                                onChange={this.setProject} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-2" for="description">Description:</label> 
                            <div className="col-10 ">
                            <textarea class="form-control" rows="5" id="description" name="description" 
                                 onChange={this.setProject} ></textarea> 
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-2" for="unit">Unit:</label> 
                            <div className="col-10 ">
                                <select id="unit" className="form-control" value={this.state.role} 
                                name="unit" onChange={this.setProject} >
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
                            <label className="col-2" for="skillsRequired">Skills Required:</label>
                            <div className="col-10 ">
                                <input type="text"  id="skillsRequired" className="form-control" 
                                placeholder="Enter Skills Required" name="skillsRequired" 
                                onChange={this.setProject} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-2" for="noOfDemand">No Of Demand:</label>
                            <div className="col-10 ">
                                <input type="number"  id="noOfDemand" className="form-control" 
                                placeholder="Enter no of demand" name="noOfDemand" 
                                onChange={this.setProject} />
                            </div>
                        </div> 

                        <div className="form-group row">
                            <div className="offset-6">
                                <button className="btn btn-success btn-block" type="submit" onClick={this.handleRegister}
                                data-toggle="modal" data-target="#errorMessageModal3">Register</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="modal fade" id="errorMessageModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
export default ProjectRegister;