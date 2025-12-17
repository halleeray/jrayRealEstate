import React from "react";
import MainLayout from "../layouts/MainLayout";
import PropertyCard from "../components/PropertyCard";
import { PropertyItem } from "../types/PropertyItem";
import "../assets/css/Available.css";

function Closed() {
  const availableProperties: PropertyItem[] = [
    {
      streetAddress: "670 Wapati Dr",
      cityAddress: "Fraser, CO 80442",
      image: "images/berkhath.png",
      info: "4 Bed / 3 Bath / 2,576 Sq. Ft.",
      price: "$824,000",
    },
    {
      streetAddress: "16 Springview Lane Unit A 304",
      cityAddress: "Fraser, CO 80442",
      image: "images/berkhath.png",
      info: "3 Bed / 3 Bath / 1,580 Sq. Ft.",
      price: "$1,100,000",
    },
  ];

  return (
    <div>
      <MainLayout>
        <div className="pageTitle">RecentlyClosed</div>
        <div className="properties-container">
          {availableProperties.map((property) => (
            <PropertyCard key={property.streetAddress} property={property} />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default Closed;
