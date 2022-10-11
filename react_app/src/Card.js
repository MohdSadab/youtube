import React from 'react';
import './Card.css';

class Card extends React.Component{


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
    
    componentWillUnmount(){
        console.log("component will unmount")
    }

    render(){
        const {title,clickHandler} =this.props;
        return(
            <div className="card" onClick={clickHandler}>
                <h1 className="card-title">
                    {title}
                </h1>
                <div className="card-body">
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                </div>
            </div>
        )
    }
}

export default Card;