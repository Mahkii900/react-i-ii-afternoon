import React, {Component} from 'react'
import './DisplayItems.css'

export default class DisplayItems extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let movieList = this.props.data[this.props.indexNum].favoriteMovies.map((ele)=><li>{ele}</li>)
        return(
            <div className='infoSlide'>
                <div className='person'>
                    <div className='name'>
                        <h2>{this.props.data[this.props.indexNum].name.first} {this.props.data[this.props.indexNum].name.last}</h2>
                    </div>
                    <div className='personal-info'>
                        <span className='category'>
                            From: 
                        </span>
                        <span>
                            {this.props.data[this.props.indexNum].city}, {this.props.data[this.props.indexNum].country}
                        </span>
                        <br/>
                        <span className='category'>
                            Job Title: 
                        </span>
                        <span>
                            {this.props.data[this.props.indexNum].title}
                        </span>
                        <br/>
                        <span className='category'>
                            Employer: 
                        </span>
                        <span>
                            {this.props.data[this.props.indexNum].employer}
                        </span>
                    </div>
                    <div className='movies'>
                        <h3>Favorite Movies:</h3>
                        {movieList}
                    </div>
                </div>
                <div className='id-number'>
                    <h2>{this.props.data[this.props.indexNum].id}/{this.props.data.length}</h2>
                </div>
            </div>
        )
    }
}