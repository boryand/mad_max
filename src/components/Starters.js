import starter1 from "../media/starter1.jpg";
import starter2 from "../media/starter2.jpg";
import starter3 from "../media/starter3.jpg";
import starter4 from "../media/starter4.jpg";

const Starters = () => {
  return (
    <div className="starters_container">
      <button className="btn">
        {" "}
        <a href="/menu">Go Back</a>
      </button>
      <div className="starters_section">
        {" "}
        <h4>Individual smoked salmon terrines </h4>
        <img className="starter" alt="starter1" src={starter1} />
        <p>A delicious salmon,melting in your mouth.</p>{" "}
      </div>
      <div className="starters_section">
        <h4>Venison terrine with prunes, orange, juniper and thyme </h4>
        <img className="starter" alt="starter1" src={starter2} />
        <p>
          Gill Meller’s venison terrine, flavoured with orange zest and sweet
          prunes, makes a tasty starter served with tangy chutney and a good
          crusty loaf.
        </p>
      </div>
      <div className="starters_section">
        {" "}
        <h4>Mini mushroom and freekeh scotch eggs </h4>
        <img className="starter" alt="starter1" src={starter3} />
        <p>
          A vegetarian twist on a classic, these mini mushroom and freekeh
          scotch eggs make a fun festive starter and will satisfy whoever is at
          the table.
        </p>
      </div>
      <div className="starters_section">
        {" "}
        <h4>Mackerel pâté with quick-pickled radishes and spelt </h4>
        <img className="starter" alt="starter1" src={starter4} />
        <p>
          Homemade mackerel paté is an impressive starter. It’s served here with
          a Hoxton Bakehouse spelt loaf for the perfect sharing nibble.
        </p>
      </div>
    </div>
  );
};

export default Starters;
