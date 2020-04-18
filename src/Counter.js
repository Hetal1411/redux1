import React from 'react';
import {connect} from 'react-redux'

class Counter extends React.Component{

    render(){
        return(
            <div>
            <h1>My counter</h1>
            <p> Count : {this.props.count}</p>
            <button onClick={this.props.Increament}> Increament </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("map state : ",state);
    return state;
}

function mapDispatchtoProps(dispatch){
    return{
        Increament: ()=>{
            console.log("Increament counter value");
            const action={ type : 'INCREAMENT'};
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Counter)