import React from 'react'
import { HandleButton } from "./containers/HandleButton";
import store  from './store'

class ButtonClick extends React.Component{
    render(){
        return(
            <div>
                <HandleButton store={store}/>
                {/* <LinkDemo store={store}/> */}
            </div>
        )
    }
}

export default ButtonClick