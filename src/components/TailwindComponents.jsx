import React from "react";

const TailwindComponents = () => {
  return (
    <div>
      {" "}
      <div className=" w-[23rem] md:w-96 h-auto rounded-lg bg-white  p-3 flex flex-col shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <div className="flex gap-3 items-center">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h6 className="text-black text-base font-lexend mb-1">
              Cheif Finance Officer
            </h6>
            <p className="text-sky-300  text-sm font-lexend">Sadio Mary</p>
          </div>
        </div>
      </div>
      <div className="w-96 h-auto rounded-lg bg-white  p-3 flex flex-col shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <div className="flex gap-3 items-center">
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h6 className="text-black  text-base font-lexend mb-1">
              Financial Analyst
            </h6>
            <p className="text-sky-300  text-sm font-lexend">Roy Flint</p>
          </div>
        </div>
      </div>
      <div className="w-96 h-auto rounded-lg bg-white  p-3 flex flex-col shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <div className="flex gap-3 items-center">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h6 className="text-black  text-base font-lexend mb-1">
              Product Designer
            </h6>
            <p className="text-sky-300  text-sm font-lexend">Esther Jacobs</p>
          </div>
        </div>
      </div>
      <div className="w-96 h-auto rounded-lg bg-white  p-3 flex flex-col shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        <div className="flex gap-3 items-center">
          <img
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h6 className="text-black  text-base font-lexend mb-1">
              Front-end Engineer
            </h6>
            <p className="text-sky-300  text-sm font-lexend">David Arnold</p>
          </div>
        </div>
      </div>{" "}
      <h1 className=" font-bold border-b-4 text-center border-indigo-500 border-width-1 text-red-600 p-1 capitalize md:text-2xl sm:text-base lg:text-3xl">
        Hello world!
      </h1>
      <div className="mt-2 flex w-full h-auto space-x-4 flex-col lg:flex-row">
        <div className="basis-1/5 min-w-min bg-indigo-500 rounded-md  flex text-white items-center justify-center">
          <p>Initial Side Bar</p>
        </div>
        <div className="basis-3/5 bg-red-500 rounded-md p-2 flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-24 h-24 bg-sky-700 rounded-md"></div>
            <div className="w-24 h-24 bg-red-700 rounded-md"></div>
            <div className="w-24 h-24 bg-indigo-700 rounded-md"></div>
          </div>
        </div>
        <div className=" md:w-32 bg-red-600 rounded-md basis-1/5  flex text-white items-center justify-center ">
          <p>Final Side Bar</p>
        </div>
      </div>
      <div className="flex gap-1 w-full flex-col  lg:flex-row ">
        <div className="grid lg:grid-cols-3 gap-2 grid-cols-2  w-full md:basis-3/6 p-6">
          <div className="w-auto h-24 bg-sky-700 rounded-md text-white flex items-center justify-center col-start-2 lg:col-start-2 lg:col-span-2">
            01{" "}
          </div>
          <div className="w-auto h-24 bg-red-700 rounded-md text-white flex items-center justify-center col-span-2">
            02
          </div>
          <div className="w-auto h-24 bg-indigo-700 rounded-md text-white flex items-center justify-center ">
            03
          </div>
          <div className="w-auto h-24 bg-slate-700 rounded-md text-white flex items-center justify-center ">
            04
          </div>
          <div className="w-auto h-24 bg-violet-700 rounded-md text-white flex items-center justify-center col-span-2">
            05
          </div>
          <div className="w-auto h-24 bg-orange-700 rounded-md text-white flex items-center justify-center col-span-2 lg:col-span-3">
            06
          </div>
        </div>

        <div className="grid lg:grid-rows-2 grid-flow-col gap-2 m-3 md:grid-rows-2 basis-3/6  bg-sky-200 p-6 rounded-md">
          <div className="w-auto h-auto  bg-sky-700 rounded-md text-white row-span-2  flex items-center justify-center">
            01{" "}
          </div>
          <div className="w-auto h-24 lg:h-auto bg-red-700 rounded-md text-white col-span-2 flex items-center justify-center ">
            02
          </div>
          <div className="w-auto h-24 lg:h-auto bg-indigo-700 rounded-md text-white  flex items-center justify-center">
            03
          </div>
          <div className="w-auto h-24 lg:h-auto bg-slate-700 row-start-2 col-span-2 rounded-md text-white  flex items-center justify-center">
            04
          </div>
          <div className="w-auto h-24 lg:h-auto bg-violet-700 rounded-md text-white  flex items-center justify-center">
            05
          </div>
          <div className="w-auto h-auto row-span-2 bg-orange-700 rounded-md text-white  flex items-center justify-center">
            06
          </div>
        </div>
      </div>
      <div className="grid  grid-flow-row-dense grid-cols-3 grid-rows-2  gap-2  max-w-3xl bg-orange-400 p-4 rounded-md mx-auto">
        <div className="w-auto  h-24 col-span-2  bg-sky-700 rounded-md  text-white   flex items-center justify-center">
          01
        </div>
        <div
          className="w-auto h-auto row-span-2 bg-red-700 rounded-md text-white flex items-center justify-center"
          style={{ order: "-1" }}
        >
          02
        </div>
        <div className="w-auto h-24  col-span-2 row-span-2 bg-indigo-700 rounded-md text-white flex items-center justify-center">
          03
        </div>
      </div>
    </div>
  );
};

export default TailwindComponents;
