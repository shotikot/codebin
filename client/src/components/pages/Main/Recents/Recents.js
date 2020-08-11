import React, { useState, useEffect } from "react";
import { Recent } from "./Recent/Recent";
import "./Recents.css";

export const Recents = () => {
  const [recents, setRecents] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/recent-bins");
      if (res.ok) {
        const data = await res.json();
        setRecents(data);
      }
    })();
  }, []);
  return (
    <div className="recents-container">
      <h2>Recent Bins</h2>
      {recents.map((item, i) => (
        <Recent
          key={i}
          createdAt={item.createdAt}
          mode={item.mode}
          filename={item.filename}
        />
      ))}
    </div>
  );
};
