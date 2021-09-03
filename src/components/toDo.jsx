import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "../store";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <li>{text}</li>
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(del(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
