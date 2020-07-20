import React from 'react'
import Axios from 'axios'
import {Link } from 'react-router-dom'
import Navi2 from '../Navigation/Navi2';

class Managergetprojects extends React.Component{
    constructor(props){
        super(props);
        this.state={project:[],res:''}
    }
    componentDidMount(){
        Axios.get("http://localhost:8080/project/getProjectForManagerId/"+this.props.match.params.email)
        .then(res=>{this.setState({project:res.data})})
        .catch(err=>{})
    }
    render(){
        return(<React.Fragment>
            <Navi2/>
            {this.state.project.map(prj => {
                return (
                    <div className="card mt-3 ml-5 mr-5 " key={Math.random()} >
                        <div className="card-body">
                            <h5 className="card-title">{prj.projectID}</h5>
                            <p className="card-text float-center">
                                <pre>                               
                                <b>Description     :</b>{prj.description}<br/>
                                <b>No of Demand    :</b>{prj.noOfDemand}<br/>
                                <b>Manager Id      :</b>{prj.managerId}<br/>
                                </pre>
                            </p>
                            <Link className="btn btn-primary float-right"  to={"/Managergetfresher/"+prj.projectID}>Get Status</Link>
                        </div>
                    </div>)
            })}
        </React.Fragment>);
    }
}
export default Managergetprojects