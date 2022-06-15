import React from "react"
import { Card } from "./Card"

export const sayHello = ()=>{
    return "Hello"
}

export const sayPrivet = ()=>{
    return "Privet"
};

class Box extends React.Component{


    render() {

        console.log(this.props);

        return(
            <>
            {/* <h1>Salam</h1> */}
            {/* <p>
                {this.props.title} {this.props.age}
                </p> */}
            {this.props.data.users.map((user, index) => (<Card key={`card-${index}`} user={user} />))}
            
            </>
        );
    }
}

export default Box;