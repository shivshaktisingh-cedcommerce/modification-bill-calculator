import React, { Component } from 'react'
import "./Component1.css"

export default class Component1 extends Component {
    constructor(props) {
       super(props)
       this.state={
           unit:"",
           result:"",
           result1:""
          
       }
    }
    calculate=()=>{
        var units=document.getElementById("input1").value
        if(units===""){
            this.setState({result1:"Please enter your units"})
            return; 
        }



        var bill;
           this.setState({unit:units})
           if(units<=50){
               bill=units*3.5
               this.setState({result1:""})
           }
           if(units>50 && units<=150){
                bill= 50*3.5 + (units-50)*4
                this.setState({result1:""})

           }
           if(units>150 && units<=250){
            bill= 50*3.5 + 100*4 + (units-150)*5.2
            this.setState({result1:""})

           }
           if(units>250){
            bill= 50*3.5 + 100*4 + 100*5.2 +(units-250)*6.5
            this.setState({result1:""})

           }
           this.setState({result:"Your electricity bill is : Rs." + bill})
        
    }
  render() {
    return (
      <div id="component1">
          <div id="component11">
              <input type="number" id="input1" placeholder="Enter your Units"></input>
              <input type="button" id="btn" value="Calculate" onClick={this.calculate} ></input>
              <div id="result">{this.state.result}</div>
              <div id="result1">{this.state.result1}</div>
          </div>
      </div>
    )
  }
}
