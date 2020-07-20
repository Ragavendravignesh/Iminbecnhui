const LoginReducer=(state='',action)=>{
    switch(action.type){
        case 'SetName':
            return action.data;
            break;
        case 'SetPassword':
            return action.data;
            break;
        case 'SetRole':
            return action.data;
            break;
        default:
            return ''
    }
}
export default LoginReducer;