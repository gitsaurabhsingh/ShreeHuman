import React, { useState } from "react";
import Style from "./MakeMandir.module.scss";

import DarshanDisk from "./DarshanDisk";

interface IMake {
  makemandir: any;
  setMakeMandir: any;
}

const MakeMandir: React.FC<IMake> = ({ makemandir, setMakeMandir }) => {
  const [darshanDetails, setDarshanDetails] = useState(true);
  const [lastDetails, setLastDetails] = useState(false);

  const handleLastClick = () => {
    setDarshanDetails(false);
    setLastDetails(true);
  };

  const handleMakeEnd = () => {
    setDarshanDetails(false);
    setLastDetails(true);
  };

  return (
    <>
      {darshanDetails && makemandir && (
        <div className={Style.Make}>
          <div className={Style.MakeMandir}>
            <video autoPlay onEnded={handleMakeEnd}>
              <source
                src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/Construction.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={Style.Skhipdisk} onClick={handleLastClick}>
            <button>Continue To Activity</button>
          </div>
        </div>
      )}
      <DarshanDisk
        darshanvideo={lastDetails}
        setDarshanvideo={setLastDetails}
      />
    </>
  );
};

export default MakeMandir;
