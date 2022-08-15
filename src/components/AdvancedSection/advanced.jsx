import React from "react";
import { statistics } from "../../contains";
function advanced() {
  return (
    <div>
      <div className="text-center">
        <h3 className="lg:text-3xl text-xl font-bold heading">
          Advanced Statstics
        </h3>
      </div>

      <div className="pharaghraph mt-10 text-center text-xs lg:text-md">
        Track how your links are performing <br className="lg:hidden" /> across
        the web with <br className="hidden lg:block" /> our advanced statistics
        dashboard.
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center w-full mt-10 relative">
        {statistics.map((item) => {
          return (
            <div
              className="w-full md:w-1/3 md:last:mt-10  md:first:-mt-10"
              key={item.id}
            >
              <div className="relative text-center md:text-left bg-white rounded  mt-10">
                <div
                  className={`before:content-[''] bg-cyan-500 w-16 h-2 absolute bottom-[-20%] left-[50%] translate-x-[-50%] rotate-90 md:bottom-[50%] md:left-[100%] md:rotate-0 md:translate-x-0 md:w-8 ${
                    item.id === "advanced-3" ? "hidden" : ""
                  } `}
                ></div>
                <div className="before:content-[''] bg-dark rounded-full p-2 absolute -top-[30px] left-[50%]  translate-x-[-50%] md:left-[30px] md:translate-x-[0%]">
                  <img src={item.icon} alt="" className="w-8 h-8" />
                </div>
                <h3 className="py-8 px-3 heading text-xl text-center md:text-left">
                  {" "}
                  {item.title}
                </h3>
                <p className="pharaghraph text-center md:text-left text-xs px-3 pb-8">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default advanced;
