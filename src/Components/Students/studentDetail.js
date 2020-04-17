import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import '../../sass/detail.scss'

function StudentDetail(props) {
  const [student, setStudent] = useState({});

  useEffect(() => {
    if (props.match && props.user.user) getData(+props.match.params.id);
  }, [props.match, props.user.user]);

  const getData = (id) => {
    axios
      .get(`/api/students/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  };

  const backClicked = () => {
    props.history.goBack();
  };

  return (
    <div className="detail-main">
      {!props.user.isError ? (
        <section className='person-detail-section'>
          <div>
            <div>
              {student.first_name} {student.last_name}
            </div>
          </div>
          <article>{student.summary}</article>
          <div>
            <button onClick={backClicked}>Go Back</button>
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

export default connect(mapStateToProps)(StudentDetail);
