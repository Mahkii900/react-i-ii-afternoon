import React, {Component} from 'react';
import './App.css';
import DisplayItems from './components/DisplayItems'
import NextButton from './components/Navigation/NextButton'
import PreviousButton from './components/Navigation/PreviousButton'
import Data from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: Data,
      indexNum: 0
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(value) {
    this.setState({indexNum: value})
  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <div className='home'>Home</div>
        </div>
        <div className='main-content'>
          <div className='display-info'>
            <DisplayItems data={this.state.data} indexNum={this.state.indexNum}/>
          </div>
        </div>
        <div className='option-buttons'>
          <PreviousButton indexNum={this.state.indexNum} handler={this.changeHandler}/>
          <NextButton indexNum={this.state.indexNum} handler={this.changeHandler} maxNum={this.state.data.length}/>
        </div>
      </div>
    )
  }
}

export default App;
