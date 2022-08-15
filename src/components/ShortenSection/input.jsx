import React, { useState, useContext } from "react";


function input({query, isError, submitQuery, updateQuery}) {

  const handelQuery = (e) => {
    updateQuery(e.target.value);
  };
  
  const onQuerySubmit = (e)=>{
    e.preventDefault();

    submitQuery(query)
  }

  return (
    <>
      <div className=" w-full">
        <form
          onSubmit={onQuerySubmit}
          className="flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full py-4 px-8 "
        >
          <div
            className={`flex-1 flex flex-col ${isError ? "mt-[20px]" : "mt-0"}`}
          >
            <input
              value={query}
              onChange={handelQuery}
              type="text"
              placeholder="Shorten a link here ..."
              className={`h-[50px] rounded indent-2 placeholder:text-xs sm:placeholder:text-sm sm:indent-8 w-full mt-4 sm:mt-0 ${
                isError ? "error-border placeholder:text-red-300" : ""
              }`}
            />
            {isError && (
              <p className="text-xs py-1 error-color block">
                Please enter a valid link
              </p>
            )}
          </div>
          <div className="flex  w-full sm:w-[120px] item-center justify-center">
            <button className=" w-full sm:w-[130px] justify-center bg-button mt-2 sm:mt-0 sm:mx-2 rounded text-xs py-2 sm:py-4  mb-4 sm:mb-0 hover:opacity-80">
              Shorten it!
            </button>
          </div>
        </form>
      </div>
      <div className="after:content-['']"></div>
    </>
  );
}

export default input;
