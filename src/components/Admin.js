import React, { Component } from 'react'



import { Link, Redirect } from 'react-router-dom'



export default class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            loggedIn

        }

        this.state = {
            data: "",
        }

    }




    handle(event) {
        this.setState({
            data: event.target.value
        })
    }
    render() {
        return (
            <div>
                <label>set United State time :</label> <input type="time" step="1" onChange={this.handle.bind(this)} /><input type="submit" value="submit" ></input>
                <br /><label>United State :</label><br /> <h1>{this.state.data}</h1>

                <fieldset>
                    <label>  London :</label> <input type="text" value={this.state.result} readOnly />
                    <label>  India :</label>  <input type="text" value={this.state.result} readOnly />

                    <br /></fieldset>



                <br />
                <br />
                <label>Time difference for London :</label> <input type="number" name="num"></input> <input type="submit" value="submit" ></input>       <label>Time difference for India :</label> <input type="number" name="num"></input> <input type="submit" value="submit" ></input>




                <br />
                <br />
                <br />
                <br />
                <Link to="/logout">Logout</Link>

            </div>
        )
    }
}