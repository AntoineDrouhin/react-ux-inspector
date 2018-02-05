
import React, { Component } from "react"
import PropTypes from "prop-types"

/**
 * @param {object} props
 * @param {object} props.id The name of the wrapped component
 * @param {object} props.recordType The name of the wrapped component, must be one of : "all", "clickOnly" and "mouseMoveOnly"
 */
export default class UxWatcher extends Component {
    constructor(props) {
        super()
        this.action = {
            componentId: props.id
        }
    }

    onMouseEnter() {
        if (this.props.recordType == "clickOnly")
            return
        return () => {
            this.action.actionType = "mouseEnter"
            this.action.date = new Date()
            console.log(this.action)
        }
    }

    onMouseLeave() {
        if (this.props.recordType == "clickOnly")
            return
        return () => {
            this.action.actionType = "mouseLeave"
            this.action.date = new Date()
            console.log(this.action)
        }
    }

    onClick() {
        if (this.props.recordType == "mouseMoveOnly")
            return
        return () => {
            this.action.actionType = "mouseClick"
            this.action.date = new Date()
            console.log(this.action)
        }
    }

    render() {
        return <span
            onMouseEnter={this.onMouseEnter()}
            onMouseLeave={this.onMouseLeave()}
            onClick={this.onClick()}>
            {this.props.children}
        </span>
    }
}

UxWatcher.defaultProps = {
    recordType: 'all'
}


UxWatcher.propTypes = {
    id: PropTypes.string.isRequired,
    recordType: PropTypes.oneOf(['all', 'clickOnly', "mouseMoveOnly"]),
}