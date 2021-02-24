import React, { useState, useEffect } from "react";

export default function Unmounted() {
  const [state, setState] = useState();
  const fetch = () => {
    return "fetching data";
  };
  useEffect(() => {
    let isCurrent = true;
    fetch().then((data) => {
      if (isCurrent) {
        setState(data);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, [input]);
  return <div>Fix cannot update on unmounted component</div>;
}
