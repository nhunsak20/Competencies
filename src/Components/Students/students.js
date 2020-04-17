import React, { Component } from "react";
import axios from "axios";
import Student from "./student";
import Search from "../search";

import "./student.scss";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      inputStudent: "",
    };
  }

  componentDidUpdate(_, prevState) {
    if (this.state.inputStudent !== prevState.inputStudent) {
      axios
        .get(`/api/students?first_name=${this.state.inputStudent}`)
        .then((res) => {
          this.setState({
            students: res.data,
          });
        })
        .catch((err) => console.error(err));
    }
  }

  componentDidMount() {
    axios
      .get("/api/students")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  handleChanged = (event) => {
    this.setState({
      inputStudent: event.target.value,
    });
  };

  detailClicked = (id) => {
    this.props.history.push(`/students/${id}`);
  };

  render() {
    const student = this.state.students.map((student) => {
      return (
        <Student
          key={student.student_id}
          student={student}
          detailFN={this.detailClicked}
        />
      );
    });
    return (
      <div className="info-main">
        <div className="info-search-box">
          <Search changeFN={this.handleChanged} ph="Search first name"/>
        </div>
        <div className="student-main">
          <div className="student-item">{student}</div>
        </div>
      </div>
    );
  }
}

export default Students;
