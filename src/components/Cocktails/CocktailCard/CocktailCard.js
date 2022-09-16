const CocktailCard = ({ title, imageSrc, description }) => (
  <div className="cocktails_section">
    <h4>{title}</h4>
    <img className="cocktail" alt="cocktail1" src={imageSrc} />
    <p>{description}</p>
  </div>
);

export default CocktailCard;
