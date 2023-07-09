import React from "react";
import "./footer.css";
const Footer = () => {
  const RefLink = ({ type, links }) => {
    return (
      <div className="elevate__footer-container_ref-item">
        <h4>{type}</h4>
        <div>
          {links?.map((l,i) => (
            <p key={i+l}>{l}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="elevate__footer section__padding">
      <div className="elevate__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others ?
        </h1>
        <button>Request Early Access</button>
      </div>
      <div className="elevate__footer-container">
        <div className="elevate__footer-container_main">
          <h1>ElevateAI</h1>
          <p>Oak Avenue Amritsar 144401, India</p>
        </div>
        <div className="elevate__footer-container_ref">
          <RefLink
            type="Links"
            links={["Contact", "Counters", "Social Media", "Overons"]}
          />

          <RefLink
            type="Company"
            links={["Contact", "Privacy Policy", "Terms & Conditions"]}
          />
          <RefLink
            type="Get in Touch"
            links={[
              "Amritsar 144401, India",
              "+91 9012345678",
              "srai86825@gmail.com",
            ]}
          />
        </div>
      </div>
      <div className="elevate__footer-copyright">
        <p>{`© ${new Date().getFullYear()}  ElevateAI. All rights reserved.`}</p>
        <p>
          Created with ❤️ by{" "}
          <span className="gradient__text">
            <a href="https://www.linkedin.com/in/saurabhkumarrai/">Saurabh!</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
