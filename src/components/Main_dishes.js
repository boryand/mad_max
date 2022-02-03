import main1 from "../media/main1.jpg";
import main2 from "../media/main2.jpg";
import main3 from "../media/main3.jpg";
import main4 from "../media/main4.jpg";

const Main_dishes = () => {
  return (
    <div className="main_container">
       <button className="btn">
        {" "}
        <a href="/menu">Go Back</a>
      </button>
      <div className="main_section">
     
        {" "}
        <h4>Mock duck noodle bowls </h4>
        <img className="main" alt="main.dish" src={main1} />
        <p>
          A colourful, meat-free noodle bowl with mock duck. Simmer the
          plant-based protein with hoisin sauce and serve with ramen, veg and
          optional 7-minute eggs.
        </p>{" "}
      </div>
      <div className="main_section">
        <h4>Chicken cosmopolitan</h4>
        <img className="main" alt="main.dish1" src={main2} />
        <p>
          Our one-tray chicken cosmopolitan is baked with cranberries and a
          slosh of vodka.
        </p>
      </div>
      <div className="main_section">
        {" "}
        <h4>Slow-cooked chicken puttanesca</h4>
        <img className="main" alt="main.dish1" src={main3} />
        <p>
          Cook chicken puttanesca low and slow for an easy dinner with bold
          flavours.
        </p>
      </div>
      <div className="main_section">
        {" "}
        <h4>Steak with charred corn salsa and smoky butter </h4>
        <img className="main" alt="main.dish1" src={main4} />
        <p>
          Fancy a change from steak and chips? Try our easy steak with charred
          corn salsa for two. Drizzled with smoky butter,the flavour is one of a
          kind.
        </p>
      </div>
    </div>
  );
};

export default Main_dishes;
