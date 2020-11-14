import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";


export default class CreateWorkout extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        this.setState({
            users: ["test user"],
            username: "test user"
        });

        console.log(this.state.users);
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });    
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });    
    }
    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        });    
    }

    onChangeDate = (date) => {
        this.setState({
            date: date
        });    
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date

        }

        console.log(exercise);


        this.setState({
            username: "",
            description: "",
            duration: 0,
        })
        // window.location = "/";

    }

    render() {
        return (
            <div>
                <h2>New Workout Log</h2>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>User:</label>
                        <select className="form-control" required value={this.state.username} onChange={this.onChangeUsername} >
                            { 
                            this.state.users.map((user) => <option key={user} value={user}> {user} </option>)
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <input className="form-control" type="text" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <label>Duration:</label>
                        <input className="form-control" type="text" value={this.state.duration} onChange={this.onChangeDuration} />
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <DatePicker selected={this.state.date} onChange={this.onChangeDate } />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Log" className="btn btn-lg btn-danger form-control" />
                    </div>

                </form>
            </div>
        )
    }
}
