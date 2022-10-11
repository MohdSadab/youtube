import {Component} from 'react';
import Card from './Card';

 class Couter extends Component{

    constructor(){
        super();
        this.state={
            count:5,
            toggle:true
        }
        this.incrementHandler  = this.incrementHandler.bind(this);
        console.log("constructor called")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called",
        document.querySelector(".counter"))
        return null
    }

    shouldComponentUpdate(props,state){
        console.log("should omponent update called",props,state);
        return true
    }

    componentDidUpdate(props,state){
       
        console.log("api calling, dom tree access,  and state update here ")
        console.log("componentDidUpdate called",props,state);
    }

    incrementHandler(e){
        
        // this.state.count+=1;
        // console.log( this.state.count)
        // this.setState((prevState)=>{
        //     return{
        //         count:prevState.count+1
        //     }
        // })
        this.setState({count:this.state.count+1})
    }

    componentDidMount(){
        console.log("api calling, dom tree access,  and state update here ")
    }
    render(){
        console.log("render called")
        return(
            <div className='counter'>
                {
                    this.state.toggle && 
                    <Card title="Natural Image" src="my src"> </Card>
                }
                    <h1>{this.state.count}</h1>
                    <button onClick={this.incrementHandler}>Increment</button>
                    <button onClick={()=>this.setState((prevState)=>({toggle:!prevState.toggle}))}>
                        Toggle
                    </button>
            </div>
        )



    }


}

export default Couter;