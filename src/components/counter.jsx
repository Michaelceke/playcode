import React, {Component}  from "react";
import ReactDOM from "react-dom";

class Counter extends Component{
    state={
        value:this.props.cont.value,
        tags:["tag1","tag2"]
    };


    /* constructor(){
        super()
       // console.log("constructor",this);
     this.handleIncrement=this.handleIncrement.bind(this);

    } */
    a=5;
    styles={
        fontSize:"10px",
        fontWeight:"bold"
    }
     handleIncrement=()=>{
        this.setState({value:this.state.value+1})
    } 

    formatCount(){
        const {value}=this.props.cont;
        return value===0? "zero": value;
    }

    onDelete=()=>{
        this.props.delete()
        console.log(this.props.cont.id)
    } 
   
    render(){
        
    const inner="miichael;"
    const a=false;
       return (
        <React.Fragment > 

            <span style={this.styles} className="badge badge-primary m-2"> {this.formatCount()} </span>

            <button className="btn btn-secondary btn-sm" onClick={()=>this.props.onIncrement(this.props.cont)}> Increment</button>

            <button className="btn btn-danger btn-sm" onClick={()=>this.props.delete(this.props.cont.id)}> Delete</button>

            <ul>
               {this.state.tags.map(tg=><li key={tg}>{tg}</li>)}
            </ul>

            <h6>{this.state.tags.length===0 && "please create a new tag!"}</h6>
        
        </React.Fragment>
       );
    }
  
  
}

export default Counter;
