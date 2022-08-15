import React, { useState } from "react";

const ShortenContext = React.createContext({
  result: [],
  getShorten: (query) => {},
});

export const ShortenContextProvidor = (props) => {
  const [result, setResult] = useState([]);

  let APIKEY =
    "https://cutt.ly/api/api.php?key=d0d22081810600e3b0289a0ad7a01fa8d39d9&short=";

  const getShorten = async (query) => {
    let res = await fetch(`${APIKEY}${query}`);
    let data = await res.json();
    let short = data.url;
    setResult([short]);
  };

  return (
    <ShortenContext.Provider
      value={{
        result: result,
        getShorten: getShorten,
      }}
    >
      {props.children}
    </ShortenContext.Provider>
  );
};

export default ShortenContext;
