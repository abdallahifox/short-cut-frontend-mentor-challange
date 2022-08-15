import React from "react";
import HeroImage from "./../../assets/images/illustrationWorking.svg";

function hero() {
  return (
    <section>
      <div className="flex flex-col-reverse sm:flex-row items-center">
        {/* CONTENT */}
        <div className="w-full flex flex-col space-y-4 my-3 text-center sm:text-left">
          <h4 className="mt-3 dark-color w-full [ text-4xl md:text-4xl lg:text-6xl ] heading font-bold leading-[3.2rem]">
            More then just <br /> shorter links
          </h4>
          <p className="text-xs pharaghraph">
            Build your brand’s recognition and
            <br /> get detailed insights on how your links are performing
          </p>
          <div className="button">
            <button className="bg-button py-2 px-4 rounded-full text-xs hover:opacity-80">
              Get Started
            </button>
          </div>
        </div>
        {/*IMAGE */}
        <div className="w-full">
          <img
            src={HeroImage}
            alt="Working illustration"
            className="w-full  object-cover "
          />
        </div>
      </div>
    </section>
  );
}

export default hero;
