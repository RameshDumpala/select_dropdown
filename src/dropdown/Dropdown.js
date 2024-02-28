import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import "./Dropdown.css";

const Dropdown = ({
  data,
  value,
  setSelected,
  lable,
  lable1,
  lable2,
  lable3,
  lable4,
  lable5,
  lable6,
}) => {
  const [isActive, setIsActive] = useState();

  const handleactive = (e) => {
    setIsActive(!isActive);
  };

  const handleitem = (item) => {
    setSelected(item);
    setIsActive(false);
  };
  console.log(value, "dfghjkl;");
  return (
    <div>
      <div className="lable">
        {" "}
        {lable}
        {lable1}
        {lable2}
        {lable3}
        {lable4}
        {lable5}
        {lable6}
      </div>

      <div className="dropdown-btn" onClick={(e) => handleactive()}>
        <span className="value"> {value}</span>
        <RiArrowDropDownLine className="dropicon" />
      </div>
      {isActive && (
        <div className="mainContainer">
          {data.map((item) => (
            <div onClick={() => handleitem(item)}  className="active">
              <span>
                {value === item && <TiTick />}</span>
                {item}
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
