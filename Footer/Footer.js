import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex flex-row  bg-danger">
          <div className="List my-4">
            <h4 className=" text-center text-black">Get In Touch</h4>
            <h5 className="d-block m-3 text-black">
              <FontAwesomeIcon icon={faEnvelope} className="text-black mx-3" />
              email@gmail.com
            </h5>
            <h5 className="d-block m-3 text-black">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="text-black mx-3"
              />
              754875487548
            </h5>
          </div>
          <div className="List text-center my-5">
            <button type="button" className="btn btn-outline-light text-black Bttn">
              Contact US
            </button>
          </div>
          <div className="List text-center my-4 mx-2">
            <div className="d-flex flex-row IconsList ">
              <h5 className="d-block my-3">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-black mx-3"
                />
              </h5>
              <h5 className="d-block my-3">
                <FontAwesomeIcon icon={faTwitter} className="text-black mx-3" />
              </h5>
              <h5 className="d-block my-3">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-black mx-3"
                />
              </h5>
            </div>
            <h5 className="text-black ">
              Copyright
              <FontAwesomeIcon icon={faCopyright} className="text-black mx-1" />
              Team
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
