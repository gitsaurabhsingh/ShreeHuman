import React, { useState } from "react";
import Style from "./Flag.module.scss";
import ShreeHuman from "./ShreeHuman";
interface IOver {
  data: any;
  setData: any;
}

const Flag: React.FC<IOver> = ({ data, setData }) => {
  const [VideoData, setVideoData] = useState(false);
  const [videoDetail, setVideoDetail] = useState(true);

  const handlevideoClick = () => {
    setVideoData(true);
    setVideoDetail(false);
  };
  return (
    <>
      {videoDetail && (
        <>
          {data && (
            <div className={Style.overlay}>
              <div className={Style.wrapper}>
                <div className={Style.image}>
                  <span className={Style.firstImg}>
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/satyugImages/up-bow.png"
                      alt=""
                    />
                  </span>
                  <span className={Style.secondIMg}>
                    <img
                      src="https://dvf7opio6knc7.cloudfront.net/satyugImages/welcome-flag.png"
                      alt=""
                    />
                  </span>
                  <div className={Style.divide}>
                    <span>
                      <img
                        src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png%22"
                        alt=""
                      />
                    </span>
                    <h2>One slogan, One name Jai Shri Ram</h2>
                    <span>
                      <img
                        src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className={Style.button} onClick={handlevideoClick}>
                    <button>Click To Enter</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <ShreeHuman videoDisk={VideoData} SetVideoDisk={setVideoData} />
    </>
  );
};

export default Flag;
