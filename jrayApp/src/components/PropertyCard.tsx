import { PropertyItem } from "../types/PropertyItem";
import "../assets/css/PropertyCard.css";

interface Props {
  property: PropertyItem;
}

function PropertyCard({ property }: Props) {
  return (
    <div className="propertyCard">
      <div className="propertyImage">
        <img src={property.image} />
      </div>
      <div className="propertyPrice">{property.price}</div>
      <div className="propertyLabel">{property.streetAddress}</div>
      <div className="propertyLabel">{property.cityAddress}</div>
      <div className="propertyInfo">{property.info}</div>
    </div>
  );
}

export default PropertyCard;
