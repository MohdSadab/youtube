import {Component} from 'react';
import Card from './Card';

export default class Counter extends Component{

    constructor(){
        super();
        this.state={
            count:10,
            toggle:true
        }
        this.incrementHandler = this.incrementHandler.bind(this);
        console.log("constructor called");
    }


    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called",props,state);
        return null;;
    }

    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate",state)
        return true;
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate ",prevProps,prevState,this.state)
    }

    incrementHandler(e){
        // this.state.count+=1;
        // console.log(this.state.count);
        // this.setState((prevState)=>{
        //     return{
        //         ...prevState,
        //         count:prevState.count+1
        //     }
        // })
         this.setState({count:this.state.count+1})
    }


    componentDidMount(){

        console.log("component did mount called");
    }

    render(){
        console.log("render get called")
        return(
            <div className='counter'>
                {/* {this.state.toggle? <Card title="Card 2" />:null} */}
                {this.state.toggle && <Card title="Card 2" />}
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementHandler}>
                    Increment
                </button>
                <button onClick={()=>this.setState((prevState)=>({toggle:!prevState.toggle}))}>
                    Toggle
                </button>
            </div>
        )

    }
}