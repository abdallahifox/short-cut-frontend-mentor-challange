import React, { useContext, useState } from "react";
import Input from "./input";
import ShortenResult from "./shortenResult";

//TODO: Import CTX

import ShortenContext from "../../context/shorten-context";

function shorten() {
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  const ShortenCtx = useContext(ShortenContext);

  const queryUpdated = (q) => {
    setQuery(q);
  };
  const QuerySubmit = (query) => {
    let RgxURL = new RegExp(
      "(http|ftp|https)://[\\w-]+(\\.[\\w-]+)+([\\w-.,@?^=%&:/~+#-]*[\\w@?^=%&;/~+#-])?"
    );
    if (RgxURL.test(query) && query != "") {
      ShortenCtx.getShorten(query);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <section id="Features">
      <div className="after:content-[''] absolute -top-[50px] left-[50%] -translate-x-[50%] sm:left-[50%] lg:left-[50%] lg:-translate-x-1/2  h-full w-[90%]">
        <div className="shorten__box flex items-center justify-center w-full h-[170px] bg-dark rounded">
          <Input
            query={query}
            isError={isError}
            submitQuery={QuerySubmit}
            updateQuery={queryUpdated}
          />
        </div>
        <div className="flex flex-col mt-5 ">
          {ShortenCtx.result.length > 0 && <ShortenResult query={query} />}
        </div>
      </div>
    </section>
  );
}

export default shorten;
