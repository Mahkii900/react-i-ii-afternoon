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
    this.changeInfoHandler = this.changeInfoHandler.bind(this)
  }

  changeInfoHandler(value) {
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
          <PreviousButton indexNum={this.state.indexNum} handler={this.changeInfoHandler}/>
          <div className='edit-buttons'>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
          </div>
          <NextButton indexNum={this.state.indexNum} handler={this.changeInfoHandler} maxNum={this.state.data.length}/>
        </div>
      </div>
    )
  }
}

export default App;
