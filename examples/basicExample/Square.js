
import React, {Component} from "react"

export default class Square extends Component {
    
    render() {
        return <div style={{
            backgroundColor: this.props.color,
            width: "100px",
            height: "100px",
            lineHeight: "100px", 
            display: "inline-block",
            "borderRadius": "10px",
            "verticalAlign": "bottom",
            "textAlign": "center",
            "color": "white",
        }}>
            {this.props.children}
        </div>
    }

}