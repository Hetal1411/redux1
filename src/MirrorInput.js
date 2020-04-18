import React from 'react'
import {connect} from 'react-redux'

class MirrorInput extends React.Component{
    render(){
        return(
            <div>
            <br />
            <input type="text" value={this.props.inputVal} onChange={this.props.inputChange} /><br />
            <p>{this.props.inputVal}</p>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log("map state : ",state);
    return {
        inputVal : state.inputVal
    }
}

function mapDispatchtoProps(dispatch){
    return{
        inputChange: (event)=>{
            console.log("value change");
            const action={ type : 'INPUTCHANGED',text : event.target.value};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(MirrorInput)