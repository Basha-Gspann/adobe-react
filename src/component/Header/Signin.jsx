import { Component } from "react";
import "../../Sass/Signin.scss";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser } from "react-icons/fi";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      myname: "",
      mypass: "",
    };
  }

  myNamechange = (event) => {
    this.setState({ myname: event.target.value });
  };
  myPasschange = (event) => {
    this.setState({ mypass: event.target.value });
  };

  mySubmitfunction = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="signin">
        <div className="container">
          <form onSubmit={this.mySubmitfunction}>
            <div className="details">
              <div className="icons">
                <ul>
                  <li>
                    <Link to="/">
                      <FiArrowLeft size={23} />
                    </Link>
                  </li>
                  <li>
                    <FiUser size={23} />
                  </li>
                  <li>
                    <h5>Account</h5>
                  </li>
                </ul>
              </div>
              <hr />
              <h3>Sign-in to Your Account</h3>

              <label htmlfor="exampleInputEmail1" className="">
                Email address
              </label>
              <input
                type="email"
                onCh
                ange={this.myNamechange}
                className=""
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />

              <label htmlfor="exampleInputPassword1" className="">
                Password
              </label>
              <input
                type="password"
                onChange={this.myPasschange}
                className=""
                id="exampleInputPassword1"
              />

              <div className="">
                <a href="">
                  <p>Forget password?</p>
                </a>
                <button>
                  <a>
                    <Link to="/signup">Create Account?</Link>
                  </a>
                </button>

                <div className="submit">
                  <button>
                    <Link to="">Submit</Link>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Signin;
