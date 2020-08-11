import React from "react";
import PropTypes from "prop-types";
import "./Panel.css";

export const Panel = ({
  mode,
  setMode,
  onSave,
  onNew,
  loading,
  status,
  prvt,
  setPrivate,
}) => {
  const modes = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css",
  ];
  return (
    <div className="panel-wrapper">
      <h2>
        <span>code</span>bin
      </h2>
      <div className="panel-select">
        <span>Mode: </span>
        <select value={mode} onChange={setMode} disabled={status}>
          {modes.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="private">
        <span>Private: </span>
        <input type="checkbox" checked={prvt} onChange={setPrivate} disabled={status}/>
      </div>
      <div className="buttons">
        {!status ? (
          <img
            src={
              loading
                ? require("./icons/load.svg")
                : require("./icons/save.svg")
            }
            alt="save"
            title="Save Bin"
            onClick={loading ? () => {} : onSave}
          />
        ) : null}
        <img
          src={require("./icons/add.svg")}
          alt="new"
          title="New Bin"
          onClick={onNew}
        />
      </div>
    </div>
  );
};

Panel.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onNew: PropTypes.func.isRequired,
  prvt: PropTypes.bool.isRequired,
  setPrivate: PropTypes.func.isRequired
};
