import React from "react";

const LocationSearchPanel = (props) => {
  const location = [
    "11A, Shaniwar wada, shaniwar peth,pune,411011",
    "16A, Kasaba peth , Near shaniwar Wada, pune,422011",
    "21A, Sadashiv peth, near Shanipar chauk pune,421011",
    "11A, Hasabanees bakhal,shaniwar peth, pune,411011",
  ];

  return (
    <div>
      {location.map(function (val) {
        return (
          <div
            onClick={() => {
  props.setVehicalpanel(true);
  props.setPanelOpen(false);
}}

            className=" mb-2 flex gap-4  border-2 p-3 border-gray-200  active:border-black rounded-2xl my-2items-center justify-start"
          >
            <h2 className="bg-[#eee] rounded-full h-8 w-12  flex items-center justify-center">
              <i class="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{val}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
