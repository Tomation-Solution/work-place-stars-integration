// import Audio from 'react-loader-spinner'
import ClipLoader from "react-spinners/ClipLoader";
import {  CSSProperties } from "react";

const Loader = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#044B69",
  };

  return (
    <div className="h-screen w-full grid place-items-center" >
     <ClipLoader
        color={"#044B69"}
      
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    
  )
}

export default Loader