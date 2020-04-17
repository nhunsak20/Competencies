import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout, register, check } from "../Redux/userReducer";

import Login from "./Auth/login";
import Logout from "./Auth/logout";
import Register from "./Auth/register";

import "./nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      pathname: "",
      isRegister: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ pathname: this.props.location.pathname });
    }
    if (this.props.user.user.userID !== prevProps.user.user.userID) {
      this.props.check()
    }
  }

  componentDidMount() {
    this.setState({ pathname: this.props.location.pathname });
    this.props.check()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked = (username, password) => {
    this.props.login(username, password);
  };

  logoutClicked = () => {
    this.props.logout();
  };

  registerClicked = (username, password) => {
    this.props.register(username, password);
  };

  navChanged = (path) => {
    const student = document.getElementById("nav-student");
    const teacher = document.getElementById("nav-teacher");
    const course = document.getElementById("nav-course");
    const classes = document.getElementById("nav-class");

    if (path === "/") {
      student.style.backgroundColor = "transparent";
      teacher.style.backgroundColor = "transparent";
      course.style.backgroundColor = "transparent";
      classes.style.backgroundColor = "transparent";
    } else if (path === "/students") {
      student.style.backgroundColor = "blue";

      teacher.style.backgroundColor = "transparent";
      course.style.backgroundColor = "transparent";
      classes.style.backgroundColor = "transparent";
    } else if (path === "/teachers") {
      teacher.style.backgroundColor = "blue";

      student.style.backgroundColor = "transparent";
      course.style.backgroundColor = "transparent";
      classes.style.backgroundColor = "transparent";
    } else if (path === "/courses") {
      course.style.backgroundColor = "blue";

      student.style.backgroundColor = "transparent";
      teacher.style.backgroundColor = "transparent";
      classes.style.backgroundColor = "transparent";
    } else if (path === "/classes") {
      classes.style.backgroundColor = "blue";

      student.style.backgroundColor = "transparent";
      teacher.style.backgroundColor = "transparent";
      course.style.backgroundColor = "transparent";
    }
  };

  render() {
    const { isRegister } = this.state;
    this.navChanged(this.state.pathname);
    return (
      <div className="nav-header">
        <nav className="nav-contians">
          <div
            id="nav-student"
            onClick={() => this.props.history.push("/students")}
          >
            Student
          </div>
          <div
            id="nav-teacher"
            onClick={() => this.props.history.push("/teachers")}
          >
            Teachers
          </div>
          <div
            id="nav-course"
            onClick={() => this.props.history.push("/courses")}
          >
            Courses
          </div>
          <div
            id="nav-class"
            onClick={() => this.props.history.push("/classes")}
          >
            Classes
          </div>
        </nav>
        <div className="nav-inputs">
          {!this.props.user.user.userID ? (
            !isRegister ? (
              <div className="nav-auth-header">
                <h1>Login</h1>
                <Login loginFN={this.loginClicked} />
                <p>
                  Don't have an account?
                  <br /> register here:{" "}
                  <span
                    className="input-click"
                    onClick={() => this.setState({ isRegister: !isRegister })}
                  >
                    Register
                  </span>
                </p>
              </div>
            ) : (
              <div className="nav-auth-header">
                <h1>Register</h1>
                <Register registerFN={this.registerClicked} />
                <p>
                  Already have an account?
                  <br /> login here:{" "}
                  <span
                    className="input-click"
                    onClick={() => this.setState({ isRegister: !isRegister })}
                  >
                    Login
                  </span>
                </p>
              </div>
            )
          ) : (
            <Logout logoutFN={this.logoutClicked} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const { user } = reduxState;
  return {
    user
  };
};

export default connect(mapStateToProps, { login, logout, register, check })(
  withRouter(Nav)
);
