
import 'tachyons'
import CardList from './components/CardList';
import { robots } from './api/robots';
import SearchBox from './components/SearchBox';
import { Component } from "react"
import "./App.css"
import ScrollView from './components/ScrollView';

//.........................................................without search -----------------------------------------------
// const App = () => {
//   return (
//     <div className="tc">
//       <h1>ROBOT FRIENDS</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// }

//..........................................................without api ................................

// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       robots: robots,
//       searchField: ""
//     }


//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value)
//     this.setState({ searchField: event.target.value })



//     // console.log(filteredRobot)
//   }

//   render() {
//     const filteredRobot = this.state.robots.filter((item) => {
//       return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
//     })
//     return (
//       <div className="tc" >
//         <h1>ROBOT FRIENDS</h1>
//         <SearchBox searchChange1={this.onSearchChange} />
//         <CardList robots={filteredRobot} />
//       </div>
//     )
//   }
// }

//.............................................life cycle of react + use api (https://jsonplaceholder.typicode.com/, https://jsonplaceholder.typicode.com/users)...................................
//......................life cycle (https://reactjs.org/docs/react-component.html) -------> mouting, updating, unmounting
//-------------these method automatically call no need to call MOUNT(constructor---> render----> ComponentDidMount) 
class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ""
    }


  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })

  }

  componentDidMount() {

    // try{

    // }catch(e){
    //   console.log("error")
    // }

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ robots: user }))
    // this.setState({robots:robots})

  }
  render() {
    const filteredRobot = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })



    if (this.state.robots.length === 0) {
      return <h1>Loading.........</h1>
    } else {
      return (
        <div className="tc" >
          <h1>ROBOT FRIENDS</h1>
          <SearchBox searchChange1={this.onSearchChange} />


          <ScrollView>
            <CardList robots={filteredRobot} />

          </ScrollView>
        </div>
      )
    }
  }
}



export default App;
