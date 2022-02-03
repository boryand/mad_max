import { Parallax } from "react-parallax";
import pic1 from "../media/pic1.jpg";
import pic2 from "../media/pic2.jpg";
import pic3 from "../media/pic3.jpg";
import pic4 from "../media/pic4.jpg";

const Our_menu = () => {
  const inlineStyle = {
    left: "50%",
    top: "50%",
    position: "absolute",

    transform: "translate(-50%, -50%)",
    "font-family": "Comforter",
    "font-size": "8rem",
    color: "#fff4ef",
    "text-shadow": "5px 3px #990011ff ",
    cursor: "pointer",
  };

  const linkStyle = {
    "text-decoration": "none",
    color: "#fff4ef",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Parallax bgImage={pic1} strength={600}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <a style={linkStyle} href="/soups">
              Soups
            </a>
          </div>
        </div>
      </Parallax>
      <h1>___</h1>
      <Parallax bgImage={pic2} strength={600}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <a style={linkStyle} href="/starters">
              Starters
            </a>
          </div>
        </div>
      </Parallax>
      <h1>___</h1>
      <Parallax bgImage={pic4} strength={600}>
        <div style={{ height: 550 }}>
          <div style={inlineStyle}>
            <a style={linkStyle} href="/main_dishes">
              Main Dishes
            </a>
          </div>
        </div>
      </Parallax>
      <h1>___</h1>
      <Parallax bgImage={pic3} strength={600}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>
            <a style={linkStyle} href="/cocktails">
              Cocktails
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Our_menu;
