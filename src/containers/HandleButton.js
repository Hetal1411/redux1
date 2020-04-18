import {connect} from 'react-redux'
import ButtonCollection from '../components/ButtonCollection'
import * as actions from '../actions'


// Map Redux state to component props
function mapStateToProps(state) {
    console.log(state);
    return {
        button1 : state.CountReducer.Button1,
        button2 : state.CountReducer.Button2,
        button3 : state.CountReducer.Button3,
        color1 : state.CountReducer.color1,
        color2 : state.CountReducer.color2,
        color3 : state.CountReducer.color3
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        button1_click: () => dispatch(actions.button1_click()),
        button2_click: () => dispatch(actions.button2_click()),
        button3_click: () => dispatch(actions.button3_click()),
    }
}
// Connected Component
export const HandleButton = connect(
    mapStateToProps,
    mapDispatchToProps,

)(ButtonCollection);


// export default HandleButton;