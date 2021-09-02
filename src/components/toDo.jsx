import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <Link to={`/${id}`}>
      <li>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </li>
    </Link>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.delToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);