import dessert111 from "../media/dessert111.png";
import dessert1 from "../media/dessert1.png";
import dessert2 from "../media/dessert2.png";
import ice1 from "../media/ice1.jpg";
import ice2 from "../media/ice2.jpg";
import ice3 from "../media/ice3.jpg";
import ice4 from "../media/ice4.jpg";

const Desserts = () => {
  return (
    <div>
      <div className="welcome">
        {" "}
        <h1 className="sweet"> Welcome to the Sweet Side !</h1>
      </div>
      <div className="dessert_container">
        <img alt="dessert" src={dessert111} className="dess1" />
        <img alt="dessert" src={dessert1} className="dess1" />
        <img alt="dessert" src={dessert2} className="dess1" />
      </div>

      <div className="ice_container">
        <div className="dessert_section">
          <h4>Horchata Semifreddo </h4>
          <img className="dessert" alt="dessert1" src={ice1} />
          <p>
            Normally served cold as a sweet cinnamon-and-rice drink, horchata
            translates seamlessly to this creamy dessert.
          </p>{" "}
        </div>
        <div className="dessert_section">
          <h4>ML's Best Cheesecake </h4>
          <img className="dessert" alt="dessert1" src={ice2} />
          <p>
            This cheesecake steps it up a notch with even more cream cheese and
            the addition of cream or a few extra egg yolks to create an
            ultra-rich, creamy and larger than life cheesecake.
          </p>
        </div>
        <div className="dessert_section">
          {" "}
          <h4>ML's Best Molten Chocolate Cake </h4>
          <img className="dessert" alt="dessert1" src={ice3} />
          <p>
            A deep chocolate cake with a liquid chocolate center. Our version
            has a spoonful of ganache in the center, which melts as the cake
            bakes through.
          </p>
        </div>
        <div className="dessert_section">
          {" "}
          <h4> Chocolate Cream Pie with Toasted Meringue </h4>
          <img className="dessert" alt="dessert1" src={ice4} />
          <p>
            The swirly meringue topping on this pie is stable enough to make a
            day ahead and keep chilled—even if you’ve brûléed it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
