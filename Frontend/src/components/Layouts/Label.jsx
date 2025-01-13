import React from "react";

const labelObject = [
  {
    type: "Food and Groceries",
    color: "#ffcd56",
    percent: "45%",
  },
  {
    type: "Utilities",
    color: "#36a2eb",
    percent: "20%",
  },
  {
    type: "TRavel and Vacation",
    color: "#ff6384",
    percent: "10%",
  },
];

const Label = () => {
  return (
    <>
      <div className="border  ">
        {labelObject.map((item, index) => (
          <div className="flex justify-between  w-60 ">
            <div className="">
              <div className="flex gap-2" key={index}>
                <div
                  className="w-2 h-2 rounded py-3"
                  style={{ background: item.color ?? "#f9c74f" }}
                ></div>
                <h3 className="text-md">{item.type ?? ""}</h3>
              </div>
            </div>

            <div className="">
              <h3 className="font-bold">{item.percent ?? 0}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Label;
