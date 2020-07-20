import React from 'react'
import Axios from 'axios'
class FresherProject extends React.Component {

    state = { project: [] ,res:''}
    componentDidMount() {
        Axios.get("http://localhost:8080/project/getProjects/" + this.props.new)
            .then(res => { this.setState({ project: res.data })})
            .catch(err => { })
    }

   apply=(prj,email)=>{
        Axios.put("http://localhost:8080/project/updateApplied/"+email,prj)
        .then(response=>{this.setState({res:response.data},this.refreshPage)})
        .catch(err=>{})
    }  

   refreshPage=()=>{
       if(this.state.res==='Updated sucessfully')
            window.location.reload();
   }
    render() {

        return (<React.Fragment>
            {this.state.project.map(prj => {
                return (
                    <div className="card mt-3 ml-5 mr-5 " key={Math.random()} >
                        <div className="card-body">
                            <h5 className="card-title">{prj.projectID}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{prj.unit}</h6>
                            <p className="card-text float-center">
                                <pre>                               
                                <b>Description     :</b>{prj.description}<br/>
                                <b>Skills Required :</b>{prj.skillsRequired}<br/>
                                <b>Manager Id      :</b>{prj.managerId}<br/>
                                </pre>
                            </p>
                            <button className="btn btn-success float-right" onClick={()=>{this.apply(prj,this.props.new)}} >Apply</button>
                        </div>
                    </div>)
            })}
        </React.Fragment>);
    }
}

export default FresherProject