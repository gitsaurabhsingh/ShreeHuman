import React, { useEffect, useState } from "react";
import Style from "./RamlalaClick.module.scss";
import Ramlala from "./Ramlala";

interface IRam {
  ramlalaArrow: any;
  setRamlalaArrow: any;
}

const RamlalaClick: React.FC<IRam> = ({ ramlalaArrow, setRamlalaArrow }) => {
  const [ramlalaDetailDisk, setRamlalaDetailsDisk] = useState(true);
  const [ramlalaDetailpush, setRamlalaDetailspush] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  const handleRamArrowClick = () => {
    setRamlalaDetailsDisk(false);
    setRamlalaDetailspush(true);
  };

  useEffect(() => {
    const mobileImage = () => {
      const mobileWidth = window.innerWidth <= 768;
      setMobile(mobileWidth);
    };
    window.addEventListener("resize", mobileImage);
    return () => {
      window.removeEventListener("resize", mobileImage);
    };
  }, []);
  return (
    <>
      {ramlalaDetailDisk && (
        <>
          {ramlalaArrow && (
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
                      src={
                        !mobile
                          ? "https://images.bhaskarassets.com/thumb/2048x0/web2images/web-frontend/3D-Ram-Mandir/new-main-bg-v1-desktop-hi.jpg"
                          : "https://images.bhaskarassets.com/thumb/2048x0/web2images/web-frontend/3D-Ram-Mandir/new-main-bg-v1-mobile-hi.jpg"
                      }
                      alt=""
                    />
                  </div>

                  <div className={Style.button} onClick={handleRamArrowClick}>
                    <button>Have darshan of Ramlala</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Ramlala
        RamlalaVedio={ramlalaDetailpush}
        setRamlalaVedio={setRamlalaDetailspush}
      />
    </>
  );
};

export default RamlalaClick;
