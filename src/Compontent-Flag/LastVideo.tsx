import React, { useRef, useState } from "react";
import Style from "./LastVideo.module.scss";
import Barish from "../img/drop-removebg-preview.png";
interface ILast {
  lastVideo: any;
  setLastVideo: any;
}

const LastVideo: React.FC<ILast> = ({ lastVideo, setLastVideo }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVoice, setIsVoice] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      setIsVoice(newMutedState);
      videoRef.current.muted = newMutedState;
      console.log("Mute state changed to:", newMutedState);
    }
  };

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setErrror] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  //   const handleChange = (e: any) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name === "") {
      setErrror("Please Enter Name");
    } else {
      setErrror("");
    }
    if (whatsapp === "") {
      setError1("your whatsapp number");
    } else {
      setError1("");
    }
    if (email === "") {
      setError2("Please Enter your Email");
    } else {
      setError2("");
    }
  };
  const NUM_DROPS = 60;
  const RainDrop = () => {
    return (
      <>
        {Array.from({ length: NUM_DROPS }).map((_, index) => (
          <img
            key={index}
            src={Barish}
            alt="RainDrop"
            className={Style.Drop}
            style={{
              animationDelay: `${Math.random() * 3}s`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </>
    );
  };

  return (
    <>
      {lastVideo && (
        <div className={Style.LastDisk}>
          <div className={Style.wrapper}>
            <div className={Style.LastFlex}>
              <div className={Style.LastImg}>
                <div className={Style.LastPick}>
                  <img
                    src="https://dvf7opio6knc7.cloudfront.net/digital-logo1.png"
                    alt=""
                  />
                </div>
                <div className={Style.Rain}>
                  <RainDrop />
                </div>
                <div className={Style.formdisk}>
                  <form onSubmit={handleSubmit}>
                    <div className={Style.FormDisk}>
                      <label>Name :</label>
                      <div className={Style.formbox}>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <span className={Style.error}>{error}</span>
                      </div>
                    </div>

                    <div className={Style.FormDisk}>
                      <label>Whatsapp :</label>
                      <div className={Style.formbox}>
                        <input
                          type="number"
                          placeholder="Enter Your Whatsapp Number"
                          name="name"
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                        <span className={Style.error}>{error}</span>
                      </div>
                    </div>

                    <div className={Style.FormDisk}>
                      <label>Email :</label>
                      <div className={Style.formbox}>
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="name"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className={Style.error}>{error}</span>
                      </div>
                    </div>
                    <div className={Style.SubmitDisk}>
                      <img
                        src="https://dvf7opio6knc7.cloudfront.net/satyugImages/left-arrow.png"
                        alt=""
                      />
                      <button type="submit">Submit</button>
                      <img
                        src="https://dvf7opio6knc7.cloudfront.net/satyugImages/right-arrow.png"
                        alt=""
                      />
                    </div>
                  </form>
                </div>
                <div className={Style.Safe}>
                  <h3>*We are GDPR compliant and your data is safe</h3>
                </div>
              </div>
              <div className={Style.LastVideo}>
                <video ref={videoRef} autoPlay loop>
                  <source
                    src="https://dvf7opio6knc7.cloudfront.net/satyugvideos/BahumulyaWEBM.webm"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
              <div className={Style.Muted} onClick={toggleMute}>
                <button>
                  {isVoice ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-volume-high"></i>
                  )}
                </button>
              </div>
              <div className={Style.Back}>
                <h2>
                  <img
                    src="https://dvf7opio6knc7.cloudfront.net/satyugImages/left-arrow.png"
                    alt=""
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LastVideo;
