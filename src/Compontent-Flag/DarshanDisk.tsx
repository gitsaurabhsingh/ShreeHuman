import React, { useState } from "react";
import Style from "./DarshanDisk.module.scss";
import RamlalaClick from "./RamlalaClick";

interface IDarshan {
  darshanvideo: any;
  setDarshanvideo: any;
}

const DarshanDisk: React.FC<IDarshan> = ({ darshanvideo, setDarshanvideo }) => {
  const [deepDetailData, setDeepDetailData] = useState(true);
  const [darshanDisk, setDarshanDisk] = useState(false);

  const handleDarshanClick = () => {
    setDarshanDisk(true);
    setDeepDetailData(false);
  };

  const handleDiskEnd = () => {
    setDarshanDisk(true);
    setDeepDetailData(false);
  };

  return (
    <>
      {deepDetailData && (
        <>
          {darshanvideo && (
            <div className={Style.Darshan}>
              <div className={Style.Darshanbar}>
                <video autoPlay onEnded={handleDiskEnd}>
                  <source
                    src="https://dvf7opio6knc7.cloudfront.net/video_v2/Mandir_Darshan.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className={Style.Darshanskhip} onClick={handleDarshanClick}>
                <button>Skip</button>
              </div>
            </div>
          )}
        </>
      )}
      <RamlalaClick
        ramlalaArrow={darshanDisk}
        setRamlalaArrow={setDarshanDisk}
      />
    </>
  );
};

export default DarshanDisk;
