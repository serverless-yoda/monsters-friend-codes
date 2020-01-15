import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/card-list/card-list.component';
import {SearchBox} from './components/search/searchbox.component'

class App extends Component{
  constructor() {
    super()
    this.state = {
      monsters: [],
      filter: ''
  }
}

handleChange = e => {
  this.setState({filter: e.target.value})
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users}))
}
  render() {
    const {monsters, filter} = this.state;
    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (<div className="App">
      <h1>Monsters Friends</h1>
      <SearchBox
        placeholder={'your friendly monster'}
        handleChange={this.handleChange}
      />
      <Cardlist monsters={filteredmonsters} />
  </div>)
  }
}


export default App;
