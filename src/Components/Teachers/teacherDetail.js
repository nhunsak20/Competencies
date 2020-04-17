import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import '../../sass/detail.scss'

function TeacherDetail(props) {
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    if (props.match && props.user.user) getData(+props.match.params.id);
  }, [props.match, props.user.user]);

  const getData = (id) => {
    axios
      .get(`/api/teachers/${id}`)
      .then((res) => {
        setTeacher(res.data);
      })
      .catch((err) => console.log(err));
  };

  const backClicked = () => {
    props.history.goBack();
  };

  return (
    <div className="detail-main">
      {!props.user.isError ? (
        <section className="person-detail-section">
          <div className='pd-container'>
            <div>
              <h2>
              {teacher.degree}
              </h2>
              <article>
                {" "}
                {/* 54D-1 */}
                {teacher.summary}
              </article>
              <button onClick={backClicked}>Go Back</button>
            </div>
          </div>
        </section>
      ) : (
        <div className="error-message">
          <div>
            <h1>{props.user.message}</h1>
            </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (reduxSate) => {
  const { user } = reduxSate;
  return {
    user,
  };
};

export default connect(mapStateToProps)(TeacherDetail);
