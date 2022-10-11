import React from "react";
import './Card.css';

class Card extends React.Component{

    render(){
        const {title} = this.props;
        return(
            <div className="card">
                <div className="card-title">
                   {title}
                </div>
                <div className="card-img">
                    lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem  lorem ipsum lorem lorem 
                    lorem ipsum lorem lorem 
                </div>
            </div>
        )
    }
}

export default Card;