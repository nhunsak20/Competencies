import React, { Component } from 'react'
import Search from '../search'

class Classes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputClass: ''
        }
    }

    handleChanged = event => {
        this.setState({
            inputClass: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>Classes App</div>
                <Search changeFN={this.handleChanged}/>
                {this.state.inputClass}
            </div>
        )
    }
}

export default Classes