import React from "react";


class Card extends React.Component{

    componentWillUnmount(){
        console.log("component unmount called")
    }
    render(){
        const {title,src} = this.props;
        console.log(src,this.props)
        return(
            <div className="card">
                <div className="title">
                    {title}
                </div>
                <div className="card-img">
                        <img src="https://thumbs.dreamstime.com/b/beautiful-rain-for…-doi-inthanon-national-park-thailand-36703721.jpg" alt="img"/>
                </div>
            </div>
        )

    }
}

export default Card;