import React, {Component} from 'react';
//import {robots} from './robots'


import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import  '../containers/App.css'


class App extends Component {
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) 
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(user => this.setState({robots : user}))
    }
   render(){
        const {robots , searchfield} = this.state
        const filterr = robots.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            })
        return !robots.length ?
        <h1>loading</h1> :
        (
                <div className='tc'>
                     <h1 className='f1'>RoboFriend</h1>
                     <SearchBox onSearchChange={this.onSearchChange} />
                     <Scroll>
                      <Cardlist robots={filterr} />
                     </Scroll>
                </div> 
        );
   }
}
export default App;