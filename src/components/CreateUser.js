import React, { Component } from 'react'

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: ""
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });    
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,

        }

        console.log(newUser);

        // window.location = "/";

        this.setState({
            username: ""
        })

    }

    render() {
        return (
            <div>
                <h2>New User</h2>
            </div>
        )
    }
}
