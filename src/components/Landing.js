import video from "../media/video.mp4";
import logo from "../media/logo.png"

const Landing = () => {
  return (
    <div className="container1">
   
      <h1 className="message"> Enjoy the lux , you deserve it !</h1>
      <video width="1500" height="500" className="vid" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Landing;
