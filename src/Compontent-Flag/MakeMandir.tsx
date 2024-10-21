import React, { useState } from "react";
import Style from "./MakeMandir.module.scss";
import LastVideo from "./LastVideo";
interface IMake {
  makemandir: any;
  setMakeMandir: any;
}

const MakeMandir: React.FC<IMake> = ({ makemandir, setMakeMandir }) => {
  const [lastData, setLastData] = useState(true);
  const [lastDetails, setLastDetails] = useState(false);

  const handleLastClick = () => {
    setLastData(false);
    setLastDetails(true);
  };
  return (
    <>
      {lastData && (
        <>
          {makemandir && (
            <div className={Style.Make}>
              <div className={Style.MakeMandir}>
                <video autoPlay>
                  <source
                    src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/Construction.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
              <div className={Style.Skhipdisk} onClick={handleLastClick}>
                <button>Continue To Activity</button>
              </div>
            </div>
          )}
        </>
      )}
      <LastVideo
        lastVideo={lastDetails}
        setLastVideo={setLastDetails}
        handleBackclick={undefined}
      />
    </>
  );
};

export default MakeMandir;
