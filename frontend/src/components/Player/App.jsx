import React from 'react'
import axios from 'axios'
import './App.css'
import PlayerForm from './PlayerForm'
import PlayerList from './PlayerList'
import PlayerSingle from './PlayerSingle'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      currentPlayer: {}
    }
  }
  componentDidMount() {
    const url='http://localhost:4000/api/players/'
    axios.get(url)
    .then((Response) => {
      this.setState({
        players: Response.data})
    })
    .catch((error) => console.log(error))
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    })
  }

  render () {
    return (
      <div classname='container-fluid'>
        <div className='row'>
         <div className='col s12'>Menu</div>  
        </div>
        <div className='row'>
         <div className='col s3'><PlayerList players={this.state.players}
         updateCurrentPlayer={this.updateCurrentPlayer}/></div>  
         <div className='col s9'><PlayerSingle player={this.state.currentPlayer}/></div>  
        </div>
        <div className='row'>
         <div className='col s12'><PlayerForm/></div>  
        </div>
      </div>
    )
  }
}

export default App
