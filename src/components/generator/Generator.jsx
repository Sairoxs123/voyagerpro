import React, { useState, useRef } from "react";
import "./generator.css";
import VerticalTimeline from "./VerticalTimeline";
import api, { isLoggedIn } from "../../utils/api";

const Generator = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [data, setData] = useState("");
  const [loader, setLoader] = useState("");
  const [preference,setPreference] = useState("");
  const [departure, setDeparture] = useState("");
  const [current, setCurrent] = useState("");
  const [length,setLength] = useState("");
  const contentRef = useRef(null);

  const types = ['Relaxing', 'Adventurous', 'Dangerous', 'Informative', 'Beach vacation', 'City break', 'Cultural immersion', 'Family vacation', 'Food and wine tour', 'Hiking and nature', 'Luxury getaway', 'Romantic escape', 'Skiing and snowboarding', 'Solo travel', 'Spa and wellness retreat', 'Wildlife safari', 'Yoga and meditation retreat', 'Volunteer and service trip']

  let depDisplay = !isLoggedIn() ? "none" : "block";

  async function run() {
    const payload = {
      destination,
      budget,
      currency,
      preference,
      length,
      departure,
      current,
      logged_in: isLoggedIn(),
    };

    try {
      const endpoint = isLoggedIn() ? "/api/generate/auth/" : "/api/generate/";
      const res = await api.post(endpoint, payload);

      if (res.data.text) {
        let text = res.data.text;
        let raw = text.split("</div>");
        let blah = [];
        for (let i = 0; i < raw.length; i++) {
          let temp = raw[i].replaceAll("\n", "");
          if (temp.trim() === "") continue;
          blah.push(temp);
        }
        setData(blah);
      } else {
        alert(res.data.message || "Failed to generate plan.");
      }
    } catch (err) {
      alert("Error generating plan. Please try again.");
      console.error(err);
    }

    setLoader("");
  }

    const generate = () => {
    if (!destination || !budget || !currency) {
      alert("Please fill all fields");
      return;
    }

    if (isLoggedIn() && (!departure || !current)) {
      alert("Please fill all fields");
      return;
    }

    setLoader(
      <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-yellow-400 via-orange-400 to-red-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md "></div>
      </div>
    );

    setData("");

    run();
  };

  return (
    <div className="">
      <div className="bg-gradient-to-l from-yellow-600 to-black text-slate-300 border border-slate-300 grid grid-col-2 mt-10 justify-center gap-4 rounded-3xl shadow-md sm:w-[600px] mx-auto lg:w-[1000px]">
        <div className="flex p-10">
          <strong className="text-3xl m-5 ">Enter Country: </strong>
          <input
            className="input input-ghost w-full max-w-xs m-5"
            type="text"
            placeholder="Country name"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="flex p-10">
          <strong className="text-3xl m-5">Enter Your Budget: </strong>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs m-5"
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <div className="flex p-10">
          <strong className="text-3xl m-5">Enter Currency: </strong>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs m-5"
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div className="flex p-10" style={{ display: depDisplay }}>
          <strong className="text-3xl m-5">Enter Date of Departure: </strong>
          <input
            type="date"
            placeholder="Enter date of departure"
            className="input input-ghost w-full max-w-xs m-5"
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div className="flex p-10" style={{ display: depDisplay }}>
          <strong className="text-3xl m-5">Enter Current Location: </strong>
          <input
            type="text"
            placeholder="Enter current location"
            className="input input-ghost w-full max-w-xs m-5"
            onChange={(e) => setCurrent(e.target.value)}
          />
        </div>
        <div className="flex p-10">
          <strong className="text-3xl m-5">Describe what kind of trip you want: </strong>
          <input
            list="types"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs m-5"
            onChange={(e) => setPreference(e.target.value)}
          />
          <datalist id="types">
            {types.map((element, index) => {
              return <option value={element} key={index}>{element}</option>
            })}
          </datalist>
        </div>
        <div className="flex p-10">
          <strong className="text-3xl m-5">Enter length of trip: </strong>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs m-5"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>


        <div className="flex justify-center">
          <button type="button" onClick={generate}>
            <div className="w-full h-40 flex items-center justify-center cursor-pointer ">
              <div
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-amber-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                  Generate
                </span>
              </div>
            </div>

          </button>
          <div className=" lg:mt-[-50px] lg:ml-10 sm:ml-20">
            {loader}
          </div>
        </div>
      </div>
      {
        data !== "" ? <VerticalTimeline data={data} />
        : null
      }
    </div>
  );
};

export default Generator;
