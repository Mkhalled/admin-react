/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import propsTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state, title: event.target.value };
    this.setState({ course });
    console.log(this.state.course.title);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save" />

        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propsTypes = {
  actions: propsTypes.object.isRequired,
  courses: propsTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
