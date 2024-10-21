import React from "react";
import Style from "./Road.module.scss";

const Road = () => {
  return (
    <div className={Style.RoadHead}>
      <div className={Style.wrapper}>
        <div className={Style.RoadImg}>
          <div className={Style.title}>
            <span>
              <img
                src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png"
                alt=""
              />
            </span>
            <h2>Roadmap to Success</h2>
            <span>
              <img
                src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className={Style.Roadjanyuary}>
          <div className={Style.RoadFlex}>
            <h4>January</h4>
            <h3>2024</h3>
            <h5>Launch at the onset of Pran Pratishtha at Ram Mandir</h5>
          </div>
          <div className={Style.RoadText}>
            <h4>December</h4>
            <h3>2025</h3>
            <h5>Add Upanishads, Bhagavad Gita and Mahabharata Chapters</h5>
          </div>
        </div>
        <div className={Style.RoadArrow}>
          <img
            src="https://digitalrammandir.com/wp-content/uploads/2023/12/Group-1000003003.png"
            alt=""
          />
        </div>
        <div className={Style.RoadArrowdisk}>
          <div className={Style.RoadDisk}>
            <h2>December</h2>
            <h3>2023</h3>
            <h4>The WebPage</h4>
            <p>+ Ready with Phase-1 Ram Mandir activities + assets</p>
          </div>
          <div className={Style.RoadDisk}>
            <h2>April-Dec</h2>
            <h3>2024</h3>
            <h4>Add-ons</h4>
            <p>+ Launch more Religious Stories/Temples + assets</p>
          </div>
          <div className={Style.RoadDisk}>
            <h2>January</h2>
            <h3>2025</h3>
            <h4>Virtual LIVE Religious Tourism Launch</h4>
          </div>
          <div className={Style.RoadDisk}>
            <h2>August</h2>
            <h3>2026</h3>
            <h4>Digital Ram Mandir Network-State Launch</h4>
            <p>+ With Incentives</p>
          </div>
        </div>
        <div className={Style.India}>
          <div className={Style.IndiaGirl}>
            <img
              src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed-Ram-Mandir.png"
              alt=""
            />
          </div>
          <div className={Style.Blog}>
            <div className={Style.BLogText}>
              <div className={Style.Blogdisk}>
                <h1>Our Blogs</h1>
              </div>
              <div className={Style.BlogView}>
                <a href="/">View all</a>
              </div>
            </div>
            <div className={Style.BlogMandir}>
              <div className={Style.BlogRam}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed-5.png"
                  alt=""
                />
              </div>
              <div className={Style.BlogCulture}>
                <h2>
                  Reinforcing Devotees’ Connection to Faith and Culture through
                  Digital Realm{" "}
                </h2>
                <h3>Digital Ram Mandir</h3>
              </div>
            </div>
            <div className={Style.BlogMandir}>
              <div className={Style.BlogRam}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/02/unnamed.jpg"
                  alt=""
                />
              </div>
              <div className={Style.BlogCulture}>
                <h2>
                  The Architectural Masterpiece of Shri Ram Janmbhoomi Mandir
                  Unveiled
                </h2>
                <h3>Digital Ram Mandir</h3>
              </div>
            </div>
            <div className={Style.BlogMandir}>
              <div className={Style.BlogRam}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/01/unnamed-35.png"
                  alt=""
                />
              </div>
              <div className={Style.BlogCulture}>
                <h2>
                  How the Construction of Ram Mandir Shape India’s Economic
                  Trajectory?
                </h2>
                <h3>Digital Ram Mandir</h3>
              </div>
            </div>
            <div className={Style.BlogMandir}>
              <div className={Style.BlogRam}>
                <img
                  src="https://www.digitalrammandir.com/wp-content/uploads/2024/01/unnamed-34.png"
                  alt=""
                />
              </div>
              <div className={Style.BlogCulture}>
                <h2>Ram Mandir’s Virtual Excellence vs YouTube Boundaries</h2>
                <h3>Digital Ram Mandir</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Road;
