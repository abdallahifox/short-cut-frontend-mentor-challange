import React from "react";

function cta() {
  return (
    <section id="Pricing">
      <div className="cta text-center flex flex-col w-full items-center justify-center h-full py-4">
        <h1 className="text-white text-3xl font-bold my-3">
          Boost your links today
        </h1>
        <div className="mt-3">
          <button className="bg-button py-2 px-4 rounded-full text-xs hover:opacity-80">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default cta;
