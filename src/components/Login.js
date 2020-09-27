import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Avatar } from 'antd';

export default class Login extends Component {
    constructor(props) {
        super(props)
        //    let loggedIn = false
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            username: "",
            password: "",
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        //login logic
        if (username === "pooja" && password === "pooja123") {
            localStorage.setItem("token", "abcdefgh")
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/admin" />
        }
        return (

            <div>
                <Avatar size={64} icon="U" />
                <h1></h1>

                <form onSubmit={this.submitForm}>

                    <label>User Name :</label> <input type="text" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.onChange}></input>
                    <br />
                    <br />


                    <label>Password :</label> <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChange}></input>
                    <br />
                    <br />

                    <input type="reset" value="Reset"></input>
                    <input type="submit" value="Login" ></input>


                </form>
            </div>
        )
    }
}
