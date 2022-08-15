//TODO: Import React Files
import React, { useContext } from "react";
import ShortenContext from "./context/shorten-context";

//TODO: Import All The Components files
import {
  Navbar,
  Hero,
  Shorten,
  Advanced,
  CTA,
  Footer,
} from "./components/index";

function App() {
  const ShortenCtx = useContext(ShortenContext);
  return (
    <div className="w-full">
      <div className="mx-10 md:mx-20 py-10 h-[56px]">
        <Navbar />
      </div>
      <div className="ml-0 sm:ml-20 py-20">
        <Hero />
      </div>
      <div
        className={`bg-slate-200 relative ${
          ShortenCtx.result.length > 0 ? "h-[800px]" : " h-[150px]"
        } `}
      >
        <div className="mx-20 ">
          <Shorten />
        </div>
      </div>
      <div className="bg-slate-200 py-20">
        <div className="mx-20">
          <Advanced />
        </div>
      </div>
      <div className="py-10 bg-dark">
        <CTA />
      </div>
      <div className="bg-gray-900 py-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
