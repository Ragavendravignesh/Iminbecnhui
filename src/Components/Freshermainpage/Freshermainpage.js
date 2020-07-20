import React from 'react'
import './freshermainpage.css'
import Axios from 'axios'
import FresherRegister from '../FresherRegister/FresherRegister';
import FresherProject from '../FresherProject/FresherProject';
import Navi2 from '../Navigation/Navi2';

class Freshermainpage extends React.Component{
    state={isRegistered:false}
    constructor(props){
        super(props);
    }
    componentDidMount(){
        Axios.get("http://localhost:8080/fresher/isRegistered/"+this.props.match.params.email)
        .then(res=>{this.setState({isRegistered:res.data})})
        .catch(err=>{this.setState({isRegistered:false})});
    }
    render(){
        var element=null;
        const email=this.props.match.params.email;
        if(!this.state.isRegistered){
            element=<FresherRegister email={email}/>
        }     
        else{
            element=<FresherProject new={email}/>
        }
        return(<React.Fragment>
            <div>
                <Navi2/>
                {element}
            </div>
        </React.Fragment>);
    }
}

export default Freshermainpage