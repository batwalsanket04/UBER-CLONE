import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Componants/LocationSearchPanel";
import ComfirmRide from "../Componants/ComfirmRide";
import LookingForDriver from "../Componants/LookingForDriver";

const MainHome = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelCloseRef = useRef(null);
  const vehicalpanelRef = useRef(null);
  const [vehicalpanel, setVehicalpanel] = useState(false);
  const panelRef = useRef(null);
  const [confirmRidepanel, setconfirmRide] = useState(false);
  const confirmRidepanelRef = useRef(null);
  const vehicalFoundRef = useRef(null);
  const [vehicalFound, setVehicalFound] = useState(false);

  const lookingDriverRef = useRef(null);
  const [lookingDriver, setLookingDriver] = useState(false);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: -20,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(
    function () {
      if (vehicalpanel) {
        gsap.to(vehicalpanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicalpanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicalpanel]
  );
  useGSAP(
    function () {
      if (confirmRidepanel) {
        gsap.to(confirmRidepanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidepanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidepanel]
  );
  useGSAP(
    function () {
      if (vehicalFound) {
        gsap.to(vehicalFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicalFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicalFound]
  );

  useGSAP(
    function () {
      if (lookingDriver) {
        gsap.to(lookingDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingDriver]
  );

  return (
    /* OUTER WRAPPER BLANK SIDES */
    <div className="min-h-screen w-full bg-white flex justify-center">
      {/* APP CONTAINER */}
      <div className="relative w-full max-w-[420px] h-screen bg-gray-100 overflow-hidden">
        {/* LOGO */}
        <img
          className="w-10  top-4 left-4 z-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvX533EovsVfveDcBMdK97_2cXZPO_9TY03A&s"
          alt="logo"
        />

        {/* MAP */}
        <iframe
          onClick={() => setVehicalpanel(false)}
          className="h-[65%] w-full object-cover"
          title="map"
          src="https://www.google.com/maps?q=india,India&output=embed"
          loading="lazy"
        />

        {/* CONTENT */}
        <div className="flex flex-col justify-end h-full absolute top-0 w-full">
          {/* FORM PANEL */}
          <div className="h-[30%] bg-white p-6 relative">
            <h5
              ref={panelCloseRef}
              onClick={() => setPanelOpen(false)}
              className="absolute top-8 opacity-0 right-20 font-semibold"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-xl font-semibold">Find a trip</h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="absolute w-1 h-14 top-[50%] left-10 bg-gray-600 rounded-full"></div>

              <input
                onClick={() => setPanelOpen(true)}
                className="bg-[#eee] py-2.5 px-10 rounded-lg w-full mt-5 text-sm"
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Add a pick up location"
              />

              <input
                onClick={() => setPanelOpen(true)}
                className="bg-[#eee] py-2.5  px-10 rounded-lg w-full mt-3 text-sm"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter your destination"
              />
            </form>
          </div>

          {/* SLIDE PANEL */}
          <div ref={panelRef} className="h-0 bg-white overflow-hidden ">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehicalpanel={setVehicalpanel}
            />
          </div>
        </div>

        <div
          ref={vehicalpanelRef}
          className=" fixed  w-full max-w-[420px] z-10 translate-y-full bottom-0 bg-white p-3 py-6 px-8"
        >
          <h5
            ref={vehicalpanelRef}
            onClick={() => setVehicalpanel(false)}
            className=" p-3 text-center  top-0"
          >
            <i className="ri-arrow-down-wide-line text-2xl text-gray-300"></i>
          </h5>
          <h3 className="text-2xl font-semibold mg-5 ">Choose a Vehicle</h3>

          <div
            onClick={() => setconfirmRide(true)}
            className="flex mt-2 active:border-2 active: border-black  mb-2  rounded-xl p-3  items-center justify-between"
          >
            <img
              className="h-17 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZwThJhRwbiVaddG9TP3e_QkPH--yNbFUpw&s"
              alt=""
            />
            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                GoCar{" "}
                <span>
                  <i className="ri-user-fill"></i>4
                </span>
              </h4>
              <h5 className="font-medium text-sm"> 2 min away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable,compact rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">$2.6</h2>
          </div>
          <div
            onClick={() => setconfirmRide(true)}
            className="flex active:border-2 active: border-black  mb-2  rounded-xl p-3  items-center justify-between"
          >
            <img
              className="h-17  "
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="b w-1/2 ml-1/2">
              <h4 className="font-medium text-base">
                bike{" "}
                <span>
                  <i className="ri-user-fill"></i>1
                </span>
              </h4>
              <h5 className="font-medium text-sm"> 2 min away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable,bike rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">$1</h2>
          </div>
          <div
            onClick={() => setconfirmRide(true)}
            className="flex  active:border-2 active: border-black mb-2  rounded-xl p-3  items-center justify-between"
          >
            <img
              className="h-18 "
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="b w-1/2">
              <h4 className="font-medium text-base">
                GoAuto
                <span>
                  <i className="ri-user-fill"></i>3
                </span>
              </h4>
              <h5 className="font-medium text-sm"> 3 min away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable,Auto rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">$1.6</h2>
          </div>
        </div>

        <div
          ref={confirmRidepanelRef}
          className="fixed w-full max-w-[420px] z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-8"
        >
          <ComfirmRide
  ref={confirmRidepanelRef}
  setconfirmRide={setconfirmRide}
  setVehicalFound={setVehicalFound}
  setLookingDriver={setLookingDriver}
/>
        </div>
        <div
          ref={lookingDriverRef}
          className="fixed w-full max-w-[420px] z-10 bottom-0 translate-y-full bg-white p-3 py-6 px-8"
        >
          <LookingForDriver
            SetlookingDriver={setLookingDriver}
            ref={lookingDriverRef}
          />
        </div>
      </div>
    </div>
  );
};

export default MainHome;
