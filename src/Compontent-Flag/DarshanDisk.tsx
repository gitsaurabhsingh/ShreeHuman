import React, { useState } from "react";
import Style from "./DarshanDisk.module.scss";
import LastVideo from "./LastVideo";

interface IDarshan {
  darshanvideo: any;
  setDarshanvideo: any;
}

const DarshanDisk: React.FC<IDarshan> = ({ darshanvideo, setDarshanvideo }) => {
  const [lastData, setLastData] = useState(true);
  const [darshanDisk, setDarshanDisk] = useState(false);

  const handleDarshanClick = () => {
    setLastData(false);
    setDarshanDisk(true);
  };

  const handleDiskEnd = () => {
    setLastData(false);
    setDarshanDisk(true);
  };

  return (
    <>
      {lastData && darshanvideo && (
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
      <LastVideo
        lastVideo={darshanDisk}
        setLastVideo={setDarshanDisk}
        handleBackclick={undefined}
      />
    </>
  );
};

export default DarshanDisk;
