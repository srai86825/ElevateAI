import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div id="home" className="elevate__header section__padding">
      <div className="elevate__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT-4 and ElevateAI!
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="elevate__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="elevate__header-content__people">
          <img src={people} />
          <p>1,800 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="elevate__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
