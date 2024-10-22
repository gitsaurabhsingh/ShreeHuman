import React, { useState } from "react";
import Style from "./MakeMandir.module.scss";
import DarshanDisk from "./DarshanDisk";

interface IMake {
  makemandir: any;
  setMakeMandir: any;
}

const MakeMandir: React.FC<IMake> = ({ makemandir, setMakeMandir }) => {
  const [DeepDiskDetails, setDeepDiskDetails] = useState(true);
  const [lastDeepDetails, setDeepDetails] = useState(false);

  const handleLastClick = () => {
    setDeepDetails(true);
    setDeepDiskDetails(false);
  };

  const handleMakeEnd = () => {
    setDeepDetails(true);
    setDeepDiskDetails(false);
  };

  return (
    <>
      {DeepDiskDetails && (
        <>
          {makemandir && (
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
        </>
      )}
      <DarshanDisk
        darshanvideo={lastDeepDetails}
        setDarshanvideo={setDeepDetails}
      />
    </>
  );
};

export default MakeMandir;
