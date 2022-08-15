import React, { useContext } from "react";

import ShortenContext from "../../context/shorten-context";

function shortenResult({ query }) {
  const ShortenCtx = useContext(ShortenContext);
  return (
    <>
      {ShortenCtx.result.length > 0 &&
        ShortenCtx.result.map((item) => {
          return (
            <div
              key={item.status}
              className="flex flex-col lg:flex-row sm:flex items-center sm:justify-between py-4 px-8 bg-white rounded mb-3"
            >
              <a href="#" className="mb-2 sm:mb-0">
                {item.fullLink}
              </a>
              <div className="after:content-[''] w-full my-2 lg:hidden">
                <div className="border border-b-2  w-full"></div>
              </div>
              <div className="flex flex-col lg:flex-row items-center space-x-3">
                <a href="#" className="mb-2 my-4 lg:my-0 lg:mb-0 text-cyan-500">
                  {item.shortLink}
                </a>
                <button className="bg-button cyan-color py-2 px-4">Copy</button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default shortenResult;
