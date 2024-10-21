import React, { useRef, useState } from "react";
import Style from "./LastVideo.module.scss";
import rain from "../img/rain-removebg-preview.png";
interface ILast {
  lastVideo: any;
  setLastVideo: any;
  handleBackclick: any;
}

const LastVideo: React.FC<ILast> = ({
  lastVideo,
  setLastVideo,
  handleBackclick,
}) => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     whatsapp: "",
  //     email: "",
  //   });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
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
                  <img src={rain} alt="" />
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
                          type="text"
                          placeholder="Enter Your Whatsapp"
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
              <div className={Style.Muted}>
                <button onClick={toggleMute}>
                  {isMuted ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-volume-high"></i>
                  )}
                </button>
              </div>
              <div className={Style.Back} onClick={handleBackclick}>
                <button> Back</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LastVideo;
