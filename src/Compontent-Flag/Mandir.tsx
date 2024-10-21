import React, { useState } from "react";
import Style from "./Mandir.module.scss";
import MakeMandir from "./MakeMandir";

interface IMandir {
  mandirdata: any;
  setMandirData: any;
}

const Mandir: React.FC<IMandir> = ({ mandirdata, setMandirData }) => {
  const [makeVideDisk, setMakeVideoDisk] = useState(true);
  const [makeVideoDetails, setMakeVideoDetails] = useState(false);
  const handleEnterClick = () => {
    setMakeVideoDisk(false);
    setMakeVideoDetails(true);
  };

  return (
    <>
      {makeVideDisk && (
        <>
          {mandirdata && (
            <div className={Style.overlay}>
              <div className={Style.wrapper}>
                <div className={Style.image}>
                  <span className={Style.firstImg}>
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png"
                      alt=""
                    />
                  </span>
                  <div className={Style.ImageMandirDisk}>
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/collective_p2/Ram%20Mandir%20ka%20Nirmaan.png"
                      alt=""
                    />
                  </div>

                  <div className={Style.button} onClick={handleEnterClick}>
                    <button>Click To Enter</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <MakeMandir
        makemandir={makeVideoDetails}
        setMakeMandir={setMakeVideoDisk}
      />
    </>
  );
};

export default Mandir;
