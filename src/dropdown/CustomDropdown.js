import React, { useContext } from "react";
import { context } from "../App";
import Dropdown from "./Dropdown";

const CustomDropdown = () => {
  const {
    data,
    selected,
    store,
    storeA,
    storeB,
    storeC,
    storeD,
    setSelected,
    setStore,
    setStoreA,
    setStoreB,
    setStoreC,
    setStoreD,
    storeE,
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

  return (
    <div className="container">
      <Dropdown
        lable={lable}
        value={selected}
        setSelected={setSelected}
        data={data.options}
      />
      <Dropdown
        lable1={lable1}
        value={store}
        setSelected={setStore}
        data={data.Bio}
      />
      <Dropdown
        lable2={lable2}
        value={storeA}
        setSelected={setStoreA}
        data={data.number}
      />
      <Dropdown
        lable3={lable3}
        value={storeB}
        setSelected={setStoreB}
        data={data.Names}
      />
      <Dropdown
        lable4={lable4}
        value={storeC}
        setSelected={setStoreC}
        data={data.mobile}
      />
      <Dropdown
        lable5={lable5}
        value={storeE}
        setSelected={setStoree}
        data={data.Language}
      />
      <Dropdown
        lable6={lable6}
        value={storeD}
        setSelected={setStoreD}
        data={data.country}
      />
      <Dropdown
        lable6={lable6}
        value={storeD}
        setSelected={setStoreD}
        data={data.country}
      />
      <Dropdown
        lable6={lable6}
        value={storeD}
        setSelected={setStoreD}
        data={data.country}
      />
      <Dropdown
        lable6={lable6}
        value={storeD}
        setSelected={setStoreD}
        data={data.country}
      />
    </div>
  );
};

export default CustomDropdown;
