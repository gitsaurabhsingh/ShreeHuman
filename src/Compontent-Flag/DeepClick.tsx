import React, { useState } from "react";
import Style from "./DeepClick.module.scss";
import LastVideo from "./LastVideo";
import Deep from "./Deep";
interface IArrow {
  deepArrow: any;
  setDeepArrow: any;
}

const DeepClick: React.FC<IArrow> = ({ deepArrow, setDeepArrow }) => {
  const [deepDisk, setDeepDisk] = useState(true);
  const [deepDiskArrow, setDeepDiskArrow] = useState(false);

  const handleArrowClick = () => {
    setDeepDisk(false);
    setDeepDiskArrow(true);
  };
  return (
    <>
      {deepDisk && (
        <>
          {deepArrow && (
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
                    <video autoPlay loop>
                      <source
                        src={`${process.env.PUBLIC_URL}/ShriRam-dewwali-vedio.webm`}
                      />
                    </video>
                  </div>

                  <div className={Style.button} onClick={handleArrowClick}>
                    <button>Enter To Deepotsav</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Deep deepVideo={deepDiskArrow} setDeepVideo={setDeepDiskArrow} />
    </>
  );
};

export default DeepClick;
