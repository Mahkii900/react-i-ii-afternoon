import React, {Component} from 'react'
import './NextButton.css'

export default class NextButton extends Component {
    constructor(props) {
        super(props)

        this.nextPage = this.nextPage.bind(this)
    }

    nextPage() {
        if(this.props.indexNum != this.props.maxNum - 1){
            this.props.handler(this.props.indexNum + 1)
        }
    }

    render() {
        return(
            <button className='next-button' onClick={this.nextPage}>Next {'>'}</button>
        )
    }
}