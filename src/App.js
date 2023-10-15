import React, { Component } from 'react'
import './App.css'

class App extends Component {
  data = []

  area = {
    width:"500px",
    height:"500px",
    border:"1px solid blue"
  }

  constructor(props){
    super(props)
    this.state = {
      list:this.data
    }
    this.doAction = this.doAction.bind(this)
  }

  doAction(e){
    let x = e.pageX
    let y = e.pageY
    this.data.push({x:x, y:y})
    this.setState({
      list:this.data
    })
  }

  draw(d){
    let s = {
      position:"absolute",
      left:(d.x - 25) + "px",
      top:(d.y - 25) + "px",
      width:"70px",
      height:"50px",
    }
    return <img src="sirotan.png" alt="Sirotan" style={s} />;
  }
  
  render(){
    return  <div>
      <h1 className="bg-primary text-white display-4">React</h1>  
      <div className="container">
        <p className="subtitle">draw sirotan.</p>
        <div style={this.area} onClick={this.doAction}>
          {this.data.map((value)=>this.draw(value))}
        </div>
      </div>
    </div>
  }
}

export default App
