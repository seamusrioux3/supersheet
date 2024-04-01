import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from "react"; 



 class App extends React.Component{
  constructor(props) { 
    super(props) 
    this.state = { page: "" }
 
}

  render () {
    return(
      <div className="App">
        <NavBar></NavBar>
        <h1>default</h1>
      </div>
    )
  }
}

export default App;