import { Component } from "react";
import "../../Sass/Signin.scss"
import { Link } from "react-router-dom";
import {FiArrowLeft,FiUser} from "react-icons/fi";


class Signin extends Component {
    constructor() {
        super()
        this.state = {
            myname: '',
            mypass: ''
        }
    }

    myNamechange = (event) => {
        this.setState({ myname: event.target.value })
    }
    myPasschange = (event) => {
        this.setState({ mypass: event.target.value })
    }

    mySubmitfunction = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="signin">
                <div className='container'>
                    <form onSubmit={this.mySubmitfunction}>
                        <div className="card details">
                        <div>
                            <ul>
                                <li>
                                <Link to="/"><FiArrowLeft size={23}/></Link>
                                </li>
                                <li>
                                    <FiUser size={23}/>
                                </li>
                                <li>
                                    <h5>
                                        Account
                                    </h5>
                                </li>
                            </ul>

                        </div>
                        <h3>Sign-in to Your Account</h3>
                        <div className="mb-3">
                            <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onChange={this.myNamechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onChange={this.myPasschange} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="forgetpassword">
                            <a href="" className="">
                                <p>Forget password?</p>
                            </a>
                            <a href="" className="">
                                <Link to="/signup">Create Account?</Link>
                            </a>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signin