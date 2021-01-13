import React from 'react';
import './App.css';
import robots from './robots';
import Collection from './components/collection/collection.components';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const {robots, searchField} = this.state;
    let filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div style={{margin: '0px auto'}}>
        <div style={{textAlign: 'center'}}>
        <h1>Robot Hash</h1>
          <input type="text" name="search" onChange={this.handleChange}/>
        </div>
        <Collection robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
