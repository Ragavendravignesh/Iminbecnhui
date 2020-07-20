import React from 'react'
import Axios from 'axios'
import Navi2 from '../Navigation/Navi2';
class Managergetfresher extends React.Component{
    constructor(props){
        super(props);
        this.state={fresher:[],res:'',demandCount:''}
    }
    componentDidMount(){
        Axios.get("http://localhost:8080/project/getAppliedFreshers/"+this.props.match.params.prjid)
        .then(res=>{this.setState({fresher:res.data})})
        .catch(err=>{})

        Axios.get("http://localhost:8080/project/getDemandCount/"+this.props.match.params.prjid)
        .then(res=>{this.setState({demandCount:res.data})})
        .catch(err=>{})
    }
    select=(prjid,fresheremail)=>{
        Axios.put("http://localhost:8080/project/selectFresher/"+prjid+"/"+fresheremail)
        .then(response=>{this.setState({res:response.data},this.refreshPage)})
        .catch(err=>{})

    }
    refreshPage=()=>{
        if(this.state.res==="selected")
            window.location.reload();
    }
    render(){
        const {prjid}=this.props.match.params.prjid;
        return (<React.Fragment>
            <Navi2/>
            <h5 className="mt-3 text-center">No Of Demand:{this.state.demandCount}</h5>
            {this.state.fresher.map(frs => {
                return (
                    <div className="card mt-3 ml-5 mr-5 " key={Math.random()} >
                        <div className="card-body">
                            <h5 className="card-title">{frs.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{frs.unit}</h6>
                            <p className="card-text float-center">
                                <pre>                               
                                <b>Description     :</b>{frs.description}<br/>
                                <b>Github Url      :</b><a href={frs.githuburl} target="_blank">{frs.githuburl}</a><br/>
                                <b>Technology      :</b>{frs.technology}<br/>
                                <b>Email Id        :</b>{frs.emaild}<br/>
                                </pre>
                            </p>
                            <button className="btn btn-success float-right" onClick={()=>{this.select(this.props.match.params.prjid,frs.emaild)}} >Add</button>
                        </div>
                    </div>)
            })}

        </React.Fragment>);
    }
}

export default Managergetfresher