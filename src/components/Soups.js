import soup1 from "../media/soup1.png";
import soup2 from "../media/soup2.png";
import soup3 from "../media/soup3.jpg";
import soup4 from "../media/soup4.jpg";

const Soups = () => {
  return (
    <div className="soup_container">
       <button className="btn">
        {" "}
        <a href="/menu">Go Back</a>
      </button>
      <div className="soup_section">

        {" "}
        <h4>Creamy Shrimp and Crab Bisque </h4>
        <img className="soup" alt="soup1" src={soup1} />
        <p>
          A delicious bisque made with shrimp and crab meat. A garnish of
          chopped green onions is always a delicious addition to this bisque.
        </p>{" "}
      </div>
      <div className="soup_section">
        <h4>Goulash soup </h4>
        <img className="soup" alt="soup1" src={soup2} />
        <p>
          This comforting, slow-simmered goulash soup – our version of the
          classic Hungarian stew in soup form – is a meal in itself.
        </p>
      </div>
      <div className="soup_section">
        {" "}
        <h4>Chef John's Cassoulet </h4>
        <img className="soup" alt="soup1" src={soup3} />
        <p>
          Cassoulet is one of the most delicious dishes you'll ever have. Plus,
          it's great for honing your observational skills, since no two
          cassoulet are the same, and the times I give are only a guide.
        </p>
      </div>
      <div className="soup_section">
        {" "}
        <h4>Broccoli and stilton soup </h4>
        <img className="soup" alt="soup1" src={soup4} />
        <p>
          Broccoli and stilton is a classic flavour combination, and this
          verdant green homemade version of the traditional soup can be made as
          creamy or as cheesy as you like.
        </p>
      </div>
    </div>
  );
};

export default Soups;
