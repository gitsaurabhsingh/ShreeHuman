import React, { useState } from "react";
import Style from "./ShreeHuman.module.scss";
import Mandir from "./Mandir";
interface IType {
  videoDisk: any;
  SetVideoDisk: any;
}

const ShreeHuman: React.FC<IType> = ({ videoDisk, SetVideoDisk }) => {
  const [mandirbar, setMandirbar] = useState(true);
  const [mandirDiskbar, setMandirDiskbar] = useState(false);

  const handleMandirClick = () => {
    setMandirbar(false);
    setMandirDiskbar(true);
  };

  const handleMandirEnd = () => {
    setMandirbar(false);
    setMandirDiskbar(true);
  };
  return (
    <>
      {mandirbar && (
        <>
          {videoDisk && (
            <div className={Style.Video}>
              <div className={Style.VideoDisk}>
                <video autoPlay onEnded={handleMandirEnd}>
                  <source
                    src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/before-game-480.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className={Style.Skhip} onClick={handleMandirClick}>
                <button>Skip</button>
              </div>
            </div>
          )}
        </>
      )}
      <Mandir mandirdata={mandirDiskbar} setMandirData={setMandirDiskbar} />
    </>
  );
};

export default ShreeHuman;
