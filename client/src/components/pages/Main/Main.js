import React, { useState, useEffect } from "react";
import { Panel } from "./Panel/Panel";
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

const Main = ({status, filename}) => {
  const [mode, setMode] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const changeHandler = e => {
    setMode(e.target.value);
  };
  const [value, setValue] = useState("");
  const onChange = v => {
    setValue(v);
  };
  useEffect(()=>{
    if(status){
      (async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if(res.ok){
          const data = await res.json();
          setValue(JSON.stringify(data));
        }
      })()
    }
  },[status])
  return (
    <div className="main-page page">
      <Panel
        onSave={() => {}}
        onNew={() => {}}
        mode={mode}
        setMode={changeHandler}
        loading={loading}
        status={status}
      />
      <AceEditor
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
