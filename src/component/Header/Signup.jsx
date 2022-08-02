import { Component } from "react";
import "../../Sass/Signup.scss";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser } from "react-icons/fi";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      myfirst: "",
      mylast: "",
      myname: "",
      mypass: "",
    };
  }

  myFirstchange = (event) => {
    this.setState({ myfirst: event.target.value });
  };

  myLastchange = (event) => {
    this.setState({ mylast: event.target.value });
  };

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
      <div className="signup">
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
              <h3>Create an Account</h3>

              <label htmlfor="exampleInputPassword1" className="">
                First name
              </label>
              <input
                type="text"
                onChange={this.myPasschange}
                className=""
                id="exampleInputtext1"
              />

              <label htmlfor="exampleInputtext1" className="">
                Last name
              </label>
              <input
                type="text"
                onChange={this.myPasschange}
                className=""
                id="exampleInputtext1"
              />

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
                
                <label className="form-check-label" for="exampleCheck1">
                <input
                  type="checkbox"
                  id="exampleCheck1"
                />&nbsp;&nbsp;
                  Send me news and updates
                </label>
              </div>

              <div>
                <button>
                  <Link to="">Submit</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Create;
