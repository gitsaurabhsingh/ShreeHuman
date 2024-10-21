import React, { useState } from "react";
import Style from "./Header.module.scss";
import About from "../Compontent-About/About";
import Road from "../Compontent-Road/Road";
import Accordian from "../Compontent-Accordian/Accordian";
import Footer from "../Compontent-footer/Footer";
import Flag from "../Compontent-Flag/Flag";

const Header = () => {
  const [overlaydata, setOverlaydata] = useState(false);
  const [showdata, setShowdata] = useState(true);

  const handleClick = () => {
    setOverlaydata(true);
    setShowdata(false);
  };
  return (
    <>
      {showdata && (
        <>
          <div className={Style.Head}>
            <div className={Style.wrapper}>
              <div className={Style.HeadText}>
                <div className={Style.HeadDisk}>
                  <img
                    src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/banner_logo.png"
                    alt=""
                  />
                </div>
                <div className={Style.HeadDiskText}>
                  <h1>Digital Ram Mandir</h1>
                  <h3>
                    If you have not been able to go to Ayodhya yet, then let us
                    together build a digital temple of Lord Shri Ram and have
                    darshan of Ram Lala while sitting at home.
                  </h3>
                </div>
                <div className={Style.HeadButton} onClick={handleClick}>
                  <button>Enter Mandir</button>
                </div>
              </div>
            </div>
          </div>
          <About />
          <Road />
          <Accordian />
          <Footer />
        </>
      )}
      <Flag data={overlaydata} setData={setOverlaydata} />
    </>
  );
};

export default Header;
