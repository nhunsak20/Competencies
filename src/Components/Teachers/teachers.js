import React, { Component } from "react";
import axios from "axios";
import Search from "../search";

import './teacher.scss'

class Teachers extends Component {
  constructor() {
    super();
    this.state = {
      teachers: [],
      inputTeacher: ''
    };
  }

  componentDidUpdate(_, prevState) {
    if (this.state.inputTeacher !== prevState.inputTeacher) {
        axios
          .get(`/api/teachers?last_name=${this.state.inputTeacher}`)
          .then((res) => {
            this.setState({
                teachers: res.data,
            });
          })
          .catch((err) => console.error(err));
      }
  }

  componentDidMount() {
    axios
      .get("/api/teachers")
      .then((res) => {
        this.setState({
          teachers: res.data,
        });
      })
      .catch((err) => {
        // window.alert(err)
      });
  }

  detailClicked = (id) => {
    this.props.history.push(`/teachers/${id}`);
  };

  handleChanged = event => {
      this.setState({
        inputTeacher: event.target.value
      })
  }

  render() {
    const teacher = this.state.teachers.map((teacher) => {
      return (
        <section key={teacher.teacher_id} id='teacher-section' className='teacher-section'>
          {" "}
          {/* 54D-2 */}
          <div className='teacher-container'>
            <div className='teacher-title'>
              <h2>
                {teacher.first_name} {teacher.last_name}
              </h2>
            </div>
            <div className='teacher-grad'>
              <label>Graduation: <br/>{teacher.degree} </label>
            </div>
            <div className='teacher-button'>
              <button onClick={() => this.detailClicked(teacher.teacher_id)}>
                Detail
              </button>
            </div>
          </div>
        </section>
      );
    });
    return (
      // <div>Teacher App</div>
      <div className="info-main">
        <div className="info-search-box">
          <Search changeFN={this.handleChanged} ph="Search last name"/>
        </div>
        <div className="teacher-main">
          <div className="teacher-item">
              {teacher}
            </div>
        </div>
      </div>
    );
  }
}

export default Teachers;
