import React, { useState } from "react";
import Style from "./Deep.module.scss";
import LastVideo from "./LastVideo";
interface IDeep {
  deepVideo: any;
  setDeepVideo: any;
}

const Deep: React.FC<IDeep> = ({ deepVideo, setDeepVideo }) => {
  const [deepDetails, setDeepDetails] = useState(true);
  const [lastVedio, setLastVedio] = useState(false);
  // const [darshanDetails, setDarshanDetails] = useState(true);

  const handleDeepClick = () => {
    setDeepDetails(false);
    setLastVedio(true);
  };

  const handleDeepEnd = () => {
    setDeepDetails(false);
    setLastVedio(true);
  };

  return (
    <>
      {deepDetails && (
        <>
          {deepVideo && (
            <div className={Style.Deep}>
              <div className={Style.DeepDisk}>
                <video autoPlay onEnded={handleDeepEnd}>
                  <source
                    src={`${process.env.PUBLIC_URL}/ayodhyawale ayodhya explore rammandir ayodhyadeepotsav  Ayodhya Deepotsav Ayodhya Deepotsav Ram Mandir Diwali .mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className={Style.Skhipdisk} onClick={handleDeepClick}>
                <button>Continue To Activity</button>
              </div>
            </div>
          )}
        </>
      )}
      <LastVideo lastVideo={lastVedio} setLastVideo={setLastVedio} />
    </>
  );
};

export default Deep;
