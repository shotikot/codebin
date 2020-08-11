import React, { useState, useEffect } from "react";
import { Panel } from "./Panel/Panel";
import { useHistory } from "react-router-dom";
import AceEditor from "react-ace";
import "./Main.css";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-sass";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import { Recents } from "./Recents/Recents";

const Main = ({ status, filename }) => {
  const history = useHistory();
  const [mode, setMode] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [prvt, setPrivate] = useState(false);
  const changeHandler = e => {
    setMode(e.target.value);
  };
  const [value, setValue] = useState("");
  const onChange = v => {
    setValue(v);
  };
  const addHandler = async () => {
    setLoading(true);
    const res = await fetch("/add-bin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode,
        private: prvt,
        code: value,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      setLoading(false);
      history.push(`/p/${data.filename}`);
    }
  };
  useEffect(() => {
    if (status) {
      (async () => {
        const res = await fetch(`/fetch-bin/${filename}`);
        if (res.ok) {
          const data = await res.json();
          setValue(data.code);
          setMode(data.mode);
          setPrivate(data.private);
        }
      })();
    }
  }, [status, filename]);
  return (
    <div className="main-page page">
      <div className="bar-container">
        <Panel
          onSave={addHandler}
          onNew={() => history.push("/")}
          mode={mode}
          setMode={changeHandler}
          loading={loading}
          status={status}
          prvt={prvt}
          setPrivate={() => setPrivate(s => !s)}
        />
        <Recents />
      </div>
      <AceEditor
        enableSnippets={true}
        mode={mode}
        theme="monokai"
        value={value}
        defaultValue={status ? "Loading..." : ""}
        readOnly={status}
        onChange={onChange}
        className="main-editor"
      />
    </div>
  );
};

export default Main;
