import React, { useContext } from "react";
import { context } from "../App";
import { TiDeleteOutline } from "react-icons/ti";
import "./Context.css";

const AppContext = () => {
  const {
    selected,
    store,
    storeA,
    storeB,
    storeC,
    storeD,
    storeE,
    setSelected,
    setStore,
    setStoreA,
    setStoreB,
    setStoreC,
    setStoreD,
    setStoree,
    lable,
    lable1,
    lable2,
    lable3,
    lable4,
    lable5,
    lable6,
    title
  } = useContext(context);
console.log(title)


  const handleClear = () => {
    setSelected("");
    setStore("");
    setStoreA("");
    setStoreB("");
    setStoreC("");
    setStoreD("");
    setStoree("");
  };
  const handleselected = () => {
    setSelected("");
  };
  const handlestore = () => {
    setStore("");
  };
  const handlestoreA = () => {
    setStoreA("");
  };
  const handlestoreB = () => {
    setStoreB("");
  };
  const handlestoreC = () => {
    setStoreC("");
  };
  const handlestoreD = () => {
    setStoreD("");
  };
  const handlestoreE = () => {
    setStoree("");
  };
  return (
    <div className="context_div">
         
      <div className="box">
        {selected !== "" && (
          <div>
            <div className="allstates">
              {lable}: {selected}
              <TiDeleteOutline
                onClick={handleselected}
                className="deleteicon"
              />
            </div>
          </div>
        )}
        {store !== "" && (
          <div>
            <div className="allstates">
              {lable1}:{store}
              <TiDeleteOutline onClick={handlestore} className="deleteicon" />
            </div>
          </div>
        )}
        {storeA !== "" && (
          <div>
            <div className="allstates">
              {lable2}:{storeA}
              <TiDeleteOutline onClick={handlestoreA} className="deleteicon" />
            </div>
          </div>
        )}
        {storeB !== "" && (
          <div>
            <div className="allstates">
              {lable3}:{storeB}
              <TiDeleteOutline onClick={handlestoreB} className="deleteicon" />
            </div>
          </div>
        )}
        {storeC !== "" && (
          <div>
            <div className="allstates">
              {lable4}:{storeC}
              <TiDeleteOutline onClick={handlestoreC} className="deleteicon" />
            </div>
          </div>
        )}
        {storeD !== "" && (
          <div>
            <div className="allstates">
              {lable6}:{storeD}
              <TiDeleteOutline onClick={handlestoreD} className="deleteicon" />
            </div>
          </div>
        )}
        {storeE !== "" && (
          <div>
            <div className="allstates">
              {lable5}:{storeE}
              <TiDeleteOutline onClick={handlestoreE} className="deleteicon" />
            </div>
          </div>
        )}
      </div>
      <TiDeleteOutline onClick={handleClear} className="delete" />
    </div>
  );
};

export default AppContext;
