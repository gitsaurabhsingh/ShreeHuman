import React, { useState } from "react";
import Style from "./Accordian.module.scss";

const Accordian = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className={Style.Tab}>
      <div className={Style.wrapper}>
        <div className={Style.title}>
          <span>
            <img
              src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg1.png"
              alt=""
            />
          </span>
          <h2>FAQs</h2>
          <span>
            <img
              src="https://digitalrammandir.com/wp-content/uploads/2023/12/bg2.png"
              alt=""
            />
          </span>
        </div>
        <div className={Style.tabItem}>
          <div
            className={`${Style.Content} ${activeTab === 1 ? Style.open : ""}`}
            onClick={() => handleTab(1)}
          >
            <h2>What is Digital Ram Mandir?</h2>
            {activeTab === 1 && (
              <p>
                The Digital Ram Mandir is an artistic digital twin of the
                Physical Ram Mandir, aimed at facilitating online darshans of
                the Bhavya Ram Mandir through the comfort of your home and
                convenience of your time and in the form of immersive and
                entertaining 1-minute stories. Not only that, the Digital Ram
                Mandir also offers patrons (including Pravasi Bhartiyas) a
                chance to stay connected to their roots, culture, and traditions
                (i.e., The Sanatan Dharma) through the power of our endless
                mythological characters.
              </p>
            )}
          </div>
          <div
            className={`${Style.Content} ${activeTab === 2 ? Style.open : ""}`}
            onClick={() => handleTab(2)}
          >
            <h2>What is the purpose of the Digital Ram Mandir?</h2>
            {activeTab === 2 && (
              <p>
                We are living in AI-driven attention deficit Economies wherein
                all Sanatanis of rising India and those living abroad want to
                stay connected to our spirituality but don’t have the time to
                read long manuscripts like Bhagavad Gita, Upanishads, and
                Puranas or attend physical religious offerings/Mandirs. We aim
                to satisfy the spiritual needs of this segment of people by
                offering them the Ram Mandir experience and many other
                experiential Mandir Darshans like char dham and 12 Jyotirlingas,
                aarti/ prasad offerings, and many such short-format religious
                and spiritual activities based on Upanishads, Bhagavad Gita,
                Mahabharata, Shiv Puran, Ram Charit Manas etc.. through our
                other platform <a href="#/">www.satyug.life.</a>
              </p>
            )}
          </div>
          <div
            className={`${Style.Content} ${activeTab === 3 ? Style.open : ""}`}
            onClick={() => handleTab(3)}
          >
            <h2>What is the business model of Digital Ram Mandir?</h2>
            {activeTab === 3 && (
              <p>
                The Digital Ram Mandir and Satyug are registered trademarks of
                Satyug Labs Private Limited, which is a software development
                company. The proceeds of all e-commerce offerings made on the
                Digital Ram Mandir website shall accrue directly to Satyug Labs
                Private Limited so they can continue to fund the creation of
                more religious and spiritual stories and Mandir Darshan
                offerings. 80% of donations made on{" "}
                <a href="#/">DigitalRamMandir.com </a> shall be directly
                processed into the account of Shri Ram Janmbhoomi Teerth Kshetra
                Trust in Ayodhya together with the upkeep of gaushaalas across
                the country whereas 20% will be kept to meet Satyug Foundation’s
                expenses.
              </p>
            )}
          </div>
          <div
            className={`${Style.Content} ${activeTab === 4 ? Style.open : ""}`}
            onClick={() => handleTab(4)}
          >
            <h2>
              Does Digital Ram Mandir facilitate other religious and cultural
              offerings?
            </h2>
            {activeTab === 4 && (
              <p>
                Yes, The Digital Ram Mandir through The Satyug Foundation shall
                be facilitating the upkeep of Gaushaalas across the country, and
                participate in activities that will promote Sanatan Dharma
                across the world.
              </p>
            )}
          </div>
          <div
            className={`${Style.Content} ${activeTab === 5 ? Style.open : ""}`}
            onClick={() => handleTab(5)}
          >
            <h2>What are the expansion plans of Digital Ram Mandir?</h2>
            {activeTab === 5 && (
              <p>
                The Digital Ram Mandir, as it exists today, is an artistic
                prototype of the Bhavya Ram Mandir in Ayodhya. Eventually, we
                intend to add the entire life journey of Prabhu Shri Ram and his
                maryadapurush life ideals through the creation of more
                activities within the Digital Ram Mandir platform. We also
                intend to add more facets to the Ram Mandir experience itself.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
