import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import "./Recent.css";

export const Recent = ({ mode, createdAt, filename }) => {
  dayjs.extend(relativeTime);
  return (
    <div className="recent">
      <Link to={`/p/${filename}`}>
        <span className="normal">{filename}</span>
      </Link>
      <span className="small">
        {mode} | {dayjs(createdAt).fromNow()}
      </span>
    </div>
  );
};

Recent.propTypes = {
  mode: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};
