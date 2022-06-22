import social1 from "../media/social1.png";
import social2 from "../media/social2.png";
import social3 from "../media/social3.png";

import hello from "../media/hello.png";
import web_icon from "../media/web_icon.jpg";

const Contact_us = () => {
  return (
    <div className="logo_container">
      <div className="dev_contact">
        <h4 className="my_contacts"> Contact the developer</h4>
        <h6> Boryana Dimitrova</h6>

        <a href="mailto:boryana.dimitrova789@gmail.com" target="_blank">
          <img alt="media" src={social1} className="media" />
        </a>
        <a
          href="http://www.linkedin.com/in/boryana-dimitrova94/"
          target="_blank"
        >
          {" "}
          <img alt="media" src={social2} className="media" />{" "}
        </a>
        <a href="https://github.com/boryand" target="_blank">
          {" "}
          <img alt="media" src={social3} className="media" />{" "}
        </a>
        <a href="https://www.boryana-dimitrova.com/" target="_blank">
          {" "}
          <img alt="media" src={web_icon} className="media" />{" "}
        </a>
      </div>
      <img className="dev" src={hello} alt="developer" />
    </div>
  );
};

export default Contact_us;
