import React, { useState, createContext } from "react";
import CustomDropdown from "./dropdown/CustomDropdown";
import AppContext from "./context/AppContext";
import dropdownvalue from "./dropdownvalue.json";
import "./App.css";
import Dropdown from "./dropdown/Dropdown";

export const context = createContext();

function App() {
  const [data, setData] = useState(dropdownvalue);
  const [selected, setSelected] = useState("");
  const [store, setStore] = useState("");
  const [storeA, setStoreA] = useState("");
  const [storeB, setStoreB] = useState("");
  const [storeC, setStoreC] = useState("");
  const [storeD, setStoreD] = useState("");
  const [storeE, setStoree] = useState("");
  const [lable,setLabel]=useState("Current Week")
  const [lable1,setLabel1]=useState("Custom")
  const [lable2,setLabel2]=useState("JAVA")
  const [lable3,setLabel3]=useState("gopi")
  const [lable4,setLabel4]=useState("mobile")
  const [lable5,setLabel5]=useState("HTML")
  const [lable6,setLabel6]=useState("IND")
 

  return (
    <div>

      <context.Provider
        value={{
          data,
          selected,
          store,
          storeA,
          storeB,
          storeC,
          storeD,
          setStore,
          setSelected,
          setStore,
          setStoreA,
          setStoreB,
          setStoreC,
          setStoreD,
          storeE, setStoree,
          lable,
          lable1,
          lable2,
          lable3,
          lable4,
          lable5,
          lable6
        }}
      >
        <CustomDropdown/>
        <AppContext />
      </context.Provider>
     
    </div>
  );
}

export default App;
