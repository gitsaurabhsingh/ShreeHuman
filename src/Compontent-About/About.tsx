import React from "react";
import Style from "./About.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const About = () => {
  return (
    <div className={Style.About}>
      <div className={Style.wrapper}>
        <div className={Style.AboutDisk}>
          <div className={Style.AboutFlex}></div>
          <div className={Style.AboutEnd}>
            <h2>About Us</h2>
            <p>
              Digital Ram Mandir is brought to you by Satyug Labs Private
              Limited, headquartered in New Delhi. It was founded in 2023 by a
              team of seasoned well-networked entrepreneurs together with a
              talented set of technical engineers to deliver spiritual content
              and experiences in the form of immersive activities and engaging
              stories, perfectly suited for the digital age and using digital
              money(i.e Bitcoin), so that people stay connected to their roots,
              traditions, culture, and spirituality. Satyug Life Foundation,
              headquartered in New Delhi was also founded in 2023 and aimed at
              providing donations to Mandir Trusts, upkeep of gaushalas,
              treatment of cancer-ridden children, maintenance of old age homes,
              and organizing Cultural activities suited for the digital age. We
              also intend to educate and encourage users to experience first
              hand the POWER of Bitcoin (World’s most perfected engineered
              cross-border instant settlement money)
            </p>
          </div>
        </div>
        <div className={Style.Vision}>
          <div className={Style.VisionImage}>
            <div className={Style.title}>
              <span>
                <img
                  src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png"
                  alt=""
                />
              </span>
              <h2>Our Vision</h2>
              <span>
                <img
                  src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
                  alt=""
                />
              </span>
            </div>
            <p>
              Digital Ram mandir is Satyug’s first vision to connect Indians to
              our Suryavanshi roots and culture. Eventually, Satyug will
              implement its full vision by introducing a new segment for the
              consumption of religious content, perfectly suited for the digital
              age and using digital money(i.e Bitcoin), thereby also promoting
              Sanatan Dharma’s ideals to the entire World. We will make it
              possible through the power of our endless treasure trove of
              mythological stories and the rich texts of our Puranas, Vedas,
              Mahabharat, Bhagavad Gita, Rigveda, Ram Charit Manas etc…
            </p>
          </div>
        </div>
        <div className={Style.ImageCarousal}>
          <Carousel showIndicators={false} showArrows={true}>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide1.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide2.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide3.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide4.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide5.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide7.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide6.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide8.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide10.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide11.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide12.jpg"
                alt=""
              />
            </div>
            <div className={Style.ImageDisk}>
              <img
                src="https://www.digitalrammandir.com/wp-content/uploads/2023/12/slide14.jpg"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
