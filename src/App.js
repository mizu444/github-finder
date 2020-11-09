import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/layout/users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
