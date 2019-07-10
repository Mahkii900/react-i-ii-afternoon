import React, {Component} from 'react'
import './PreviousButton.css'

export default class PreviousButton extends Component {
    constructor(props) {
        super(props)

        this.previousPage = this.previousPage.bind(this)
    }

    previousPage() {
        if (this.props.indexNum !== 0) {
            this.props.handler(this.props.indexNum - 1)
        }
    }

    render() {
        return(
            <button className='previous-button' onClick={this.previousPage}>{'<'} Previous</button>
        )
    }
}