import drink1 from "../../media/drink1.jpg";
import drink2 from "../../media/drink2.jpg";
import drink3 from "../../media/drink3.jpg";
import drink4 from "../../media/drink4.jpg";
import CocktailCard from "./CocktailCard";

const cocktailCardsProps = [
  {
    title: "Jessica Rabbit Cocktail",
    imageSrc: drink1,
    description:
      "Plenty of fresh ingredients lift this simple mezcal cocktail to create a sweet, light and wonderfully balanced drink.",
  },
  {
    title: "Sweet manhattan cocktail",
    imageSrc: drink2,
    description:
      "If you're a whiskey lover, you'll love this sweet manhattan, made with whiskey, vermouth and bitters.",
  },
  {
    title: "Blueberry mojito",
    imageSrc: drink3,
    description:
      "Sip our refreshing blueberry mojito when the sun starts to shine.",
  },
  {
    title: "Piña Colada",
    imageSrc: drink4,
    description:
      "A tropical blend of rich coconut cream, white rum and tangy pineapple – we serve it with an umbrella for kitsch appeal",
  },
];

const Cocktails = () => (
  <div className="cocktails_container">
    <button className="btn">
      <a href="/menu">Go Back</a>
    </button>
    {cocktailCardsProps.map((cocktailCardProps) => (
      <CocktailCard key={cocktailCardProps.title} {...cocktailCardProps} />
    ))}
  </div>
);

export default Cocktails;
