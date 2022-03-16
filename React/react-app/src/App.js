import React, {Component} from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';




class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web!" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      </div>
    );
  }
}

export default App;
