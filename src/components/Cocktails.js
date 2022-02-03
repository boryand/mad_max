import drink1 from "../media/drink1.jpg";
import drink2 from "../media/drink2.jpg";
import drink3 from "../media/drink3.jpg";
import drink4 from "../media/drink4.jpg";

const Cocktails = () => {
  return (
    <div className="cocktails_container">
      <button className="btn">
        {" "}
        <a href="/menu">Go Back</a>
      </button>

      <div className="cocktails_section">
        <h4>Jessica Rabbit Cocktail</h4>
        <img className="cocktail" alt="cocktail1" src={drink1} />
        <p>
          Plenty of fresh ingredients lift this simple mezcal cocktail to create
          a sweet, light and wonderfully balanced drink.
        </p>{" "}
      </div>
      <div className="cocktails_section">
        <h4>Sweet manhattan cocktail </h4>
        <img className="cocktail" alt="cocktail1" src={drink2} />
        <p>
          If you're a whiskey lover, you'll love this sweet manhattan, made with
          whiskey, vermouth and bitters.
        </p>
      </div>
      <div className="cocktails_section">
        {" "}
        <h4>Blueberry mojito </h4>
        <img className="cocktail" alt="starter1" src={drink3} />
        <p>Sip our refreshing blueberry mojito when the sun starts to shine.</p>
      </div>
      <div className="cocktails_section">
        {" "}
        <h4>Piña Colada </h4>
        <img className="cocktail" alt="starter1" src={drink4} />
        <p>
          A tropical blend of rich coconut cream, white rum and tangy pineapple
          – we serve it with an umbrella for kitsch appeal
        </p>
      </div>
    </div>
  );
};

export default Cocktails;
