import React,{Component} from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

class Counters extends Component{
   state={
       counters:[
           {id:1,value:7},
           {id:2,value:0},
           {id:3,value:0},
           {id:4,value:2},
       ]
   }

   handleDelete=(id)=>{
     console.log(id)
     const counters=this.state.counters.filter(c=>c.id != id)
     this.setState({counters:counters})   //since 
    
        
   }
  handleReset=()=>{
      
      const counters=this.state.counters.map(c=>{
          c.value=0;
          return c;
      })
      this.setState({counters}) ;  //counters:counters
      };

      handleIncrement=counter=>{
         // this.setState({counters:counter.value+1})
         const counters= this.state.counters.map(each=>{
                 if (counter.id===each.id) 
                     each.value=each.value+1
                 return each
         })
         this.setState({counters}) ; 
      }

   render(){
       const b=2;
       const arr =[2,4,6,8,10] 
       const a=<counter/>
       const disp=this.state.counters.map(cont=> <Counter key={cont.id} cont={cont} selected={true} delete={this.handleDelete} onIncrement={this.handleIncrement}/>)

   return(
           <div> 
              
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}> Reset</button>
            <br/> <br/>
            {disp}  
            
           </div>
       );
   }
}

export default Counters