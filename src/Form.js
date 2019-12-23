import React from 'react'
export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Anything',
            show: false
        }
    }
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
            show : false

        })
    }
    buttonClicked = (event) => {
        this.setState({
            show : true
        })

    }
    render()
    {
        console.log("hi")
        return(
            <div>
                <div> Name: <input placeholder = 'Name' value = {this.state.name} onChange = {this.handleChange} ></input></div>
                <button onClick = {this.buttonClicked} >Click Button</button>
                <div>My name is:</div> {this.state.show && <div>{this.state.name}</div>}
            </div>
        )
    }
}