import React, {Component} from 'react'

// React component

export default class ButtonCollection extends Component {
  
    render() {
        const {button1_click, button2_click, button3_click, button1,button2,button3,color1,color2,color3} = this.props
        console.log(this.props);
        return (
            <div>
            <br />
            <div>
                <button onClick={button1_click}>Button1</button>
                <button onClick={button2_click}>Button2</button>
                <button onClick={button3_click}>Button3</button>
            </div>

            <br />

            <div>
                <button style={{background : color1 }}>{button1}</button>
                <button style={{background : color2 }}>{button2}</button>
                <button style={{background : color3 }}>{button3}</button>
            </div>
            </div>
        )
    }
}
