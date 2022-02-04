import wine2 from "../media/wine2.jpg";
import wine3 from "../media/wine3.png";
import wine4 from "../media/wine4.png";
import wine5 from "../media/wine5.png";
import wine6 from "../media/wine6.png";

const Wine_list = () => {
  return (
    <div>
      <div className="wine_container">
        <img alt="wine" src={wine2} className="wine" />
      </div>
      <div className="wine_bottles">
        <div className="wine_bottle">
          <h4> Dominus Estate Napa Valley </h4>
          <p>Price: $269</p>
          <p>
            This is tightly packed, with sleek, pure, driven notes of cassis,
            plum reduction and blackberry puree allied to an iron spine, while
            subtle alder, juniper, sweet bay leaf and tobacco notes peek in
            throughout. Very fine-grained, but impressively sturdy in feel, with
            a long, lingering note of iron piercing the finish. For the cellar.
            Cabernet Sauvignon, Cabernet Franc and Petit Verdot. Best from 2024
            through 2040. 4,000 cases made.
          </p>
        </div>

        <div className="wine_bottle">
          <h4>Château Pichon Longueville Lalande Pauillac </h4>
          <p>Price: $198</p>
          <p>
            Offers a deep well of dark currant, blackberry paste and plum
            preserves fruit that needs time to unwind fully, as it’s shrouded in
            warm earth, tobacco, singed cedar, sweet bay leaf and savory notes.
            A ramrod of graphite adds to the strident, structured feel. Cabernet
            Sauvignon, Merlot, Cabernet Franc and Petit Verdot. Best from 2030
            through 2050. 13,000 cases made.
          </p>
        </div>

        <div className="wine_bottle">
          <h4>Heitz Cabernet Sauvignon Oakville Martha's Vineyard </h4>
          <p>Price: $250</p>
          <p>
            This throws off an overt and alluring mint aroma, while sweet bay
            leaf, violet, damson plum, red tea and steeped griotte notes all
            glide through together, carried by remarkably fine-grained tannins.
            Ends with a gentle echo of mint on the finish, while a subtle
            minerality chimes through as well. A stylish and suave wine, with
            plenty of charm now, but also pristine balance for cellaring. Best
            from 2022 through 2038. 2,500 cases made.
          </p>
        </div>

        <div className="wine_bottle">
          <h4>Merum Priorati Priorat Destí</h4>
          <p>Price: $49</p>
          <p>
            Refined and elegant, this concentrated red shows cherry, violet and
            anise notes, with expressive mineral undertones that give it
            finesse. Elements of mountain herb and spice echo through the
            finish. Grenache, Carignan and Syrah. Drink now through 2033. 14,000
            cases made, 1,600 cases imported.
          </p>
        </div>
      </div>

      <div className="pic_wine_container">
        <div className="hol">
          {" "}
          <img src={wine3} alt="wine" className="wine1" />{" "}
        </div>
        <div className="hol">
          {" "}
          <img src={wine4} alt="wine" className="wine1" />{" "}
        </div>
        <div className="hol">
          {" "}
          <img src={wine5} alt="wine" className="wine1" />{" "}
        </div>
        <div className="hol">
          {" "}
          <img src={wine6} alt="wine" className="wine1" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Wine_list;
