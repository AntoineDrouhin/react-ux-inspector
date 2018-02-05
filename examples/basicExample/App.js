
import React, { Component } from "react"

import Square from "./Square"

import UxWatcher from "../../UxWatcher.js"

export default class App extends Component {

    render() {
        return (
            <div>
                <div style={{"fontWeight": "bold", "height": "40px"}}>
                    Pass your mouse over a Square to trigger react-ux-watcher
                    (Open your navigator's console)
                </div>
                <div>
                    <UxWatcher id="Red Square"><Square color="red">Red Square</Square></UxWatcher>
                    <div style={{ display: "inline-block", width: "20px" }}></div>
                    <UxWatcher id="Blue Square"><Square color="blue">Blue Square</Square></UxWatcher>
                    <div style={{ display: "inline-block", width: "20px" }}></div>
                    <UxWatcher id="Green Square - Click Only" recordType="clickOnly"><Square color="green">Click Only</Square></UxWatcher>
                </div>
                <div style={{"height": "40px"}}></div>
                <div>
                    <UxWatcher id="Pink Square"><Square color="DeepPink">Pink Square</Square></UxWatcher>
                    <div style={{ display: "inline-block", width: "20px" }}></div>
                    <UxWatcher id="Ligh Blue Square"><Square color="lightblue">Lightblue Square</Square></UxWatcher>
                    <div style={{ display: "inline-block", width: "20px" }}></div>
                    <UxWatcher id="Light Green Square - Mouse Move Only" recordType="mouseMoveOnly"><Square color="lightgreen">Mouse Moves Only</Square></UxWatcher>
                </div>
            </div>
        )
    }
}